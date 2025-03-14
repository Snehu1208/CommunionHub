import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function EventPage() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    category: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const today = new Date().toISOString().split("T")[0];
    const validEvents = storedEvents.filter((event) => event.date >= today);
    setEvents(validEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];
    const newEvent = { ...eventData };
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent].filter((event) => event.date >= today);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
    setEventData({ title: "", date: "", category: "", location: "", description: "" });
  };

  const filteredEvents = selectedCategory ? events.filter((event) => event.category === selectedCategory) : events;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">🎉 Event Management</h1>
        <div className="p-4 sm:p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-900 to-blue-500 text-white">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              className="p-3 border rounded-lg text-black w-full"
              value={eventData.title}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              className="p-3 border rounded-lg text-black w-full"
              value={eventData.date}
              onChange={handleChange}
              required
            />
            <select
              name="category"
              className="p-3 border rounded-lg text-black w-full"
              value={eventData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
            <input
              type="text"
              name="location"
              placeholder="Event Location"
              className="p-3 border rounded-lg text-black w-full"
              value={eventData.location}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Event Description"
              className="p-3 border rounded-lg text-black w-full col-span-1 sm:col-span-2"
              value={eventData.description}
              onChange={handleChange}
              required
            />
            <button type="submit" className="w-full sm:col-span-2 p-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-200">
              Add Event
            </button>
          </form>
        </div>
        <div className="text-center my-6">
          <label className="font-semibold mr-2">Filter by Category:</label>
          <select className="border p-2 rounded-lg" onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <motion.div key={index} className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-blue-900 to-blue-500 text-white" whileHover={{ scale: 1.05 }}>
                <h3 className="text-lg sm:text-xl font-bold">{event.title}</h3>
                <p className="text-gray-200"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-200"><strong>Location:</strong> {event.location || "TBD"}</p>
                <p className="text-gray-200 mt-2">{event.description || "No description provided"}</p>
                <span className={`text-sm px-3 py-1 rounded mt-2 inline-block ${event.category === "Religious" ? "bg-yellow-500" : event.category === "Social" ? "bg-blue-500" : "bg-green-500"}`}>
                  {event.category}
                </span>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-700 text-lg col-span-full">No upcoming events available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
