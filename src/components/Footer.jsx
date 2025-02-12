import React from 'react';
import { Hexagon, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left Side - Branding */}
          <div className="flex items-center">
            <Hexagon className="h-6 w-6 text-yellow-600" />
            <span className="ml-2 text-lg font-bold text-gray-800">DevHive</span>
          </div>

          {/* Right Side - Links */}
          <div className="flex items-center space-x-4">
            {/* GitHub Icon with Repo Link */}
            <a href="https://github.com/Geetanjali015/DevHive">
              <Github className="h-6 w-6 text-gray-600 hover:text-yellow-600 cursor-pointer" />
            </a>
            <a href="#" className="text-gray-600 hover:text-yellow-600">Terms</a>
            <a href="#" className="text-gray-600 hover:text-yellow-600">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
