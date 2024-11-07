import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "your-database-name";  // Set your database name
const collectionName = "your-collection-name";  // Set your collection name

// Connect to MongoDB
async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// GET API: Fetch person1 and person2 details
export async function GET(req) {
    try {
        const collection = await connectToDb();
        const data = await collection.find({}).toArray();
        if (!data) {
            return { status: 404, message: "No data found" };
        }
        return { status: 200, data };
    } catch (error) {
        console.error(error);
        return { status: 500, message: "Internal Server Error" };
    }
}

// PUT API: Update person1 or person2 details
export async function PUT(req) {
    try {
        const { person1, person2 } = req.body;
        if (!person1 || !person2) {
            return { status: 400, message: "Please provide both person1 and person2 details" };
        }

        const { AddImage, Name, Designation, Description } = person1 || person2;
        const collection = await connectToDb();

        // Assuming each person has a unique identifier (e.g., Name or _id), update their details.
        const updatePerson1 = await collection.updateOne(
            { Name: person1.Name },  // Assuming `Name` is unique to person1
            { $set: { AddImage, Name, Designation, Description } }
        );

        const updatePerson2 = await collection.updateOne(
            { Name: person2.Name },  // Assuming `Name` is unique to person2
            { $set: { AddImage, Name, Designation, Description } }
        );

        if (updatePerson1.matchedCount === 0 && updatePerson2.matchedCount === 0) {
            return { status: 404, message: "No matching persons found to update" };
        }

        return { status: 200, message: "Person details updated successfully" };
    } catch (error) {
        console.error(error);
        return { status: 500, message: "Internal Server Error" };
    }
}
