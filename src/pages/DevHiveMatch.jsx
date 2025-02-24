import React, { useState } from 'react';
import { Heart, X, Code, Star, BriefcaseIcon } from 'lucide-react';

const DevHiveMatch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const developers = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      skills: ["React", "TypeScript", "UI/UX"],
      experience: "4 years",
      interests: "Open Source, Accessibility",
      matchRate: "95%"
    },
    {
      name: "Alex Kumar",
      role: "Full Stack Developer",
      skills: ["Node.js", "Python", "MongoDB"],
      experience: "3 years",
      interests: "AI/ML, Web3",
      matchRate: "88%"
    }
  ];

  const handleSwipe = (dir) => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % developers.length);
      setDirection('');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Find Your Next Project Partner</h2>
        
        <div className="relative h-[480px] w-full">
          {/* Illustration of hands */}
          <div className="absolute inset-0 flex justify-between items-center px-12 pointer-events-none">
            <svg width="120" height="200" viewBox="0 0 120 200" className="opacity-20">
              <path 
                d="M60,180 C40,160 30,140 30,120 C30,90 50,70 80,70" 
                stroke="#6366F1" 
                strokeWidth="20" 
                fill="none"
              />
              <path 
                d="M20,100 C10,80 10,60 20,40" 
                stroke="#6366F1" 
                strokeWidth="16" 
                fill="none"
              />
            </svg>
            <svg width="120" height="200" viewBox="0 0 120 200" className="opacity-20">
              <path 
                d="M60,180 C80,160 90,140 90,120 C90,90 70,70 40,70" 
                stroke="#EC4899" 
                strokeWidth="20" 
                fill="none"
              />
              <path 
                d="M100,100 C110,80 110,60 100,40" 
                stroke="#EC4899" 
                strokeWidth="16" 
                fill="none"
              />
            </svg>
          </div>

          {/* Cards */}
          <div className={`absolute inset-0 transition-transform duration-300 ${
            direction === 'left' ? '-translate-x-full rotate-12' :
            direction === 'right' ? 'translate-x-full -rotate-12' : ''
          }`}>
            <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{developers[currentIndex].name}</h3>
                  <p className="text-gray-600">{developers[currentIndex].role}</p>
                </div>
                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {developers[currentIndex].matchRate} Match
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="w-5 h-5 text-gray-500" />
                  <span>{developers[currentIndex].experience} Experience</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">Top Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developers[currentIndex].skills.map((skill) => (
                      <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">Interests</span>
                  </div>
                  <p className="text-gray-600">{developers[currentIndex].interests}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            <button 
              onClick={() => handleSwipe('left')}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <X className="w-8 h-8 text-red-500" />
            </button>
            <button 
              onClick={() => handleSwipe('right')}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <Heart className="w-8 h-8 text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevHiveMatch;