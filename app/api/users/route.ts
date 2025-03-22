import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/user";

// 📌 GET: Fetch all students
export async function GET() {
  try {
    await connectDB();
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 });
  }
}

// 📌 POST: Create a new student
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newUser = new User({ ...body, role: "student" });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create student" }, { status: 500 });
  }
}