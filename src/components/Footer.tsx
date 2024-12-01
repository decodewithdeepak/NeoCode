import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">NeoCode</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Empowering students to master Data Structures and Algorithms one problem at a time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sheet" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  DSA Sheet
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tutorials" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Learning Roadmap
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} NeoCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}