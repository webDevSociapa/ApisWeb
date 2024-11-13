import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// Connection URI and Database/Collection Names
const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "AboutusBanner";
const collectionName = "ourValues";

// Helper function to connect to the database
async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// POST method to add data
export async function POST(req) {
    try {
        const body = await req.json();
        const { visionContent, missionContent, valuesContent } = body;

        // Validate if required fields are present based on the type
        if ((!missionContent ) && (!visionContent) && (!valuesContent)) {
            return NextResponse.json(
                { message: `Content for  is required.` },
                { status: 400 }
            );
        }

        const collection = await connectToDb();

        // Check if data already exists for the provided type
        const existingData = await collection.find({  }).toArray();
        console.log("Existing Data Count:", existingData.length);

        // If no data exists for the provided type, insert new data
        if (existingData.length === 0) {
            const data = {visionContent, missionContent, valuesContent };
            await collection.insertOne(data);
        } else {
            return NextResponse.json({ message: `Data already exists for the type:.` });
        }

        return NextResponse.json(
            { message: "Data added successfully!", data: body }
        );
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

// GET method to retrieve data
export async function GET(req) {
    try {
        const collection = await connectToDb();
        const data = await collection.find({}).toArray();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

// PUT method to update data
export async function PUT(req) {
    try {
        const body = await req.json();
        const {visionContent, missionContent, valuesContent } = body;

        // Validate if required fields are present
        if ((!visionContent && !missionContent && !valuesContent)) {
            return NextResponse.json(
                { message: "Type and content are required to update." },
                { status: 400 }
            );
        }

        const collection = await connectToDb();
        const result = await collection.updateOne(
            {  },
            { $set: {  visionContent, missionContent, valuesContent } }
        );

        if (result.modifiedCount === 0) {
            return NextResponse.json(
                { message: "No document found with the provided type." },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Data updated successfully!", data: body });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}
