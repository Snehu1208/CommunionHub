import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 animate-fade-in text-center">
        About Us
      </h1>
      
      <p className="text-base sm:text-lg text-gray-600 mt-4 text-center max-w-xl px-4">
        Communion Hub is a platform designed to bring people of all faiths 
        together through community events, social gatherings, and charity initiatives.
        Our goal is to foster inclusivity, unity, and a sense of belonging for everyone.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a href=""  rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md 
                     hover:bg-blue-700 transition-all transform hover:scale-105 text-center">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default About;
