import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "HomeBanner";
const collectionName = "HomeBanner_01";

async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// POST API to handle video upload and store URL
export async function POST(req) {
    try {
        const formData = await req.formData();
        const videoFile = formData.get('mainBanner');
        
        if (!videoFile) {
            return NextResponse.json({ message: "Video file is required" }, { status: 400 });
        }
        // Define path to save the video
        const videoPath = path.join (process.cwd(), 'public/uploads', videoFile.name);
        // Ensure the directory exists
        fs.mkdirSync(path.dirname(videoPath), { recursive: true });
        // Convert ArrayBuffer to Buffer
        const buffer = Buffer.from(await videoFile.arrayBuffer());
        // Create a writable stream to save the video
        const videoStream = fs.createWriteStream(videoPath);
        videoStream.write(buffer);
        videoStream.end();
        const videoUrl = `/uploads/${videoFile.name}`; // Video URL for frontend usage
        // Save the video URL and hideShow flag in the database
        const collection = await connectToDb();
        await collection.updateOne(
            {},
            { $set: { mainBanner: videoUrl, hideShow: true } },
            { upsert: true }
        );
        return NextResponse.json({ message: "Video uploaded successfully", videoUrl });
    } catch (error) {
        console.error("Error uploading video:", error.message || error);
        return NextResponse.json({ message: `An error occurred during upload: ${error.message}` }, { status: 500 });
    }
}
// PUT API to update the hideShow field
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
// GET API to retrieve mainBanner video URL and hideShow field
export async function GET() {
    try {
        const collection = await connectToDb();
        const data = await collection.findOne({}, { projection: { mainBanner: 1, hideShow: 1 } });
        if (!data) {
            return NextResponse.json({ message: "Data not found" }, { status: 404 });
        }
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error retrieving data:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
