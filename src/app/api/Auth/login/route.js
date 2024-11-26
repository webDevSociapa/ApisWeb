import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri, { useUnifiedTopology: true });
const dbName = "UserAuth";
const collectionName = "signUp";

async function connectToDb() {
    if (!client.isConnected) {
        await client.connect();
    }
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// POST: Login User
export async function POST(req) {
    try {
        const body = await req.json();
        const { username, password } = body;

        console.log("Request received with:", { username, password });

        if (!username || !password) {
            console.error("Missing username or password");
            return NextResponse.json(
                { message: "Please enter username and password" },
                { status: 400 }
            );
        }

        const collection = await connectToDb();
        const user = await collection.findOne({ username });


        if (!user) {                        
            console.error("User not found");
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Password valid:", isPasswordValid);

        if (!isPasswordValid) {
            console.error("Invalid password");
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        return NextResponse.json({
            message: "Login successful",
            user: { username: user.username },
        });
    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


// PUT: Create User
export async function PUT(req) {
    try {
        const body = await req.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json(
                { message: "Username and password are required" },
                { status: 400 }
            );
        }

        const collection = await connectToDb();
        const existingUser = await collection.findOne({ username });

        if (existingUser) {
            return NextResponse.json({ message: "Username already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await collection.insertOne({ username, password: hashedPassword });

        return NextResponse.json({
            message: "User created successfully!",
            data: { username },
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
