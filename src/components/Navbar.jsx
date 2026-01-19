"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();

    // Listen for auth changes
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener("authChanged", handleAuthChange);

    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  // Re-check auth when route changes
  useEffect(() => {
    checkAuth();
  }, [pathname]);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/check", {
        credentials: "include",
      });
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setIsAuthenticated(false);
        toast.success("Logged out successfully");
        window.dispatchEvent(new Event("authChanged"));
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <Link
            href="/"
            className="font-bold text-2xl text-blue-400 hover:text-blue-300 whitespace-nowrap"
          >
            TechHub
          </Link>

          {/* Navigation Links - Center */}
          <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm lg:text-base justify-center">
              <a
                href="/#hero"
                className="hover:text-blue-300 transition whitespace-nowrap"
              >
                Hero
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/#categories"
                className="hover:text-blue-300 transition whitespace-nowrap"
              >
                Categories
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/#why"
                className="hover:text-blue-300 transition whitespace-nowrap"
              >
                Why Us
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/#promise"
                className="hover:text-blue-300 transition whitespace-nowrap"
              >
                Promise
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/#testimonials"
                className="hover:text-blue-300 transition whitespace-nowrap"
              >
                Testimonials
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/#offers"
                className="hover:text-blue-300 transition whitespace-nowrap"
              >
                Offers
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="/#cta"
                className="hover:text-blue-300 transition whitespace-nowrap"
              >
                CTA
              </a>
              <span className="text-gray-600">|</span>
              <Link
                href="/items"
                className="hover:text-blue-300 transition whitespace-nowrap"
              >
                Items
              </Link>
              {isAuthenticated && (
                <>
                  <span className="text-gray-600">|</span>
                  <Link
                    href="/add-item"
                    className="hover:text-blue-300 transition whitespace-nowrap"
                  >
                    Add Item
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Login/Logout - Right */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition text-sm"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
