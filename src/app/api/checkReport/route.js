import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { batch_number } = body;

        const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
        const client = new MongoClient(uri);

        try {
            console.log("Attempting to connect to MongoDB...");
            await client.connect();
            console.log("Successfully connected to MongoDB.");

            const database = client.db('ProductReport');
            const collection = database.collection('product_report01');

            console.log(`Searching for batch number: ${batch_number}`);
            const batchData = await collection.findOne(
                { "landing_enquiry.batch_number": batch_number },
                { projection: { "landing_enquiry.$": 1 } }
            );

            if (batchData && batchData.landing_enquiry && batchData.landing_enquiry.length > 0) {
                const specificBatchData = batchData.landing_enquiry[0];
                console.log("Specific batch data found:", specificBatchData);
                return NextResponse.json(
                    { message: 'Batch data found successfully', data: specificBatchData },
                    { status: 200 },
                );
            } else {
                console.log("No batch data found for batch number:", batch_number);
                return NextResponse.json(
                    { message: 'Batch not found' },
                    { status: 404 },
                );
            }
        } catch (dbError) {
            console.error("Database operation failed:", dbError);
            return NextResponse.json(
                { message: 'Database operation failed', error: dbError.message },
                { status: 500 },
            );
        } finally {
            await client.close();
            console.log("MongoDB connection closed.");
        }
    } catch (error) {
        console.error("Request processing failed:", error);
        return NextResponse.json(
            { message: 'Request processing failed', error: error.message },
            { status: 500 },
        );
    }
}
