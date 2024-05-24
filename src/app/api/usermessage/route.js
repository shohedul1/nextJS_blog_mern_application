import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export const POST = async (req) => {
    const { name, email, message } = await req.json();
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'shohidulpramanik94@gmail.com',
                pass: 'wdpp xial itsy igjp'
            }
        });

        const mailOptions = {
            from: email,
            to: "shohidulpramanik94@gmail.com",
            html: `
            <h2>Contact form Submission<h2/>
            <p><strong>Name:<strong/>${name}<p/>
            <p><strong>Email:<strong/>${email}<p/>
            <p><strong>Message:<strong/>${message}<p/>
            `
        }
        await transport.sendMail(mailOptions);
        
        return NextResponse.json({
            success: true,
            message: 'Submit successful'

        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'mail has not been sent' })
    }




};