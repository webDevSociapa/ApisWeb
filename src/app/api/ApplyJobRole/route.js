import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';


export async function POST(req){
    try{
        const formData = await req.formData();
        const selectJob = formData.get('selectJob');
        const fullName = formData.get('fullName');
        const emailAddress = formData.get('emailAddress');
        const phoneNumber = formData.get('phoneNumber');
        const resume = formData.get('resume');

        let resumeUrl = '';
        if (resume && resume.name) {
            const bytes = await resume.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${resume.name}`;
            const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
            
            // Create the uploads directory if it doesn't exist
            try {
                await mkdir(uploadsDir, { recursive: true });
            } catch (err) {
                if (err.code !== 'EEXIST') throw err;
            }

            const filePath = path.join(uploadsDir, fileName);
            await writeFile(filePath, buffer);
            
            // Create a URL that can be accessed externally
            resumeUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${fileName}`;
        }

        const body = {
            selectJob,
            fullName,
            emailAddress,
            phoneNumber,
            resumeUrl
        };

        const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
        const client = new MongoClient(uri);

        try{
            const database = client.db('JobRole');
            const formDataCollection = database.collection('JobRole01');
            const data = await formDataCollection.insertOne(body);
            console.log("data12", data);
            
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'khanrobin7071@gmail.com', // Your email
                  pass: 'hgvu hwmq lnfh xqxa', // Your app-specific password
                },
              });
              
              const mailOptions = {
                from: emailAddress,
                to: 'khanrobin7071@gmail.com',
                subject: 'New Job Application',
                html: `
                  <p><strong>Selected Job:</strong> ${selectJob}</p>
                  <p><strong>Full Name:</strong> ${fullName}</p>
                  <p><strong>Email Address:</strong> ${emailAddress}</p>
                  <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                  <p><strong>Resume:</strong> <a href="${resumeUrl}">View Resume</a></p>
                `,
              };
              
              await transporter.sendMail(mailOptions);
              
              return NextResponse.json({ message: 'Application submitted successfully', data: body, status: 200 }); 
        }
        catch(error){
            console.log("error", error);
            return NextResponse.json({ message: 'Failed to submit application' }, { status: 500 });
        }
        finally{
            await client.close();
        }
    }
    catch(error){
        console.log("error", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }       

    }
