import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample event data included directly in the component
const sampleEvents = [
  {
    title: "AI Innovation Summit 2023",
    date: "October 15, 2023",
    description: "Our team showcased cutting-edge AI solutions to industry leaders at the annual innovation summit, demonstrating real-world applications of machine learning in business processes.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Tech Conference Workshop",
    date: "August 7, 2023",
    description: "Interactive workshop where participants built their first AI models with guidance from our experts. Over 200 attendees gained hands-on experience with our platform.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  {
    title: "Product Launch Event",
    date: "November 22, 2023",
    description: "The successful unveiling of our latest AI-powered product suite, featuring live demos and customer testimonials about the transformative impact on their businesses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const PhotoGallery = ({ events = sampleEvents }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevEvent = () => {
    setCurrentEventIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const currentEvent = events[currentEventIndex];

  return (
    <div className="mt-20 px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Event{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Highlights
        </span>
      </h2>
      
      <div className="relative max-w-4xl mx-auto mt-12 bg-neutral-900 rounded-xl overflow-hidden shadow-lg">
        {/* Event Image */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img 
            src={currentEvent.image} 
            alt={currentEvent.title} 
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevEvent}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
            aria-label="Previous event"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextEvent}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
            aria-label="Next event"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Event Details */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{currentEvent.title}</h3>
          <p className="text-neutral-400 mb-4">{currentEvent.date}</p>
          <p className="text-neutral-300">{currentEvent.description}</p>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentEventIndex ? "bg-blue-500" : "bg-neutral-600"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;