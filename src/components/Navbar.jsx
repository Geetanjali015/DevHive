import React from "react";
import { Link } from "react-router-dom";
import { Hexagon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-b from-yellow-50 to-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Clickable Logo - Takes to Home */}
        <Link to="/" className="flex items-center">
          <Hexagon className="h-8 w-8 text-yellow-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">DevHive</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {/* <a href="#features" className="text-gray-600 hover:text-yellow-600">Home</a> */}
          <Link to="/" className="text-gray-600 hover:text-yellow-600">Home</Link>

          <Link to="/about" className="text-gray-600 hover:text-yellow-600">About us</Link>
          <Link to="/contact" className="text-gray-600 hover:text-yellow-600">Contact us</Link>

          {/* <a href="#how-it-works" className="text-gray-600 hover:text-yellow-600">Contact us</a> */}

          
          <Link to="/login">
          <button className="!bg-yellow-600 text-white px-8 py-4 rounded-full hover:!bg-yellow-700 transition flex items-center justify-center">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
