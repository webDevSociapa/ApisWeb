import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);

const dbName = "AboutusBanner";
const collectionName = "ApisDataNumbers";

async  function connectToDb(){
    await client.connect()
    const database = client.db(dbName);
    return database.collection(collectionName);
}

export async function POST(req){
    try{
    const body = await req.json();
    const {productRanges,Yearsoflegacy,newCustomer,numberOfOutlets} = body;
   
    if(!productRanges || !Yearsoflegacy || !newCustomer || !numberOfOutlets){
        return NextResponse.json({message:"Please Enter Data",status: 400})
    }

    const  collection = await connectToDb();
    const GetData  = await collection.find({}).toArray();

    if(GetData.length === 0){
        const result = await collection.insertOne(body);
    }
    else{
        return NextResponse.json({message: "data Already Exist"})
    }

    return NextResponse.json(
        { message: "Data added successfully!",data: body }
    )
} catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
} finally {
    await client.close();
}

}
export async function GET() {
    try {
        const collection = await connectToDb();
        const data = await collection.find({}).toArray();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}