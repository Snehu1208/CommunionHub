import React from "react";

function EventCard({ event }) {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
      <h3 className="text-xl font-bold">{event.title}</h3>
      <p className="text-gray-200">Date: {event.date}</p>
      <p className="text-gray-200">Category: {event.category}</p>
      <p className="text-gray-200">Location: {event.location}</p>
    </div>
  );
}

export default EventCard;
