import { connectDB } from "@/lib/db";
import Subjects from "@/models/subject";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const subjects = await Subjects.find().lean();
    return NextResponse.json(subjects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch subjects" }, { status: 500 });
  }
}
