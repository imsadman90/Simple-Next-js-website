// Shared in-memory database for items
// In production, this would be replaced with a real database

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
      "https://hp.widen.net/content/qf961bfodw/png/qf961bfodw.png?w=800&h=600&dpi=72&color=ffffff00",
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

export function getItems() {
  return items;
}

export function getItemById(id) {
  return items.find((i) => i.id === parseInt(id));
}

export function createItem(itemData) {
  const newItem = {
    id: Math.max(...items.map((i) => i.id), 0) + 1,
    name: itemData.name,
    description: itemData.description,
    price: parseFloat(itemData.price),
    category: itemData.category || "General",
    stock: parseInt(itemData.stock) || 0,
    image:
      itemData.image ||
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
  };

  items.push(newItem);
  return newItem;
}

export function updateItem(id, itemData) {
  const item = items.find((i) => i.id === parseInt(id));
  if (!item) return null;

  if (itemData.name) item.name = itemData.name;
  if (itemData.description) item.description = itemData.description;
  if (itemData.price) item.price = parseFloat(itemData.price);
  if (itemData.category) item.category = itemData.category;
  if (itemData.stock !== undefined) item.stock = parseInt(itemData.stock);
  if (itemData.image) item.image = itemData.image;

  return item;
}

export function deleteItem(id) {
  const index = items.findIndex((i) => i.id === parseInt(id));
  if (index === -1) return null;

  const deleted = items.splice(index, 1);
  return deleted[0];
}
