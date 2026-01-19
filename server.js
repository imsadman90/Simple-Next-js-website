const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.API_PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// Mock database for items
let items = [
  {
    id: 1,
    name: "Laptop Pro",
    description: "High-performance laptop for developers and designers",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    category: "Electronics",
    stock: 15,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Audio",
    stock: 42,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with custom switches",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1587829191301-efd2b380ce80?w=500&h=500&fit=crop",
    category: "Peripherals",
    stock: 28,
  },
  {
    id: 4,
    name: "USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    category: "Accessories",
    stock: 60,
  },
  {
    id: 5,
    name: "4K Webcam",
    description:
      "Crystal clear 4K webcam with auto-focus and built-in microphone",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1598594026213-e1cf39ce35e5?w=500&h=500&fit=crop",
    category: "Video",
    stock: 22,
  },
  {
    id: 6,
    name: "Portable SSD 1TB",
    description: "Ultra-fast portable SSD with 1TB storage capacity",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    category: "Storage",
    stock: 35,
  },
];

// Routes

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Get single item by ID
app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

// Create new item (protected - requires authentication)
app.post("/api/items", (req, res) => {
  // Check if user is authenticated via cookie
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { name, description, price, category, stock, image } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newItem = {
    id: Math.max(...items.map((i) => i.id), 0) + 1,
    name,
    description,
    price: parseFloat(price),
    category: category || "General",
    stock: parseInt(stock) || 0,
    image:
      image ||
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// Update item (protected - requires authentication)
app.put("/api/items/:id", (req, res) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  const { name, description, price, category, stock, image } = req.body;
  if (name) item.name = name;
  if (description) item.description = description;
  if (price) item.price = parseFloat(price);
  if (category) item.category = category;
  if (stock !== undefined) item.stock = parseInt(stock);
  if (image) item.image = image;

  res.json(item);
});

// Delete item (protected - requires authentication)
app.delete("/api/items/:id", (req, res) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
