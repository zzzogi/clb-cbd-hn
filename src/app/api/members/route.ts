import { NextRequest, NextResponse } from "next/server";
import db from "@/app/libs/prismadb";

// GET handler
export async function GET() {
  try {
    const members = await db.members.findMany();
    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    console.error("Error in GET API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, dob, bio, yearsOfExperience, profileImage } = body;

    if (!name || !dob || yearsOfExperience === undefined || !profileImage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newMember = await db.members.create({
      data: {
        name,
        dob: new Date(dob),
        bio: bio || null,
        yearsOfExperience,
        profileImage,
      },
    });

    return NextResponse.json(newMember, { status: 201 });
  } catch (error) {
    console.error("Error in POST API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT handler
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, dob, bio, yearsOfExperience, profileImage } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const updatedMember = await db.members.update({
      where: { id },
      data: {
        name,
        dob: dob ? new Date(dob) : undefined,
        bio,
        yearsOfExperience,
        profileImage,
      },
    });

    return NextResponse.json(updatedMember, { status: 200 });
  } catch (error) {
    console.error("Error in PUT API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE handler
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await db.members.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error in DELETE API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
