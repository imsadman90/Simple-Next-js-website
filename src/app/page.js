export default function Home() {
  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section
        id="hero"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to TechHub</h1>
          <p className="text-xl mb-8 text-blue-100">
            Discover premium tech products at unbeatable prices
          </p>
          <a
            href="/items"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Section 2: Featured Categories */}
      <section id="categories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Electronics", "Audio", "Accessories", "Storage"].map(
              (category) => (
                <div
                  key={category}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category}
                  </h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section id="why" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose TechHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We only stock the finest tech products from trusted brands.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
              <p className="text-gray-600">
                Get your orders delivered quickly with our reliable shipping
                partners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
              <p className="text-gray-600">
                Your transactions are protected with the latest security
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Promise */}
      <section id="promise" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Our Promise to You</h2>
              <p className="text-gray-600 mb-4 text-lg">
                At TechHub, we are committed to providing you with the best
                shopping experience possible. Our team works tirelessly to bring
                you the latest and greatest in tech products.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span> 100% Authentic
                  Products
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span> 30-Day Money
                  Back Guarantee
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span> Expert Customer
                  Support
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-xl font-semibold">Your Trust Matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Customer Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                rating: 5,
                text: "Amazing products and fast shipping!",
              },
              {
                name: "Jane Smith",
                rating: 5,
                text: "Great quality and excellent customer service.",
              },
              {
                name: "Mike Johnson",
                rating: 5,
                text: "Best tech store online. Highly recommended!",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-lg shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Special Offers */}
      <section id="offers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Special Offers This Month
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-12 rounded-lg">
              <h3 className="text-3xl font-bold mb-2">Up to 30% Off</h3>
              <p className="mb-4">On selected electronics this week only!</p>
              <a
                href="/items"
                className="bg-white text-red-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition inline-block"
              >
                Browse Deals
              </a>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-12 rounded-lg">
              <h3 className="text-3xl font-bold mb-2">Free Shipping</h3>
              <p className="mb-4">On orders over $50 - Nationwide Delivery!</p>
              <a
                href="/items"
                className="bg-white text-purple-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition inline-block"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section
        id="cta"
        className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Upgrade Your Tech?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers shopping at TechHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/items"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Start Shopping
            </a>
            <a
              href="/login"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition border border-white"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
