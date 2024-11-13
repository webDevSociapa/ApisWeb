import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

// MongoDB configuration
const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "our-Brand";
const collectionName = "productDetails";

// AWS S3 configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME;

async function connectToDb() {
  await client.connect();
  return client.db(dbName).collection(collectionName);
}

// POST: Add a new product with image upload
export async function POST(req) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const products = JSON.parse(formData.get("products")); // Assuming `products` is passed as a JSON string
    const bannerImage = formData.get("bannerImage"); // File object

    if (!bannerImage || !title) {
      return NextResponse.json(
        { message: "Title and Banner image are required" },
        { status: 400 }
      );
    }

    // Generate unique file name and upload image to S3
    const uniqueFileName = `${uuidv4()}_${bannerImage.name}`;
    const uploadParams = {
      Bucket: bucketName,
      Key: `products/${uniqueFileName}`,
      Body: Buffer.from(await bannerImage.arrayBuffer()),
      ContentType: bannerImage.type,
    };

    const uploadResult = await s3.upload(uploadParams).promise();
    const imageUrl = uploadResult.Location;

    // Insert product details into MongoDB
    const collection = await connectToDb();
    const newProduct = {
      title,
      products,
      bannerImage: imageUrl,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newProduct);

    return NextResponse.json({ message: "Product added successfully", result });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
  } finally {
    await client.close();
  }
}

// GET: Retrieve all products or a specific one by ID
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const collection = await connectToDb();
    let query = {};
    if (id) {
      query = { id: parseInt(id, 10) };
    }

    const data = await collection.find(query).toArray();
    if (data.length === 0) {
      return NextResponse.json({ message: "No product found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error retrieving product data:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } finally {
    await client.close();
  }
}

// PUT: Update product details by ID
export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
    }

    const collection = await connectToDb();
    const result = await collection.updateOne(
      { id: parseInt(id, 10) },
      { $set: { ...updateData, updatedAt: new Date() } },
      { upsert: false }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "No product found to update" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated successfully", result });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } finally {
    await client.close();
  }
}
