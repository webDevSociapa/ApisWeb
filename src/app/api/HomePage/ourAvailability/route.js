import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "ourAvailability";
const collectionName = "ourAvailability_01";

async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

export async function POST(req) {
    try {
        const body = await req.formData();
        const logos = body.getAll('logoUpload');  // Retrieve all uploaded logos

        const collection = await connectToDb();

        // Check if data already exists
        const existingData = await collection.find({}).toArray();
        if (existingData.length !== 0) {
            return NextResponse.json({ message: "Data already exists" });
        }

        // Use Promise.all to handle async operations in map
        const logoDocuments = await Promise.all(
            logos.map(async logo => ({
                filename: logo.name,
                contentType: logo.type,
                data: Buffer.from(await logo.arrayBuffer())
            }))
        );



        await collection.insertMany(logoDocuments);

        return NextResponse.json({
            message: "Logos added successfully!",
            data: logos.map(logo => ({ name: logo.name, type: logo.type }))
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

export async function PUT(req){
    try{
        const  body = await req.formData();

        const {logoUpload} = body;
        // if(!logoUpload){
        //     return NextResponse.json({message: "No logo uploaded"}, {status: 400})
        // }
        const collection = await  connectToDb();
        const result = await collection.updateOne({},{$set:{logoUpload}});

        if(result.modifiedCount === 0){
            return NextResponse.json( { message: "No document found with the provided ID." },
                { status: 404 })
        }
        return NextResponse.json({ message: "Data updated successfully!",data: body });
    } catch(error){
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}