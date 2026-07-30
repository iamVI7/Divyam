import { NextRequest, NextResponse } from "next/server";
import getMongoClientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phoneNumber, email, weddingDate, celebrationType, message } = body;

    if (!fullName || !phoneNumber || !email) {
      return NextResponse.json(
        { error: "Full name, phone number, and email are required." },
        { status: 400 }
      );
    }

    const client = await getMongoClientPromise();
    const db = client.db(process.env.MONGODB_DB || "divyam");

    const result = await db.collection("consultations").insertOne({
      fullName,
      phoneNumber,
      email,
      weddingDate: weddingDate || null,
      celebrationType: celebrationType || null,
      message: message || null,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Error saving consultation request:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or reach us on WhatsApp." },
      { status: 500 }
    );
  }
}
