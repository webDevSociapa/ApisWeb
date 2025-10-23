import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net/";
const client = new MongoClient(uri);
const dbName = "contactForm";
const collectionName = "data";

export async function POST(req) {
  try {
    const body = await req.json();

    // connect to MongoDB
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // insert the received form data
    const result = await collection.insertOne(body);
    console.log("✅ Form data inserted:", result.insertedId);

    return Response.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  } finally {
    await client.close();
  }
}
