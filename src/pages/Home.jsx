import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Communion</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <a href="/" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="/events" className="hover:text-blue-600">Events</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="text-center py-10 bg-blue-50 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 animate-fade-in">
          Welcome to Communion App
        </h2>
        <p className="text-gray-600 text-base sm:text-xl mt-2 max-w-3xl mx-auto">
          Connecting people of all faiths through events and community support.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 px-6 py-12">
        <div className="text-center sm:text-left max-w-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Connecting People Across Faiths & Interests
          </h3>
          <p className="text-gray-600 text-base sm:text-lg mt-4">
            Join us in fostering meaningful connections through shared experiences and support.
          </p>
          <button
            onClick={() => navigate("/events")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Explore Events
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/image/Event-1.webp" alt="Community event" className="rounded-xl sm:rounded-full shadow-md w-40 h-40 sm:w-60 sm:h-60 object-cover" />
          <img src="/image/Event-2.webp" alt="People gathering" className="rounded-xl sm:rounded-full shadow-md w-40 h-40 sm:w-60 sm:h-60 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Home;
