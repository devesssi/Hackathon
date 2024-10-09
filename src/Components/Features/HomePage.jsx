import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Foreground content */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Text Section (60% width on medium screens and larger) */}
        <div className="w-full md:w-3/5 p-8 text-center md:text-left text-gray-800">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            <Typewriter
              words={['Welcome to the Engineering Platform', 'Your Journey Begins Here']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="mb-6 text-base md:text-lg text-gray-600">
            Our platform provides top-notch resources, interactive courses, and an engaging community to help engineering students excel in their studies and future careers. Whether you're preparing for exams or working on projects, we have the tools and knowledge to support your journey.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </button>
        </div>

        {/* Image Section (40% width on medium screens and larger) */}
        <div className="w-full md:w-2/5 p-8 flex justify-center">
          <img
            src="https://via.placeholder.com/400x300" // Replace with your image URL
            alt="Engineering illustration"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
