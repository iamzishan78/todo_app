import { connect } from "mongoose";
import dotenv from 'dotenv'
//Configured dotenv
dotenv.config();

async function conn() {
    try {
        await connect(process.env.DB_URL);
        console.log("Connected To MoongoDB");
    }
    catch (err) {
        console.log(err)
    }
}

conn();