import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 fixed w-full z-10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600 dark:text-green-500" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">GreenCore</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#about" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">About</Link>
            <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500">Login</Link>
            <Link to="/signup" className="bg-green-600 dark:bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-600">
              Sign Up
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}