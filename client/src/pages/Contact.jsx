import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar /> {/* Top navigation */}

      <section className="bg-gray-50 py-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            We'd love to hear from you. Reach out to us through any of the methods below or send us a message directly.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-xl font-semibold text-blue-600">Email</h2>
                <p className="mt-1">support@findhelp.org</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-600">Phone</h2>
                <p className="mt-1">+1 (555) 123-4567</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-600">Address</h2>
                <p className="mt-1">123 Community Way, Unity City, CA 90210</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer /> {/* Bottom footer */}
    </>
  );
};

export default Contact;
