import { Building2, Globe, Stars, ThumbsUp, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ContactForm from "../forms/contactform";

// Import your logo images
import techNovaLogo from '../assets/clients/technova-logo.png';
import globalRetailLogo from '../assets/clients/global-retail-logo.jpeg';
import sunderlandManufacturingLogo from '../assets/clients/sunderland-logo.png';
import healthcarePlusLogo from '../assets/clients/healthcare-plus-logo.jpg';
import fintechInnovationsLogo from '../assets/clients/fintech-logo.jpg';
import eduFutureLogo from '../assets/clients/edufuture-logo.png';

const Clients = () => {
  const [expandedClient, setExpandedClient] = useState(null);

  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const toggleExpand = (id) => {
    setExpandedClient(expandedClient === id ? null : id);
  };

  const clients = [
    {
      id: 1,
      name: "TechNova Ltd",
      industry: "Software Development",
      logo: techNovaLogo,
      testimonial: "AI-Solutions transformed our employee onboarding process, reducing training time by 40%.",
      rating: 5,
      location: "London, UK",
      successStory: {
        challenge: "Faced with lengthy onboarding processes causing productivity delays for new hires.",
        solution: "Implemented our AI-powered digital employee experience platform with automated training modules.",
        results: [
          "40% reduction in onboarding time",
          "25% faster productivity ramp-up for new employees",
          "90% satisfaction rate in employee surveys"
        ],
        duration: "3 month implementation"
      }
    },
    {
      id: 2,
      name: "Global Retail Corp",
      industry: "E-commerce",
      logo: globalRetailLogo,
      testimonial: "Their AI-powered inventory system eliminated 90% of our stock discrepancies.",
      rating: 4,
      location: "New York, USA",
      successStory: {
        challenge: "Chronic inventory mismatches between systems and physical stock.",
        solution: "Custom AI inventory reconciliation system with real-time tracking.",
        results: [
          "90% reduction in stock discrepancies",
          "15% improvement in order fulfillment speed",
          "$2M annual savings in lost inventory"
        ],
        duration: "6 month rollout"
      }
    },
    {
      id: 3,
      name: "NISSAN Sunderland Manufacturing",
      industry: "Industrial",
      logo: sunderlandManufacturingLogo,
      testimonial: "The predictive maintenance solution saved us £250k in downtime costs last year.",
      rating: 5,
      location: "Sunderland, UK",
      successStory: {
        challenge: "Unplanned equipment failures causing costly production downtime.",
        solution: "AI-powered predictive maintenance system with IoT sensors.",
        results: [
          "£250k saved in first year",
          "70% reduction in unplanned downtime",
          "30% extension in equipment lifespan"
        ],
        duration: "4 month implementation"
      }
    },
    {
      id: 4,
      name: "HealthCare Plus",
      industry: "Medical",
      logo: healthcarePlusLogo,
      testimonial: "Patient management automation improved our service efficiency by 35%.",
      rating: 5,
      location: "Berlin, Germany",
      successStory: {
        challenge: "Paper-based systems causing delays in patient care coordination.",
        solution: "Custom AI workflow automation for patient management.",
        results: [
          "35% improvement in service efficiency",
          "50% reduction in administrative errors",
          "20% increase in patient satisfaction scores"
        ],
        duration: "5 month deployment"
      }
    },
    // New companies added
    {
      id: 5,
      name: "FinTech Innovations",
      industry: "Financial Services",
      logo: fintechInnovationsLogo,
      testimonial: "Fraud detection accuracy improved by 82% using their AI models.",
      rating: 5,
      location: "Singapore",
      successStory: {
        challenge: "Increasing sophisticated fraud attempts bypassing existing systems.",
        solution: "Advanced AI fraud detection with behavioral analysis.",
        results: [
          "82% improvement in fraud detection",
          "60% reduction in false positives",
          "$4.5M prevented losses in Q1"
        ],
        duration: "3 month pilot + 2 month full deployment"
      }
    },
    {
      id: 6,
      name: "EduFuture Academy",
      industry: "Education",
      logo: eduFutureLogo,
      testimonial: "Personalized learning paths increased student outcomes by 45%.",
      rating: 5,
      location: "Toronto, Canada",
      successStory: {
        challenge: "One-size-fits-all approach failing diverse student needs.",
        solution: "AI-driven adaptive learning platform with real-time adjustments.",
        results: [
          "45% improvement in learning outcomes",
          "35% reduction in dropout rates",
          "50% faster mastery of core concepts"
        ],
        duration: "Academic year pilot program"
      }
    }
  ];

  const stats = [
    { value: "50+", label: "Satisfied Clients", icon: <ThumbsUp className="w-8 h-8" /> },
    { value: "15", label: "Countries Served", icon: <Globe className="w-8 h-8" /> },
    { value: "12", label: "Industries", icon: <Building2 className="w-8 h-8" /> },
    { value: "98%", label: "Client Retention", icon: <Users className="w-8 h-8" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Valued Clients</h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto">
          Trusted by innovative businesses worldwide to enhance their digital employee experience through AI-powered solutions.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="bg-blue-300 p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center text-blue-800 mb-3">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold mb-2 text-blue-900">{stat.value}</h3>
            <p className="text-blue-800">{stat.label}</p>
          </div>
        ))}
      </div>

{/* Client Testimonials */}
<div className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-white">
    <span className="text-blue-700 mr-2">TOP</span> Client Success Stories
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {clients.map(client => (
      <div
        key={client.id}
        className={`bg-blue-300 rounded-lg shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
          expandedClient === client.id ? "row-span-2" : ""
        }`}
      >
        {/* Top section */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img 
              src={client.logo} 
              alt={`${client.name} logo`} 
              className="w-16 h-16 object-contain mr-4 bg-white p-1 rounded"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-900">{client.name}</h3>
              <p className="text-blue-800">{client.industry} • {client.location}</p>
            </div>
          </div>
          <p className="mb-4 italic text-blue-900">"{client.testimonial}"</p>
          <div className="flex mb-4">
            {[...Array(client.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <button 
            onClick={() => toggleExpand(client.id)}
            className="text-blue-800 font-medium flex items-center hover:text-blue-900"
          >
            {expandedClient === client.id ? (
              <>
                <span>Hide Details</span>
                <ChevronUp className="ml-1 w-5 h-5" />
              </>
            ) : (
              <>
                <span>View Success Story</span>
                <ChevronDown className="ml-1 w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Expanded Success Story */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expandedClient === client.id
              ? "max-h-[1000px] opacity-100 p-6 bg-blue-200 border-t border-blue-400"
              : "max-h-0 opacity-0 p-0"
          }`}
        >
          <h4 className="font-bold text-blue-900 mb-3">Success Story Details:</h4>
          <div className="mb-4">
            <h5 className="font-semibold text-blue-800">The Challenge:</h5>
            <p className="text-blue-900">{client.successStory.challenge}</p>
          </div>
          <div className="mb-4">
            <h5 className="font-semibold text-blue-800">Our Solution:</h5>
            <p className="text-blue-900">{client.successStory.solution}</p>
          </div>
          <div className="mb-4">
            <h5 className="font-semibold text-blue-800">The Results:</h5>
            <ul className="list-disc pl-5 text-blue-900">
              {client.successStory.results.map((result, i) => (
                <li key={i}>{result}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Implementation:</span> {client.successStory.duration}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Industries We Serve */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Industries We Transform</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Healthcare", "Manufacturing", "Retail", "Finance",
            "Education", "Technology", "Logistics", "Energy"
          ].map((industry, index) => (
            <div key={index} className="bg-blue-200 p-4 rounded-lg text-center hover:bg-blue-300 transition-colors">
              <h3 className="font-medium text-blue-900">{industry}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your business?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join our growing list of satisfied clients across multiple industries worldwide.
        </p>
        <button 
          onClick={toggleContactForm}
          className="bg-blue-300 text-blue-800 font-semibold py-2 px-6 rounded-md hover:bg-blue-400 transition-colors">
          Contact Us Today
        </button>
      </div>

      {showContactForm && (
        <ContactForm 
          isOpen={showContactForm} 
          onClose={toggleContactForm} 
        />
      )}

    </div>
  );
};

export default Clients;