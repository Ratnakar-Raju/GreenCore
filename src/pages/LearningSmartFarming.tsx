import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export function LearningSmartFarming() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Learning & Smart Farming
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover innovative farming techniques and data-driven insights to optimize your agricultural practices.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <BookOpen className="h-12 w-12 text-green-600 dark:text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Educational Resources</h3>
              <p className="text-gray-600 dark:text-gray-300">Access comprehensive guides and tutorials on modern farming techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Button Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <a 
            href="/learning-smart-farming2" 
            className="inline-flex items-center justify-center bg-green-600 dark:bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 text-lg font-semibold transition-all transform hover:scale-105"
          >
            <span>Access Advanced Learning Platform</span>
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
} 