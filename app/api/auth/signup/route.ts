import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";
import { exit } from "process";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body: { firstname: string; lastname: string; email: string; password: string } = await req.json();
    const { firstname, lastname, email, password } = body;
   

    if (!firstname?.trim() || !lastname?.trim() || !email?.trim() || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }    

    // Optional: Validate email format with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

   

    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = new User({
      firstName:firstname,
      lastName: lastname,
      email:email,
      password: hashedPassword,
    });

    await user.save();
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {    
    return NextResponse.json({ error: "Internal Server Error", err:error }, { status: 500 });
  }
}
