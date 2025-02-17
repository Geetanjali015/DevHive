import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Github, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
        method: 'POST',  // Make sure to use POST method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Handle successful login here
        console.log('Login successful:', data);
        // Redirect or do further actions
      } else {
        // Handle error
        setError(data.detail || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-50 to-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
        <Link to="/" className="flex items-center">
          <Hexagon className="h-8 w-8 text-yellow-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">DevHive</span>
        </Link>
        <Link to="/" className="text-gray-600 hover:text-yellow-600">Back to Home</Link>
      </nav>

      {/* Centered Login Form */}
      <div className="flex flex-grow justify-center items-center w-full">
        <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back!</h2>
          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 outline-none transition"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 outline-none transition"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-gray-700">Remember me</label>
              </div>
              <a href="#" className="text-yellow-600 hover:text-yellow-700">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition flex items-center justify-center"
            >
              Sign In
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          <div className="w-full mt-6">
            <div className="relative flex justify-center items-center">
              <div className="absolute w-full border-t border-gray-300"></div>
              <span className="px-3 bg-white text-gray-500 text-sm relative">Or continue with</span>
            </div>
            <button className="mt-4 w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition flex items-center justify-center">
              <Github className="h-5 w-5 mr-2" />
              Sign in with GitHub
            </button>
          </div>
          
          {/* Redirect to Sign Up */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account? 
            <Link to="/signup" className="text-yellow-600 hover:text-yellow-700 ml-1">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
