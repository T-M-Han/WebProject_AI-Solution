import { X, CheckCircle } from "lucide-react";
import { useState } from "react";
import countries from "../data/countries";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
    industry: "",
    services: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status

  const industries = [
    "Healthcare",
    "Finance & Banking",
    "Manufacturing",
    "Retail & E-commerce",
    "Education",
    "Technology & IT",
    "Telecommunications",
    "Transportation & Logistics",
    "Energy & Utilities",
    "Media & Entertainment",
    "Government & Public Sector",
    "Agriculture",
    "Construction",
    "Hospitality & Tourism",
    "Professional Services",
    "Non-Profit",
    "Other"
  ];

  const availableServices = [
    {
      id: 'automation',
      name: 'AI Automation',
      icon: '⚙️',
      description: 'Streamline repetitive tasks and processes'
    },
    {
      id: 'analytics',
      name: 'Data Analytics',
      icon: '📊',
      description: 'Turn data into actionable insights'
    },
    {
      id: 'assistants',
      name: 'Virtual Assistants',
      icon: '💬',
      description: 'Automate customer support and inquiries'
    },
    {
      id: 'prototyping',
      name: 'AI Prototyping',
      icon: '⚡',
      description: 'Accelerate development process'
    },
    {
      id: 'predictive',
      name: 'Predictive Analytics',
      icon: '🌐',
      description: 'Forecast future trends and outcomes'
    },
    {
      id: 'security',
      name: 'AI Security Solutions',
      icon: '🔐',
      description: 'Enhance cybersecurity protection'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (serviceId) => {
    setFormData(prev => {
      if (prev.services.includes(serviceId)) {
        return {
          ...prev,
          services: prev.services.filter(id => id !== serviceId)
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, serviceId]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true); // Show success message
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        jobTitle: "",
        jobDetails: "",
        industry: "",
        services: []
      });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-neutral-900 rounded-lg p-8 max-w-2xl w-full mx-4 border border-blue-700 overflow-y-auto max-h-screen">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          <X size={24} />
        </button>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-lg mb-4">Your inquiry has been submitted successfully.</p>
            <p className="text-neutral-400">
              Our team will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Tell Us About Your Project</h2>
            <p className="text-center text-neutral-400 mb-6">
              Let us know how we can help with your AI solution needs
            </p>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {/* Company Information */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block mb-2 text-sm font-medium">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="industry" className="block mb-2 text-sm font-medium">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Services of Interest - Full width */}
              <div className="md:col-span-2 space-y-4">
                <label className="block mb-2 text-sm font-medium">
                  Services of Interest *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableServices.map(service => (
                    <div 
                      key={service.id}
                      onClick={() => handleServiceChange(service.id)}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.services.includes(service.id)
                          ? 'border-blue-500 bg-blue-900/20'
                          : 'border-neutral-700 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{service.icon}</span>
                        <div>
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-sm text-neutral-400">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Job Information - Full width */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="jobDetails" className="block mb-2 text-sm font-medium">
                    Job Details / Requirements *
                  </label>
                  <textarea
                    id="jobDetails"
                    name="jobDetails"
                    rows="5"
                    value={formData.jobDetails}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your project requirements in detail..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 rounded-md hover:from-blue-600 hover:to-blue-900 transition-colors font-medium"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;