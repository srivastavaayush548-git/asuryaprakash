import React, { useState, useMemo } from 'react';
import { eventsContent, events } from '../Data/events';
import EventCard from '../Components/EventCard';

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Get unique month/year combinations from events
  const getMonthYearFilters = () => {
    const filtersMap = new Map();
    events.forEach((event) => {
      const date = new Date(event.date);
      if (!isNaN(date.getTime())) {
        const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
        const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        if (!filtersMap.has(monthYear)) {
          filtersMap.set(monthYear, yearMonth);
        }
      }
    });
    return Array.from(filtersMap.keys()).sort((a, b) => {
      const dateA = filtersMap.get(a);
      const dateB = filtersMap.get(b);
      return dateB.localeCompare(dateA); // Sort descending (newest first)
    });
  };

  const monthYearFilters = useMemo(() => getMonthYearFilters(), []);

  // Filter events based on selected month/year
  const filteredEvents = useMemo(() => {
    if (!selectedFilter) return events;

    return events.filter((event) => {
      const date = new Date(event.date);
      if (isNaN(date.getTime())) return false;
      const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
      return monthYear === selectedFilter;
    });
  }, [selectedFilter]);

  return (
    <div className="min-h-screen pt-12 md:pt-14 relative">
      {/* Background */}
      <div
        className="fixed inset-0 top-12 md:top-14 -z-10 bg-[#F3F3F3]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title and Filters Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              {eventsContent.title}
            </h1>

            {/* Month/Year Filters */}
            <div className="flex items-center gap-3">
              <label htmlFor="event-filter" className="text-black text-sm font-medium">
                Filter by:
              </label>
              <select
                id="event-filter"
                className="text-sm px-3 py-1.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white transition-colors duration-200"
                value={selectedFilter || ""}
                onChange={(e) => setSelectedFilter(e.target.value === "" ? null : e.target.value)}
              >
                <option value="">All</option>
                {monthYearFilters.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Events List */}
          <div>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <p className="text-black text-center py-12">No events found for the selected period.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

