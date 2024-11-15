import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "Careers";
const collectionName = "apisLife";

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    region: process.env.AWS_REGION 
});

const bucketName = process.env.AWS_BUCKET_NAME;

async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

export async function POST(req) {
    try {
        const formData = await req.formData();
        const title = formData.get('title');
        const type = formData.get('type');
        const titleImage = formData.get('titleImage');
        const imageGroup = formData.getAll('imageGroup'); // Get multiple files for imageGroup
        
        if (!title || !titleImage || imageGroup.length === 0) {
            return NextResponse.json({ message: "Title, titleImage, and at least one image in imageGroup are required" }, { status: 400 });
        }

        // Upload titleImage to S3
        const uniqueTitleFileName = `${uuidv4()}_${titleImage.name}`;
        const titleUploadParams = {
            Bucket: bucketName, // Replac`e with your S3 bucket name
            Key: `apisLife/${uniqueTitleFileName}`,
            Body: Buffer.from(await titleImage.arrayBuffer()),
            ContentType: titleImage.type
        };
        const titleUploadResult = await s3.upload(titleUploadParams).promise();
        const titleImageUrl = titleUploadResult.Location;

        // Upload imageGroup files to S3
        const imageUrls = [];
        for (let image of imageGroup) {
            const uniqueFileName = `${uuidv4()}_${image.name}`;
            const uploadParams = {
                Bucket: bucketName, // Replace with your S3 bucket name
                Key: `apisLife/${uniqueFileName}`,
                Body: Buffer.from(await image.arrayBuffer()),
                ContentType: image.type
            };
            
            const uploadResult = await s3.upload(uploadParams).promise();
            imageUrls.push(uploadResult.Location);
        }

        // Insert data into the database
        const collection = await connectToDb();
        await collection.insertOne({
            title,
            type,
            titleImage: titleImageUrl,
            imageGroup: imageUrls,  // Store multiple image URLs as an array
        });

        return NextResponse.json({ message: "Blog data uploaded successfully", imageUrls });
    } catch (error) {
        console.error("Error uploading blog data:", error.message || error);
        return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const formData = await req.formData();
        const id = formData.get('id'); // You need a blogId to identify the blog post to update
        const title = formData.get('title');
        const type = formData.get('type');
        const titleImage = formData.get('titleImage');
        const imageGroup = formData.getAll('imageGroup'); // Get multiple files for imageGroup
        
        if (!id || !title || !titleImage || imageGroup.length === 0) {
            return NextResponse.json({ message: "ID, Title, Title Image, and at least one Image in Image Group are required" }, { status: 400 });
        }

        // Upload the titleImage to S3
        const uniqueTitleFileName = `${uuidv4()}_${titleImage.name}`;
        const titleUploadParams = {
            Bucket: bucketName, // Replace with your S3 bucket name
            Key: `apisLife/${uniqueTitleFileName}`,
            Body: Buffer.from(await titleImage.arrayBuffer()),
            ContentType: titleImage.type,
        };
        const titleUploadResult = await s3.upload(titleUploadParams).promise();
        const titleImageUrl = titleUploadResult.Location;

        // Upload imageGroup files to S3
        const imageUrls = [];
        for (let image of imageGroup) {
            const uniqueFileName = `${uuidv4()}_${image.name}`;
            const uploadParams = {
                Bucket: bucketName, // Replace with your S3 bucket name
                Key: `apisLife/${uniqueFileName}`,
                Body: Buffer.from(await image.arrayBuffer()),
                ContentType: image.type,
            };
            
            const uploadResult = await s3.upload(uploadParams).promise();
            imageUrls.push(uploadResult.Location);
        }

        // Connect to the database and update the blog data
        const collection = await connectToDb();
        const updateResult = await collection.updateOne(
            { _id: new ObjectId(id) }, // Find the document by blogId
            {
                $set: {
                    title,
                    type,
                    titleImage: titleImageUrl,
                    imageGroup: imageUrls,  // Store multiple image URLs as an array
                },
            }
        );

        if (updateResult.matchedCount === 0) {
            return NextResponse.json({ message: "No blog found with the provided ID" }, { status: 404 });
        }

        return NextResponse.json({ message: "Blog data updated successfully", imageUrls });
    } catch (error) {
        console.error("Error updating blog data:", error.message || error);
        return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    }
}



export async function GET(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        const collection = await connectToDb();
        
        let data;
        if (id) {
            data = await collection.findOne({ _id: new ObjectId(id) });
            if (!data) {
                return NextResponse.json({ message: "No document found with the provided ID" }, { status: 404 });
            }
        } else {
            data = await collection.find({}).toArray();
            if (data.length === 0) {
                return NextResponse.json({ message: "No data found" }, { status: 404 });
            }
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error retrieving data:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
