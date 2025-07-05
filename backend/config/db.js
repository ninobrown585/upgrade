import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { HOST, DATABASE, USER, PASSWORD } = process.env;

export const sql = neon(
    `postgresql://${USER}:${PASSWORD}@${HOST}/${DATABASE}?sslmode=require&channel_binding=require`
)