import { cookies } from "next/headers";

const DEMO_CREDENTIALS = {
  email: "demo@example.com",
  password: "password123",
};

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (
      email !== DEMO_CREDENTIALS.email ||
      password !== DEMO_CREDENTIALS.password
    ) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    // Create a simple token (in production, use JWT)
    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return Response.json(
      { message: "Login successful", email },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
