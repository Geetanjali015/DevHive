import React from 'react';
import { Hexagon, Github, Users, Code, Trophy, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Navigation - Same as Landing Page */}
      {/* <nav className="container mx-auto px-6 py-4"> */}
      {/* <Navbar/> */}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Building the Future of
          <span className="text-yellow-600"> Developer Collaboration</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-center">
          DevHive was founded with a simple mission: to create a vibrant ecosystem where developers can connect, 
          collaborate, and create amazing things together.
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-yellow-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard number="10,000+" label="Active Developers" />
            <StatCard number="5,000+" label="Projects Completed" />
            <StatCard number="50+" label="Countries Represented" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <ValueCard 
            icon={<Users className="h-12 w-12 text-yellow-600" />}
            title="Community First"
            description="We believe in the power of community and collective growth through collaboration."
          />
          <ValueCard 
            icon={<Code className="h-12 w-12 text-yellow-600" />}
            title="Innovation"
            description="We encourage creative solutions and pushing the boundaries of what's possible."
          />
          <ValueCard 
            icon={<Trophy className="h-12 w-12 text-yellow-600" />}
            title="Excellence"
            description="We strive for excellence in everything we do, from code to communication."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-yellow-600 rounded-2xl py-12 px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
            Be part of a community that's shaping the future of software development.
          </p>
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-full hover:bg-yellow-50 transition flex items-center mx-auto">
            Join DevHive Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer - Same as Landing Page */}
      {/* <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Hexagon className="h-6 w-6 text-yellow-600" />
              <span className="ml-2 text-lg font-bold text-gray-800">DevHive</span>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="h-6 w-6 text-gray-600 hover:text-yellow-600 cursor-pointer" />
              <a href="#" className="text-gray-600 hover:text-yellow-600">Terms</a>
              <a href="#" className="text-gray-600 hover:text-yellow-600">Privacy</a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div className="text-center p-6">
    <div className="text-4xl font-bold text-yellow-600 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
    {icon}
    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutPage;