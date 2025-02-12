import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-white">
      <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-12">
        
        {/* Contact Details */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Get in <span className="text-yellow-600">Touch</span>
          </h1>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <Mail className="h-8 w-8 text-yellow-600" />
              <p className="text-lg text-gray-700">contact@devhive.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <Phone className="h-8 w-8 text-yellow-600" />
              <p className="text-lg text-gray-700">+123 456 7890</p>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <MapPin className="h-8 w-8 text-yellow-600" />
              <p className="text-lg text-gray-700">123 Developer Lane, Code City</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-yellow-600"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-yellow-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white p-4 rounded-lg hover:bg-yellow-700 transition flex items-center justify-center">
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
