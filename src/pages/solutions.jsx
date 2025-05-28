import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react'; // Import the checkmark icon

const Solutions = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    phone: '',
    role: '',
    companySize: '',
    country: '',        // Added
    industry: '',       // Added
    interests: [],
    timeline: '',
    challenges: '',
    preferredTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    setIsSubmitted(true); // Show success message
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        interest: '',
        phone: '',
        role: '',
        companySize: '',
        country: '',
        industry: '',
        interests: [],
        timeline: '',
        challenges: '',
        preferredTime: ''
      });
      setIsSubmitted(false);
      setShowDemoModal(false);
    }, 3000);
  };

  const services = [
    {
      icon: '🤖',
      title: 'AI Automation',
      description: 'Streamline repetitive tasks with intelligent automation.',
      caseStudy: {
        client: "TechCorp Inc.",
        result: "Reduced operational costs by 40%",
        details: "Automated 85% of manual data entry tasks"
      }
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform raw data into strategic insights.',
      caseStudy: {
        client: "Global Retail Co.",
        result: "Increased sales by 28%",
        details: "Identified high-value customer segments through AI pattern recognition"
      }
    },
    {
      icon: '💬',
      title: 'Virtual Assistants',
      description: '24/7 intelligent customer support solutions.',
      caseStudy: {
        client: "FinServe Bank",
        result: "Improved CSAT by 35%",
        details: "Handled 90% of routine inquiries without human intervention"
      }
    },
    {
      icon: '⚙️',
      title: 'AI Prototyping',
      description: 'Accelerate your product development cycle.',
      caseStudy: {
        client: "AutoInnovate",
        result: "Reduced time-to-market by 60%",
        details: "Generated 50+ prototype variations in 2 weeks"
      }
    },
    {
      icon: '🌐',
      title: 'Predictive Analytics',
      description: 'Anticipate market trends before they happen.',
      caseStudy: {
        client: "HealthCare Plus",
        result: "Improved inventory accuracy by 75%",
        details: "Predicted regional demand spikes with 92% accuracy"
      }
    },
    {
      icon: '🔐',
      title: 'AI Security Solutions',
      description: 'Next-generation protection against cyber threats.',
      caseStudy: {
        client: "National Bank Ltd.",
        result: "Prevented $2.8M in potential fraud",
        details: "Detected sophisticated attack patterns 3x faster than legacy systems"
      }
    }
  ];


  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              AI-Powered Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
              Transform your business with cutting-edge artificial intelligence
            </p>
            <button 
              onClick={() => setShowDemoModal(true)}
              className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid - Improved text contrast */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-transparent">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white-800 mb-4">
            Our AI Solutions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-white-700 max-w-2xl mx-auto">
            Customized AI implementations designed for your specific business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-blue-300 rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-200"
            >
              <div className="p-8">
                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                {/* Case Study Preview */}
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800 mb-1">Case Study:</p>
                  <p className="text-gray-800 font-semibold">{service.caseStudy.client}</p>
                  <p className="text-sm text-gray-700 mt-1">→ {service.caseStudy.result}</p>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/95 to-indigo-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h4 className="text-xl font-bold mb-3">Success Story</h4>
                  <p className="mb-4 opacity-90">{service.caseStudy.details}</p>
                  <button className="px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-medium hover:bg-gray-100">
                    Read Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section - Improved contrast */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-300 mb-2">200+</div>
              <div className="text-gray-200">AI Implementations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-300 mb-2">95%</div>
              <div className="text-gray-200">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-300 mb-2">40%</div>
              <div className="text-gray-200">Avg. Efficiency Gain</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-300 mb-2">3.2M</div>
              <div className="text-gray-200">Daily AI Interactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Improved contrast */}
      <section className="max-w-7xl mx-auto px-0 py-10 text-center bg-transparent">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Our AI experts will design a custom solution tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
            onClick={() => setShowDemoModal(true)}
            className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative bg-neutral-900 rounded-lg p-8 max-w-2xl w-full mx-4 border border-blue-700 overflow-y-auto max-h-screen">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Demo Scheduled Successfully!
                </h3>
                <p className="text-lg text-gray-300 mb-4">
                  Thank you for your interest in our AI solutions.
                </p>
                <p className="text-gray-400">
                  Our team will contact you shortly to confirm your demo details.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white-800">
                      Schedule Your Personalized AI Demo
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Let us tailor the demo to your specific business needs
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowDemoModal(false)}
                    className="text-gray-500 hover:text-gray-700 p-1"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">
                    Work Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Added Country Field */}
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">
                    Country*
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    required
                  >
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="JP">Japan</option>
                    <option value="IN">India</option>
                    <option value="BR">Brazil</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                {/* Added Company Industry Field */}
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">
                    Company Industry*
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    required
                  >
                    <option value="">Select industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance/Banking</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail/E-commerce</option>
                    <option value="Education">Education</option>
                    <option value="Government">Government</option>
                    <option value="Telecom">Telecommunications</option>
                    <option value="Transportation">Transportation/Logistics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">
                    Job Title/Role*
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="Executive">C-Level/Executive</option>
                    <option value="Director">Director</option>
                    <option value="Manager">Manager</option>
                    <option value="Developer">Developer/Technical</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">
                    Company Size*
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.companySize}
                    onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                    required
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>

              {/* Full Width Fields */}
              <div className="md:col-span-2 space-y-4">
                <label className="block mb-2 text-sm font-medium text-white-700">
                  Which solutions interest you?*
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      onClick={() => {
                        const newInterests = formData.interests || [];
                        if (newInterests.includes(service.title)) {
                          const index = newInterests.indexOf(service.title);
                          newInterests.splice(index, 1);
                        } else {
                          newInterests.push(service.title);
                        }
                        setFormData({...formData, interests: newInterests});
                      }}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        formData.interests?.includes(service.title)
                          ? 'border-blue-500 bg-blue-900/20'
                          : 'border-neutral-700 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-center">
                        {service.icon && <span className="text-xl mr-3">{service.icon}</span>}
                        <div>
                          <h4 className="font-medium">{service.title}</h4>
                          {service.description && (
                            <p className="text-sm text-neutral-400">{service.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white-700 mb-1">
                  Implementation Timeline*
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate">Immediately (within 1 month)</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Evaluating">Just evaluating options</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white-700 mb-1">
                  Specific Challenges or Goals (What would you like the demo to focus on?)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.challenges}
                  onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white-700 mb-1">
                  Preferred Demo Date/Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Personalized Demo
                </button>
              </div>
              </form>
              <div className="mt-4 text-center text-xs text-gray-500">
                <p>We'll contact you to confirm your demo time. By submitting, you agree to our Privacy Policy.</p>
              </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Solutions;