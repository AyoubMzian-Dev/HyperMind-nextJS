import { connectDB } from "@/lib/db";
import Concept from "@/models/concept";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        // Extract lessonId from query params
        const { searchParams } = new URL(request.url);
        const lessonId = searchParams.get('lessonId');
        
        // Connect to database
        await connectDB();
        
        // If lessonId is provided, filter by it
        const query = lessonId ? { lessonId } : {};
        const concepts = await Concept.find(query).lean();
        
        // Return the concepts
        return NextResponse.json(concepts, { status: 200 });
    } catch (error) {
        console.error("Error fetching concepts:", error);
        return NextResponse.json({ 
            error: "Failed to fetch concepts" 
        }, { status: 500 });
    }
}