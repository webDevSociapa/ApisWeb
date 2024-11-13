import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "mediaSection";
const collectionName = "mediaSection_01";

async function connectToDb() {
  if (!client.isConnected) await client.connect();
  const database = client.db(dbName);
  return database.collection(collectionName);
}

// POST: Add a new slide
export async function POST(req) {
  try {
    const body = await req.json();
    const { desc, date, img, link } = body;

    if (!desc || !date || !img || !link) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const collection = await connectToDb();
    const existingSlide = await collection.findOne({ desc });

    if (existingSlide) {
      return NextResponse.json({ message: "Media Section already exists" }, { status: 409 });
    }

    const result = await collection.insertOne(body);
    return NextResponse.json({ message: "Slide added successfully", data: result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// GET: Fetch all slides
export async function GET() {
  try {
    const collection = await connectToDb();
    const data = await collection.find({}).toArray();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// PUT: Update slide data by title
export async function PUT(req) {
  try {
    const body = await req.json();
    const { title, img, content, path } = body;

    if (!title || (!img && !content && !path)) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const collection = await connectToDb();
    const result = await collection.updateOne(
      {},
      { $set: {title, img, content, path } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Slide not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Slide updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
