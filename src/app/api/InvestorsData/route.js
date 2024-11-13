
import {MongoClient} from "mongodb";
import { NextResponse } from "next/server";

const uri ="mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client =  new MongoClient(uri)
const dbName =  "InvestorData";
const collectionName = "InvestorData01";

async function connectToDb(){
    await  client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}


export async function POST(req) {
    try {
        const body = await req.json();
        const { name, path, type } = body;

        if (!name || !path || !type) {
            return new NextResponse("Please enter valid name, path, and type", { status: 400 });
        }

        // Mapping type to categories
        const categoryMap = {
            1: "BOARD_MEETING_FINANCIALRESULTS",
            2: "CODE_OF_CONDUCT",
            3: "CORPORATE_GOVERNANACE",
            4: "ANNUAL_REPORTS",
            5: "FINANCIALS",
            6: "shareholdingPatterns",
            7: "corporateDisclosures",
            8: "financialsSheet"
        };

        const category = categoryMap[type];

        if (!category) {
            return new NextResponse("Invalid type provided", { status: 400 });
        }

        const collection = await connectToDb();
        const existingData = await collection.find({ name, category }).toArray();

        if (existingData.length > 0) {
            return NextResponse.json({ message: "Data already exists in this category" });
        }

        const document = { name, path, category };
        const result = await collection.insertOne(document);

        return NextResponse.json({
            message: "Data added successfully!",
            data: result.insertedId,
            category
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}
