import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const uri =
    "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net/subscribeEmail";
  const client = new MongoClient(uri);

  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    await client.connect();
    const database = client.db("subscribeEmail");
    const collection = database.collection("subscribeData");

    const result = await collection.insertOne({
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed!",
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to subscribe" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
