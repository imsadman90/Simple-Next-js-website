// Mock credentials
const DEMO_CREDENTIALS = {
  email: "demo@example.com",
  password: "password123",
};

export const validateCredentials = (email, password) => {
  return (
    email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password
  );
};

export const setAuthCookie = (res, token) => {
  res.cookies.set("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
};

export const clearAuthCookie = (res) => {
  res.cookies.delete("authToken");
};

export const getAuthToken = (req) => {
  return req.cookies.get("authToken")?.value;
};

export const isAuthenticated = (req) => {
  return !!getAuthToken(req);
};
