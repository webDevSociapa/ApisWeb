import {MongoClient} from 'mongodb';
import { NextResponse } from 'next/server';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const dbName = "";
const collectionName = "";

async function connctToDb(){
    await client.connect();
    const database = await client.db(dbName)
    return database.collectionName('')
}

export async function POST(req){
    try{

        const body = req.body.json();
    const {bannerImage} = body;

    if(ProductBannerImage){
        return NextResponse.json({message:"Please Upload Banner",staus: 400})
    }

    const collection = await connectTo();
    
    
    } catch(error){
        console.log(error);

    }
    return NextResponse.json({message:"Product Banner Image uploaded successfully",status:200})

}