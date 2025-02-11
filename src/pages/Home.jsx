import React from 'react';
import { ArrowRight, Hexagon, Users, Phone, MessageSquare, Github } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Hexagon className="h-8 w-8 text-yellow-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">DevHive</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-yellow-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-yellow-600">How it works</a>
            <a href="#" className="text-gray-600 hover:text-yellow-600">About</a>
            <button className="bg-yellow-600 text-gray-600 px-6 py-2 rounded-full hover:bg-yellow-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Join Our
          <span className="text-yellow-600"> Developer Hive</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Buzz with activity! Connect with developers who share your passion and collaborate 
          on projects that make an impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-600  text-yellow-600 px-8 py-4 rounded-full hover:bg-yellow-700 transition flex items-center justify-center">
            Join the Hive
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-full border-2 border-yellow-600 hover:bg-yellow-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16" id="features">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Why Join DevHive?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Users className="h-12 w-12 text-yellow-600" />}
            title="Hive Mind"
            description="Connect with developers who complement your skills and share your vision for innovation."
          />
          <FeatureCard 
            icon={<MessageSquare className="h-12 w-12 text-yellow-600" />}
            title="Instant Communication"
            description="Buzz with potential collaborators through our real-time messaging system."
          />
          <FeatureCard 
            icon={<Phone className="h-12 w-12 text-yellow-600" />}
            title="Video Collaboration"
            description="Have face-to-face discussions about projects with seamless video calls."
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-yellow-50 py-16" id="how-it-works">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StepCard 
              number="1"
              title="Create Your Cell"
              description="Set up your profile with your skills and interests"
            />
            <StepCard 
              number="2"
              title="Find Your Swarm"
              description="Connect with developers who match your expertise"
            />
            <StepCard 
              number="3"
              title="Build Together"
              description="Collaborate on projects in your shared workspace"
            />
            <StepCard 
              number="4"
              title="Grow & Thrive"
              description="Learn, create, and succeed as a community"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="bg-yellow-600 rounded-2xl py-12 px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the Hive?
          </h2>
          <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already buzzing with creativity and innovation.
          </p>
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-full hover:bg-yellow-50 transition flex items-center mx-auto">
            Start Building Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
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
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
    {icon}
    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;