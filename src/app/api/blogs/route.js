import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "ApisBlog";
const collectionName = "ApisBlog01";

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Store this in environment variables
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Store this in environment variables
    region: process.env.AWS_REGION // e.g., 'us-east-1'
});

const bucketName = process.env.AWS_BUCKET_NAME; // Your S3 bucket name

async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// POST API to handle image upload and save to S3
export async function POST(req) {
    try {
        const formData = await req.formData();
        const blogImage = formData.get('blogImage');
        const blogTitle = formData.get('blogTitle');

        console.log("formData",formData);
        if (!blogImage || !blogTitle) {
            return NextResponse.json({ message: "Banner file is required" }, { status: 400 });
        }
        // Generate a unique filename for the image
        const uniqueFileName = `${uuidv4()}_${blogImage.name}`;
        // Upload the image to S3
        const uploadParams = {
            Bucket: bucketName,
            Key: `blogs/${uniqueFileName}`, // Folder path inside S3 bucket
            Body: Buffer.from(await blogImage.arrayBuffer()),
            ContentType: blogImage.type,
            ACL: 'public-read', // Make the image publicly accessible
        };
        const uploadResult = await s3.upload(uploadParams).promise();
        const imageUrl = uploadResult.Location; // S3 URL of the uploaded image
        // Save the image URL and hideShow flag in the database
        const collection = await connectToDb();
        await collection.updateOne(
            {},
            { $set: { blogImage: imageUrl, hideShow: true } },
            { upsert: true }
        );

        return NextResponse.json({ message: "Banner uploaded successfully", imageUrl });
    } catch (error) {
        console.error("Error uploading banner file:", error.message || error);
        return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    }
}

// PUT and GET APIs remain unchanged.
export async function PUT(req) {
    try {
        const body = await req.json();
        const { hideShow } = body;

        if (typeof hideShow !== "boolean") {
            return NextResponse.json({ message: "hideShow must be a boolean value" }, { status: 400 });
        }

        const collection = await connectToDb();
        const result = await collection.updateOne(
            {},
            { $set: { hideShow } },
            { upsert: true }
        );

        return NextResponse.json({ message: "Visibility updated successfully", result });
    } catch (error) {
        console.error("Error updating visibility:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const collection = await connectToDb();
        const data = await collection.findOne({}, { projection: { bannerImage: 1, hideShow: 1 } });

        if (!data) {
            return NextResponse.json({ message: "Data not found" }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error retrieving data:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
