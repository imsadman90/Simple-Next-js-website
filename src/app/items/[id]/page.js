"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;
    fetchItem(id);
  }, [id]);

  const fetchItem = async (itemId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/items/${itemId}`,
      );
      if (!response.ok) throw new Error("Failed to fetch item");
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error("Error fetching item:", error);
      toast.error("Failed to load item details");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (item.stock <= 0) {
      toast.error("This item is out of stock");
      return;
    }
    toast.success(`Added ${quantity} item(s) to cart`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading item details...</div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="text-xl text-gray-600 mb-4">Item not found</div>
        <Link
          href="/items"
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          Back to items
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/items"
          className="text-blue-600 hover:text-blue-700 font-semibold mb-8 inline-block"
        >
          ← Back to items
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg h-96">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {item.name}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  ${item.price}
                </span>
                <span
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    item.stock > 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.stock > 0 ? `${item.stock} available` : "Out of stock"}
                </span>
              </div>

              <p className="text-gray-600 text-lg mb-8">{item.description}</p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
                  <p className="text-gray-600">{item.category}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Stock Status
                  </h3>
                  <p className="text-gray-600">{item.stock} units in stock</p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block font-semibold text-gray-800 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={item.stock <= 0}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={item.stock}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Math.min(
                          item.stock,
                          Math.max(1, parseInt(e.target.value) || 1),
                        ),
                      )
                    }
                    className="w-16 text-center border border-gray-300 rounded-lg py-2"
                  />
                  <button
                    onClick={() =>
                      setQuantity(Math.min(item.stock, quantity + 1))
                    }
                    disabled={item.stock <= 0}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={item.stock <= 0}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Product Features
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span> Premium
                    Quality
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span> Free Shipping
                    on Orders Over $50
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span> 30-Day Money
                    Back Guarantee
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span> 2-Year
                    Warranty Included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
