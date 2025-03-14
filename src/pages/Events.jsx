import React, { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/Eventform";

function Events() {
  const [events, setEvents] = useState([

  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  return (
    <div className="min-h-screen p-10 bg-white">
     <EventForm addEvent={addEvent} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
