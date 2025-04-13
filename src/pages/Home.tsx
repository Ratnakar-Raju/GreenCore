import React from 'react';
import { BookOpen, ChevronRight, Leaf, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Transforming Agriculture Through Innovation
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Empowering farmers with cutting-edge technology for disease detection and sustainable farming practices.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link
                  to="/learning-smart-farming2"
                  className="bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 flex items-center"
                >
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/project-review"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
                alt="Smart Farming"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900" id="solutions">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/disease-detection"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Disease Detection</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Upload images of your crops to detect diseases and get treatment recommendations.
              </p>
            </Link>

            <Link
              to="/learning-smart-farming2"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Learning & Smart Farming</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Access educational resources and smart farming techniques to improve your yield.
              </p>
            </Link>

            <Link
              to="/green-grocery"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Green Grocery</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Shop for fresh, organic produce and farm products directly from local farmers.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
     
      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-green-200">
                Empowering farmers with smart technology and sustainable practices for a better future.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/disease-detection" className="text-green-200 hover:text-white">Disease Detection</a></li>
                <li><a href="/learning-smart-farming2" className="text-green-200 hover:text-white">Learning & Smart Farming</a></li>
                <li><a href="/green-grocery" className="text-green-200 hover:text-white">Green Grocery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Developers</h3>
              <ul className="space-y-2 text-green-200">
                <li>B Narayana</li>
                <li>P Phani</li>
                <li>A Krishna</li>
                <li>J Ratna Raju</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-green-200">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contact@greencore.com" className="hover:text-white">contact@greencore.com</a>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Duvvada, Visakhapatnam, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
            <p>&copy; 2024 Green Core. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}