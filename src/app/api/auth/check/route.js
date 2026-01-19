import { cookies } from "next/headers";

export async function GET(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken");

    return Response.json({ authenticated: !!token }, { status: 200 });
  } catch (error) {
    console.error("Auth check error:", error);
    return Response.json({ authenticated: false }, { status: 200 });
  }
}
