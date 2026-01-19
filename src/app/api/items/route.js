import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getItems, createItem } from "@/lib/db";

export async function GET() {
  try {
    const items = getItems();
    return NextResponse.json(items);
  } catch (error) {
    console.error("Fetch items error:", error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    // Get auth token from cookies
    const cookieStore = await cookies();
    const authToken = cookieStore.get("authToken");

    if (!authToken) {
      return NextResponse.json(
        { error: "Unauthorized - Please login first" },
        { status: 401 },
      );
    }

    // Get request body
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.description || !body.price) {
      return NextResponse.json(
        { error: "Missing required fields: name, description, price" },
        { status: 400 },
      );
    }

    // Create item
    const newItem = createItem(body);

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Add item error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
