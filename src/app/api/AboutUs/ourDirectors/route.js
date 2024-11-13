import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "AboutusBanner";  // Set your database name
const collectionName = "ourDirectors";  // Set your collection name

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
const bucketName = process.env.AWS_BUCKET_NAME;
// Connect to MongoDB
async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// GET API: Fetch all person details
export async function GET(req) {
    try {
        const collection = await connectToDb();
        const data = await collection.find({}).toArray();
        if (!data || data.length === 0) {
            return { status: 404, message: "No data found" };
        }
        return { status: 200, data };
    } catch (error) {
        console.error(error);
        return { status: 500, message: "Internal Server Error" };
    }
}

// PUT API: Update person details
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

// POST API: Add a new person
export async function POST(req) {
    try {
        const { person } = req.body;  
        const bannerImage = formData.get('bannerImage'); 
         


        if (!person || !person.Name || !person.Designation || !person.Description) {
            return { status: 400, message: "Please provide all required fields (Name, Designation, Description)" };
        }

        const uniqueFileName = `${uuidv4()}_${bannerImage.name}`;
        const uploadParams = {
            Bucket: bucketName,
            Key: `AboutUs/${uniqueFileName}`,
            Body: Buffer.from(await bannerImage.arrayBuffer()),
            ContentType: bannerImage.type
        };
        

        // Upload banner image to S3
        const uploadResult = await s3.upload(uploadParams).promise();
        const imageUrl = uploadResult.Location;

        // Save banner image URL to MongoDB
        const collection = await connectToDb();
        await collection.updateOne(
            {},
            { $set: { bannerImage: imageUrl, hideShow: true } },
            { upsert: true }
        );
        // Connect to the MongoDB collection
        // const collection = await connectToDb();

        // Insert the new person document into the collection
        const result = await collection.insertOne({
            AddImage,
            Name,
            Designation,
            Description,
            createdAt: new Date(),  // Optionally, you can add a timestamp for the document
        });

        if (result.acknowledged) {
            return { status: 201, message: "Person added successfully", data: result.ops[0] };
        }

        return { status: 500, message: "Failed to add person" };
    } catch (error) {
        console.error(error);
        return { status: 500, message: "Internal Server Error" };
    }
}
