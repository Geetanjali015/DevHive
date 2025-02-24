import React from 'react';
import Navbar from '../components/Navbar';

const ContactUs = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-50 to-white">
<Navbar />
    
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-50 to-white px-4">
        
        
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <form className="w-full max-w-md space-y-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-yellow-600 outline-none"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-yellow-600 outline-none"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-yellow-600 outline-none"
            placeholder="Your message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;