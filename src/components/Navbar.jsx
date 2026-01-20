"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        setIsMenuOpen(false);
        toast.success("Logged out successfully");
        window.dispatchEvent(new Event("authChanged"));
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

          {/* Desktop Navigation Links - Center (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex items-center gap-2 text-sm justify-center">
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

          {/* Login/Logout - Right (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-4 whitespace-nowrap">
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1 focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden bg-slate-800 border-t border-slate-700 overflow-y-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 py-4 px-4" : "max-h-0 py-0 px-4"
          }`}
        >
          <div className="space-y-3">
            <a
              href="/#hero"
              onClick={closeMenu}
              className="block hover:text-blue-300 transition py-2"
            >
              Hero
            </a>
            <a
              href="/#categories"
              onClick={closeMenu}
              className="block hover:text-blue-300 transition py-2"
            >
              Categories
            </a>
            <a
              href="/#why"
              onClick={closeMenu}
              className="block hover:text-blue-300 transition py-2"
            >
              Why Us
            </a>
            <a
              href="/#promise"
              onClick={closeMenu}
              className="block hover:text-blue-300 transition py-2"
            >
              Promise
            </a>
            <a
              href="/#testimonials"
              onClick={closeMenu}
              className="block hover:text-blue-300 transition py-2"
            >
              Testimonials
            </a>
            <a
              href="/#offers"
              onClick={closeMenu}
              className="block hover:text-blue-300 transition py-2"
            >
              Offers
            </a>
            <a
              href="/#cta"
              onClick={closeMenu}
              className="block hover:text-blue-300 transition py-2"
            >
              CTA
            </a>
            <Link
              href="/items"
              onClick={closeMenu}
              className="block hover:text-blue-300 transition py-2"
            >
              Items
            </Link>
            {isAuthenticated && (
              <Link
                href="/add-item"
                onClick={closeMenu}
                className="block hover:text-blue-300 transition py-2"
              >
                Add Item
              </Link>
            )}

            {/* Mobile Auth Button */}
            <div className="pt-4 border-t border-slate-700">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition text-sm"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition text-sm"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
