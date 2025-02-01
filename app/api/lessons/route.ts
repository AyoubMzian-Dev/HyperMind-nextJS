// pages/api/lessons/index.ts
import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
    try {
        await connectDB();
        
        const lessonCollection = mongoose.connection.collection('lessons');
        const lessons = await lessonCollection.find({}).toArray();
        
        return NextResponse.json(lessons, { status: 200 });
    } catch (error) {
        console.error("Error fetching lessons:", error);
        return NextResponse.json({ error: "Failed to fetch lessons" }, { status: 500 });
    }
}