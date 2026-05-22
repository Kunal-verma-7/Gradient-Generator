import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Tools Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Gradient Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Color Picker
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  CSS Formatter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Image Compressor
                </a>
              </li>
            </ul>
          </div>

          {/* Apps Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Apps</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Desktop App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Browser Extension
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.36V9.6H7.2v8.76h2.4zm-1.2-9.96c.84 0 1.44-.6 1.44-1.32 0-.72-.6-1.32-1.44-1.32-.84 0-1.44.6-1.44 1.32 0 .72.6 1.32 1.44 1.32zm12 9.96V13.8c0-2.28-1.2-3.36-2.88-3.36-1.32 0-1.92.72-2.28 1.2v-1.08H12v8.76h2.4V14.4c0-.6.12-1.2.84-1.2.72 0 .72.72.72 1.2v3.96h2.4z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 5.924c-.806.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.02 9.02 0 01-2.86 1.09 4.51 4.51 0 00-7.69 4.11 12.81 12.81 0 01-9.3-4.71 4.51 4.51 0 001.4 6.02 4.49 4.49 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.52 4.52 0 01-2.04.08 4.51 4.51 0 004.21 3.13 9.05 9.05 0 01-5.6 1.93c-.36 0-.72-.02-1.08-.06a12.78 12.78 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58a9.17 9.17 0 002.26-2.34z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.68c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.6.07-.6 1 .07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.36-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.45.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48 3.97-1.33 6.84-5.08 6.84-9.5 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;