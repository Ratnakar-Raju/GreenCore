import React from 'react';
import { Leaf, BookOpen, ShoppingCart, Users, CheckCircle, Lightbulb } from 'lucide-react';

export function ProjectReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Project Overview
        </h1>

        {/* Project Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About Our Project</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our project is a comprehensive agricultural platform that combines modern technology with traditional farming knowledge. 
            We aim to empower farmers with tools and resources to improve their farming practices and increase productivity.
          </p>
        </div>

        {/* Modules Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Disease Detection Module */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Disease Detection</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>AI-powered disease detection using image recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Real-time analysis of crop health</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Detailed treatment recommendations</span>
              </li>
            </ul>
          </div>

          {/* Learning & Smart Farming Module */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Learning & Smart Farming</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Comprehensive farming guides and tutorials</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Interactive learning modules</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Smart farming techniques and best practices</span>
              </li>
            </ul>
          </div>

          {/* Green Grocery Module */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Green Grocery</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Direct farm-to-consumer marketplace</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Organic and sustainable products</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Secure payment and delivery options</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Technology Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Combines AI, machine learning, and modern web technologies to provide cutting-edge solutions for farmers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">User-Friendly Interface</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Intuitive design that makes complex agricultural tools accessible to all users.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Sustainable Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Promotes eco-friendly farming practices and sustainable agricultural development.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Provides end-to-end support from disease detection to market access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Developers Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">B Narayana</h3>
                <p className="text-gray-600 dark:text-gray-300">Lead Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">P Phanidhar</h3>
                <p className="text-gray-600 dark:text-gray-300">Backend Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">A Krishnababu</h3>
                <p className="text-gray-600 dark:text-gray-300">Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">J Ratna Raju</h3>
                <p className="text-gray-600 dark:text-gray-300">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 