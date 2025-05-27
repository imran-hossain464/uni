import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Find<span className="text-gray-800">Help</span></h2>
          <p className="mt-3 text-sm leading-relaxed">
            Empowering communities by connecting people with support and volunteer opportunities.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="/services" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-600 transition">Terms of Service</a></li>
            <li><a href="/help" className="hover:text-blue-600 transition">Help Center</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600 text-sm transition">Facebook</a>
            <a href="#" className="hover:text-blue-600 text-sm transition">Twitter</a>
            <a href="#" className="hover:text-blue-600 text-sm transition">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 text-center py-5 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Find Help. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
