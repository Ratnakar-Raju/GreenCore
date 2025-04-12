import React from 'react';
import { BookOpen, ShoppingBag, Microscope, ChevronRight, Leaf } from 'lucide-react';
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
                <button className="bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 flex items-center">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 px-6 py-3 rounded-lg hover:bg-green-50 dark:hover:bg-gray-800">
                  Learn More
                </button>
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
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/disease-detection" className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Microscope className="h-12 w-12 text-green-600 dark:text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Disease Detection</h3>
              <p className="text-gray-600 dark:text-gray-300">Early detection of crop diseases using advanced AI technology.</p>
            </Link>
            <Link to="/learning-smart-farming2" className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <BookOpen className="h-12 w-12 text-green-600 dark:text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Learning & Smart Farming</h3>
              <p className="text-gray-600 dark:text-gray-300">Data-driven insights for optimal crop management and yield improvement.</p>
            </Link>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <ShoppingBag className="h-12 w-12 text-green-600 dark:text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Green Grocery</h3>
              <p className="text-gray-600 dark:text-gray-300">Connect directly with consumers and maximize your profits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
     
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">GreenCore</span>
              </div>
              <p className="text-gray-400">Transforming agriculture through innovation and sustainability.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Disease Detection</a></li>
                <li><a href="#" className="hover:text-green-400">Smart Farming</a></li>
                <li><a href="#" className="hover:text-green-400">Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">About Us</a></li>
                <li><a href="#" className="hover:text-green-400">Contact</a></li>
                <li><a href="#" className="hover:text-green-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Twitter</a></li>
                <li><a href="#" className="hover:text-green-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-green-400">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 GreenCore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}