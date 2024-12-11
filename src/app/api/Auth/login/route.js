import { MongoClient } from "mongodb";
import NextCors from 'nextjs-cors';
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const dbName = "UserAuth";
const collectionName = "signUp";

let cachedClient = null;
let cachedDb = null;

async function connectToDb() {
    if (cachedClient && cachedDb) {
        return cachedDb.collection(collectionName);
    }

    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    const db = client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    return db.collection(collectionName);
}

// Global error handler
function handleErrorResponse(error, status = 500) {
    return NextResponse.json(
        { message: error.message || "Internal Server Error" },
        { status, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization" } }
    );
}

// Handle all OPTIONS requests for CORS preflight
export async function OPTIONS() {
    return NextResponse.json({}, { status: 204, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization" } });
}

// POST: Login User
export async function POST(req) {
    try {
        // Apply CORS handling before processing the request
        await NextCors(req);

        const body = await req.json();
        const { username, password } = body;

        const collection = await connectToDb();
        const user = await collection.findOne({ username });

        if (!user) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401, headers: { "Access-Control-Allow-Origin": "*" } }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401, headers: { "Access-Control-Allow-Origin": "*" } }
            );
        }

        return NextResponse.json(
            { message: "Login successful", user: { username: user.username } },
            { status: 200, headers: { "Access-Control-Allow-Origin": "*" } }
        );
    } catch (error) {
        return handleErrorResponse(error);
    }
}

// PUT: Create User
export async function PUT(req) {
    try {
        // Apply CORS handling before processing the request
        await NextCors(req);

        const body = await req.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json(
                { message: "Username and password are required" },
                { status: 400, headers: { "Access-Control-Allow-Origin": "*" } }
            );
        }

        const collection = await connectToDb();
        const existingUser = await collection.findOne({ username });

        if (existingUser) {
            return NextResponse.json(
                { message: "Username already exists" },
                { status: 400, headers: { "Access-Control-Allow-Origin": "*" } }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await collection.insertOne({ username, password: hashedPassword });

        return NextResponse.json(
            { message: "User created successfully!" },
            { status: 201, headers: { "Access-Control-Allow-Origin": "*" } }
        );
    } catch (error) {
        return handleErrorResponse(error);
    }
}
