import { MongoClient } from "mongodb";
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

// Get the allowed origin based on environment
function getAllowedOrigin(request) {
    const origin = request.headers.get("origin");
    const allowedOrigins = [
        "http://localhost:3001",
        "https://apis-web-dkcu.vercel.app",
        // Add any other allowed origins here
    ];

    return allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
}

// Reusable CORS headers function
function getCorsHeaders(request) {
    const origin = getAllowedOrigin(request);
    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
    };
}

// Handle errors globally
function handleErrorResponse(request, error, status = 500) {
    return NextResponse.json(
        { message: error.message },
        { status, headers: getCorsHeaders(request) }
    );
}

// OPTIONS: Handle CORS preflight
export async function OPTIONS(request) {
    return NextResponse.json({}, { headers: getCorsHeaders(request) });
}

// POST: Login User
export async function POST(request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        const collection = await connectToDb();
        const user = await collection.findOne({ username });

        if (!user) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401, headers: getCorsHeaders(request) }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401, headers: getCorsHeaders(request) }
            );
        }

        return NextResponse.json(
            { message: "Login successful", user: { username: user.username } },
            { status: 200, headers: getCorsHeaders(request) }
        );
    } catch (error) {
        return handleErrorResponse(request, error);
    }
}

// PUT: Create User
export async function PUT(request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json(
                { message: "Username and password are required" },
                { status: 400, headers: getCorsHeaders(request) }
            );
        }

        const collection = await connectToDb();
        const existingUser = await collection.findOne({ username });

        if (existingUser) {
            return NextResponse.json(
                { message: "Username already exists" },
                { status: 400, headers: getCorsHeaders(request) }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await collection.insertOne({ username, password: hashedPassword });

        return NextResponse.json(
            { message: "User created successfully!" },
            { status: 201, headers: getCorsHeaders(request) }
        );
    } catch (error) {
        return handleErrorResponse(request, error);
    }
}

