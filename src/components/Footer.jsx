export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg text-blue-400 mb-4">TechHub</h3>
            <p className="text-gray-400">
              Your one-stop shop for premium tech products.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/items" className="hover:text-blue-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 mb-6" />
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} TechHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
