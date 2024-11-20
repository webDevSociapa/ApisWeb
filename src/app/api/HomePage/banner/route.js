import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "HomeBanner";
const collectionName = "HomeBanner_01";

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
})

const bucketName = process.env.AWS_BUCKET_NAME;


async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// POST API to handle video upload and store URL
export async function POST(req) {
    try {
        const formData = await req.formData();
        const videoFile = formData.get('videoFile');
        
        if (!videoFile) {
            return NextResponse.json({ message: "Video file is required" }, { status: 400 });
        }

        const uniqueFileName = `${uuidv4()}_${videoFile.name}`;
        console.log("uniqueFileName",uniqueFileName);
        
        const uploadParams = {
            Bucket: bucketName ,
            Key:`homeBanner/${uniqueFileName}`,
            Body: Buffer.from(await videoFile.arrayBuffer()),
            ContentType: videoFile.type
        }
        console.log("uploadParams",uploadParams);

        const uploadResult = await s3.upload(uploadParams).promise();
        console.log("uploadResult",uploadResult);

        const videoUrlData = uploadResult.Location;
        // Define path to save the video
        // const videoPath = path.join (process.cwd(), 'public/uploads', videoFile.name);
        // Ensure the directory exists
        // fs.mkdirSync(path.dirname(videoPath), { recursive: true });
        // Convert ArrayBuffer to Buffer
        // const buffer = Buffer.from(await videoFile.arrayBuffer());
        // Create a writable stream to save the video
        // const videoStream = fs.createWriteStream(videoPath);
        // videoStream.write(buffer);
        // videoStream.end();
        // const videoUrl = `/uploads/${videoFile.name}`; // Video URL for frontend usage
        // Save the video URL and hideShow flag in the database
        const collection = await connectToDb();
        await collection.insertOne({
            
            videoFile: videoUrlData,
            hideShow: true,
            upsert: true
    });
        return NextResponse.json({ message: "Video uploaded successfully", videoFile });
} catch (error) {
        console.error("Error uploading video:", error.message || error);
        return NextResponse.json({ message: `An error occurred during upload: ${error.message}` }, { status: 500 });
    }
}
// PUT API to update the hideShow field
// DELETE API to delete a video by ID and remove it from S3
export async function DELETE(req) {
    try {
        const { id } = await req.json(); // Expecting the video ID in the request body
        if (!id) {
            return NextResponse.json({ message: "Video ID is required" }, { status: 400 });
        }

        const collection = await connectToDb();

        // Find the video record in the database
        const videoRecord = await collection.findOne({ _id: new ObjectId(id) });

        if (!videoRecord) {
            return NextResponse.json({ message: "Video not found" }, { status: 404 });
        }

        const videoKey = videoRecord.videoFile.split('.com/')[1]; // Extract S3 key from URL

        // Delete video from S3 bucket
        const deleteParams = {
            Bucket: bucketName,
            Key: videoKey,
        };

        await s3.deleteObject(deleteParams).promise();

        // Remove the video entry from MongoDB
        const deleteResult = await collection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({
            message: "Video deleted successfully",
            deleteResult,
        });

    } catch (error) {
        console.error("Error deleting video:", error.message || error);
        return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    }
}

// GET API to retrieve mainBanner video URL and hideShow field
export async function GET() {
    try {
        const collection = await connectToDb();
        const data = await collection.find({}).toArray();
      
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error retrieving data:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
