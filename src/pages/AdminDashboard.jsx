import { Link } from "react-router-dom";
import { useState } from "react";
// Import your logo images
import techNovaLogo from '../assets/clients/technova-logo.png';
import globalRetailLogo from '../assets/clients/global-retail-logo.jpeg';
import sunderlandManufacturingLogo from '../assets/clients/sunderland-logo.png';
import healthcarePlusLogo from '../assets/clients/healthcare-plus-logo.jpg';
import fintechInnovationsLogo from '../assets/clients/fintech-logo.jpg';
import eduFutureLogo from '../assets/clients/edufuture-logo.png';

const AdminDashboard = () => {
  // Sample inquiry data
  const [inquiries, setInquiries] = useState([
    { id: 1, name: 'Thaw Myo Han', email: 'han@example.com', company: 'Chrome Industry', country: 'UK', jobTitle: 'CEO', jobDetails: 'Need AI solution for employee productivity tracking', date: '2023-05-15', status: 'Pending' },
    { id: 2, name: 'Sarah Lee', email: 'sarah@example.com', company: 'FinServe', country: 'USA', jobTitle: 'Product Manager', jobDetails: 'Looking for rapid prototyping tools', date: '2023-05-14', status: 'Responded' },
    { id: 3, name: 'John Smith', email: 'john@example.com', company: 'TechCorp', country: 'UK', jobTitle: 'CTO', jobDetails: 'Need AI solution for employee productivity tracking', date: '2023-05-15', status: 'Pending' },
    { id: 4, name: 'Sarah Lee', email: 'sarah@example.com', company: 'FinServe', country: 'USA', jobTitle: 'Product Manager', jobDetails: 'Looking for rapid prototyping tools', date: '2023-05-14', status: 'Responded' },
  ]);

  // Solutions data
  const [solutions, setSolutions] = useState([
    { id: 1, title: 'Data Analytics', category: 'Analytics', description: 'AI-powered Data Analytics turns large sets of data into actionable insights. By identifying trends and patterns, businesses can make informed decisions, improve efficiency, and uncover new opportunities.', status: 'Active' },
    { id: 2, title: 'AI Automation', category: 'Automation', description: 'AI Automation helps businesses streamline repetitive tasks and processes. By utilizing AI models, tasks are performed faster and more accurately, freeing up valuable human resources for more strategic work.', status: 'Active' },
    { id: 3, title: 'Virtual Assistants', category: 'Customer Service', description: 'AI Virtual Assistants provide customer support, handle inquiries, and automate responses. They improve customer satisfaction by offering instant, personalized interactions while reducing the need for human intervention.', status: 'Active' },
    { id: 4, title: 'Predictive Analytics', category: 'IoT', description: 'Predictive Analytics uses AI to forecast future trends and outcomes, helping businesses make proactive decisions. By analyzing past data, AI predicts customer behavior and market shifts to improve strategic planning.', status: 'In Development' },
    { id: 5, title: 'AI Security Solutions', category: 'Security', description: 'AI Security Solutions enhance cybersecurity by detecting and responding to potential threats. AI identifies abnormal patterns in real-time, offering better protection against cyberattacks, data breaches, and fraud.', status: 'Active' },
    { id: 6, title: 'AI Prototyping', category: 'Marketing', description: 'AI Prototyping accelerates the development process by automating the creation of functional prototypes. This helps teams quickly test ideas, iterate on designs, and bring innovations to market faster.', status: 'Active' }
]);

  // Clients data
  const [clients, setClients] = useState([
    { id: 1, name: 'TechNova Ltd', industry: 'Software Development', logo: techNovaLogo, since: '2022-03-15', contact: 'john@techcorp.com' },
    { id: 2, name: 'Global Retail Corp', industry: 'E-commerce', logo: globalRetailLogo, since: '2021-11-20', contact: 'sarah@finserve.com' },
    { id: 3, name: 'NISSAN Sunderland Manufacturing', industry: 'Industrial', logo: sunderlandManufacturingLogo, since: '2022-03-15', contact: 'john@techcorp.com' },
    { id: 4, name: 'HealthCare Plus', industry: 'Medical', logo: healthcarePlusLogo, since: '2021-11-20', contact: 'sarah@finserve.com' },
    { id: 5, name: 'FinTech Innovations', industry: 'Financial Services', logo: fintechInnovationsLogo, since: '2022-03-15', contact: 'john@techcorp.com' },
    { id: 6, name: 'EduFuture Academy', industry: 'Education', logo: eduFutureLogo, since: '2021-11-20', contact: 'sarah@finserve.com' }
  ]);

  // Articles data
  const [articles, setArticles] = useState([
    { id: 1, title: 'The Future of AI in Business', author: 'Jane Doe', date: '2023-04-10', category: 'Industry Trends', content: 'AI is revolutionizing industries, bringing efficiencies and insights that were once impossible. Discover how businesses are leveraging AI to gain competitive advantages.', status: 'Published' },
    { id: 2, title: 'How AI is Shaping the Future of Work', author: 'Mike Smith', date: '2023-03-28', category: 'Workplace Innovation', content: 'AI is increasingly being integrated into workflows, automating tasks and improving productivity. Learn how the workplace is transforming with AI solutions.', status: 'Draft' },
    { id: 3, title: 'AI Automation: A Game Changer', author: 'Jame Smith', date: '2023-04-10', category: 'Technology', content: 'Automation powered by AI is leading the charge in optimizing repetitive tasks and improving efficiency. Explore real-world applications changing business operations.', status: 'Published' },
    { id: 4, title: 'Digital Employee Experience Revolution', author: 'Max', date: '2023-03-28', category: 'Workplace Innovation', content: 'How AI-powered tools are transforming the digital workplace experience for employees across various industries.', status: 'Draft' },
    { id: 5, title: 'Ethical Considerations in AI Implementation', author: 'Tylar Han', date: '2023-04-10', category: 'Ethics', content: 'As AI becomes more prevalent, ethical concerns around bias, privacy, and accountability are coming to the forefront. Learn how companies are addressing these challenges.', status: 'Published' },
    { id: 6, title: 'Machine Learning in Customer Service', author: 'Jerry', date: '2023-03-28', category: 'Customer Experience', content: 'Discover how ML algorithms are transforming customer support with chatbots, sentiment analysis, and predictive assistance for more personalized experiences.', status: 'Draft' },
    { id: 7, title: 'The Rise of AI-Powered Analytics', author: 'Leo', date: '2023-04-10', category: 'Data Science', content: 'Business intelligence is being revolutionized by AI-driven analytics tools that can spot patterns and insights humans might miss.', status: 'Published' },
    { id: 8, title: 'AI in Healthcare: Current Applications', author: 'David', date: '2023-03-28', category: 'Healthcare', content: 'From diagnostic tools to personalized treatment plans, AI is making significant strides in improving patient outcomes and healthcare efficiency.', status: 'Draft' },
    { id: 9, title: 'The Future of AI-Assisted Creativity', author: 'John', date: '2023-04-10', category: 'Creativity', content: 'How generative AI tools are becoming collaborators in creative processes, from writing to design to music composition.', status: 'Published' }
  ]);
  

  // UI state
  const [activeForm, setActiveForm] = useState(null); // 'solutions', 'clients', or 'articles'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    solutions: { id: null, title: '', category: '', description: '', status: 'Active' },
    clients: { id: null, name: '', industry: '', logo: '', since: '', contact: '' },
    articles: { id: null, title: '', author: '', date: '', category: '', content: '', status: 'Draft' }
  });

      {/* Add these state variables at the top of your component */}
      const [selectedRequest, setSelectedRequest] = useState(null);
      const [showScheduleModal, setShowScheduleModal] = useState(false);
      const [showDetailsModal, setShowDetailsModal] = useState(false);
      const [scheduleConfirmed, setScheduleConfirmed] = useState(false);
  
      {/* Add these handler functions */}
      const handleScheduleClick = (request) => {
        setSelectedRequest(request);
        setShowScheduleModal(true);
      };
  
      const handleViewDetails = (request) => {
        setSelectedRequest(request);
        setShowDetailsModal(true);
      };
  
      const confirmSchedule = () => {
        setDemoRequests(demoRequests.map(request => 
          request.id === selectedRequest.id ? { ...request, status: 'Scheduled' } : request
        ));
        setScheduleConfirmed(true);
        setShowScheduleModal(false);
      };

  // Stats data
  const inquiryStats = [
    { name: 'Pending', value: 12, color: 'bg-yellow-500' },
    { name: 'Responded', value: 8, color: 'bg-blue-500' },
    { name: 'Converted', value: 5, color: 'bg-green-500' },
  ];

  const countryStats = [
    { name: 'UK', inquiries: 15 },
    { name: 'USA', inquiries: 22 },
    { name: 'Germany', inquiries: 8 },
  ];

const [selectedInquiry, setSelectedInquiry] = useState(null);
const [showRespondModal, setShowRespondModal] = useState(false);
const [showResponseConfirmation, setShowResponseConfirmation] = useState(false);
const [responseMethod, setResponseMethod] = useState('');
const handleRespondClick = (inquiry) => {
  setSelectedInquiry(inquiry);
  setShowRespondModal(true);
};

const handleSendResponse = (method) => {
  setResponseMethod(method);
  setShowResponseConfirmation(true);
  setShowRespondModal(false);
};

const handleConfirmResponse = () => {
  // Update the status locally
  setInquiries(inquiries.map(inquiry => 
    inquiry.id === selectedInquiry.id ? { ...inquiry, status: 'Responded' } : inquiry
  ));
  setShowResponseConfirmation(false);
};

const handleConfirmDelete = (id) => {
  if (window.confirm('Are you sure you want to delete this inquiry? This action cannot be undone.')) {
    setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
  }
};

const [demoRequests, setDemoRequests] = useState([
  {
    id: 1,
    name: 'James Wilson',
    email: 'james.wilson@innovatech.com',
    company: 'InnovaTech Solutions',
    country: 'Canada',
    industry: 'Healthcare Technology',
    role: 'Director of Digital Transformation',
    interests: ['Predictive Analytics', 'AI Security Solutions'],
    timeline: 'Within 2 months',
    challenges: 'Need predictive models for patient outcomes',
    date: '2023-07-10',
    status: 'Pending'
  },
  {
    id: 2,
    name: 'Sophia Chen',
    email: 'schen@globalretail.org',
    company: 'Global Retail Group',
    country: 'Singapore',
    industry: 'E-commerce',
    role: 'VP of Customer Experience',
    interests: ['Virtual Assistants', 'AI Prototyping'],
    timeline: 'Next quarter',
    challenges: 'Improving multilingual customer support',
    date: '2023-07-05',
    status: 'Scheduled'
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    email: 'm.rodriguez@automatix.ai',
    company: 'Automatix Industries',
    country: 'Germany',
    industry: 'Industrial Automation',
    role: 'Chief Technology Officer',
    interests: ['AI Automation', 'IoT Solutions'],
    timeline: 'ASAP',
    challenges: 'Automating quality control processes',
    date: '2023-07-15',
    status: 'Pending'
  },
  {
    id: 4,
    name: 'Priya Patel',
    email: 'priya.patel@edufuture.edu',
    company: 'EduFuture Academy',
    country: 'India',
    industry: 'Education Technology',
    role: 'Head of Digital Learning',
    interests: ['Data Analytics', 'AI Prototyping'],
    timeline: 'Before academic year starts',
    challenges: 'Personalized learning recommendations',
    date: '2023-07-08',
    status: 'Scheduled'
  },
  {
    id: 5,
    name: 'David Kim',
    email: 'david.kim@finovate.co',
    company: 'Finovate Financial',
    country: 'South Korea',
    industry: 'Fintech',
    role: 'Product Innovation Lead',
    interests: ['AI Security Solutions', 'Data Analytics'],
    timeline: '3-6 months',
    challenges: 'Fraud detection and prevention',
    date: '2023-07-12',
    status: 'Pending'
  }
]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      comment: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
      articleId: 1,
      articleTitle: 'The Future of AI in Business',
      date: '2023-06-15',
      status: 'approved' // 'approved', 'pending', 'spam'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      comment: 'I could not be happier with the outcome of our project. The team creativity and problem-solving skills were instrumental in bringing our vision to life',
      articleId: 2,
      articleTitle: 'Implementing Automation',
      date: '2023-06-14',
      status: 'pending'
    },
    {
      id: 3,
      name: 'David Johnson',
      email: 'mike@example.com',
      comment: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
      articleId: 1,
      articleTitle: 'Data Analytics',
      date: '2023-06-13',
      status: 'approved'
    },
    {
      id: 4,
      name: 'John Doe',
      email: 'john@example.com',
      comment: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
      articleId: 1,
      articleTitle: 'Virtual Assistants',
      date: '2023-06-15',
      status: 'approved'
    },
    {
      id: 5,
      name: 'Jane Smith',
      email: 'jane@example.com',
      comment: 'I could not be happier with the outcome of our project. The team creativity and problem-solving skills were instrumental in bringing our vision to life',
      articleId: 2,
      articleTitle: 'Predictive Analytics',
      date: '2023-06-14',
      status: 'pending'
    },
    {
      id: 6,
      name: 'David Johnson',
      email: 'mike@example.com',
      comment: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
      articleId: 2,
      articleTitle: 'AI Prototyping',
      date: '2023-06-13',
      status: 'approved'
    },
    {
      id: 7,
      name: 'Thaw Myo Han',
      email: 'han@example.com',
      comment: 'Great Articles',
      articleId: 3,
      articleTitle: 'The Future of AI in Business',
      date: '2023-06-13',
      status: 'approved'
    }
  ]);

  // Add these functions
  const updateCommentStatus = (id, newStatus) => {
    setComments(prev => 
      prev.map(comment => 
        comment.id === id ? { ...comment, status: newStatus } : comment
      )
    );
  };

  const deleteComment = (id) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      setComments(prev => prev.filter(comment => comment.id !== id));
    }
  };

  // Handle input changes
  const handleInputChange = (section, e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: value
      }
    });
  };

  // Handle form submission
  const handleSubmit = (section, e) => {
    e.preventDefault();
    const data = formData[section];
    
    if (editing[section]) {
      // Update existing item
      const updateFunction = {
        solutions: setSolutions,
        clients: setClients,
        articles: setArticles
      }[section];
      
      updateFunction(prev => prev.map(item => 
        item.id === editing[section] ? { ...data, id: editing[section] } : item
      ));
    } else {
      // Add new item
      const addFunction = {
        solutions: setSolutions,
        clients: setClients,
        articles: setArticles
      }[section];
      
      addFunction(prev => [...prev, { ...data, id: Date.now() }]);
    }
    
    // Reset form
    setFormData({
      ...formData,
      [section]: {
        id: null,
        ...Object.fromEntries(Object.keys(formData[section]).map(key => [key, key === 'status' ? 'Active' : '']))
      }
    });
    
    setEditing(prev => ({
      ...prev,
      [section]: null
    }));
  };

  const [editing, setEditing] = useState({
    solutions: null,
    clients: null,
    articles: null
  });

  const handleEdit = (section, id) => {
    const data = {
      solutions: solutions.find(item => item.id === id),
      clients: clients.find(item => item.id === id),
      articles: articles.find(item => item.id === id)
    }[section];
    
    setFormData({
      ...formData,
      [section]: data
    });
    
    setEditing(prev => ({
      ...prev,
      [section]: id
    }));
  };

  // Delete item
  const handleDelete = (section, id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      const deleteFunction = {
        solutions: setSolutions,
        clients: setClients,
        articles: setArticles
      }[section];
      
      deleteFunction(prev => prev.filter(item => item.id !== id));
      
      // If deleting the item being edited, reset editing state
      if (editing[section] === id) {
        setEditing(prev => ({
          ...prev,
          [section]: null
        }));
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">AI-Solutions Admin Dashboard</h1>
          <Link 
            to="/"
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            Back to Home
          </Link>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-700 mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'dashboard' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Inquries
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'demos' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('demos')}
          >
            Demo Requests
          </button>

          <button
  className={`px-4 py-2 font-medium ${activeTab === 'solutions' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
  onClick={() => {
    setActiveTab('solutions');
    setActiveForm(null);
  }}
>
  Solutions
</button>

<button
  className={`px-4 py-2 font-medium ${activeTab === 'clients' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
  onClick={() => {
    setActiveTab('clients');
    setActiveForm(null);
  }}
>
  Clients
</button>

<button
  className={`px-4 py-2 font-medium ${activeTab === 'articles' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
  onClick={() => {
    setActiveTab('articles');
    setActiveForm(null);
  }}
>
  Articles
</button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'comments' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setActiveTab('comments')}
          >
            Comments
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-neutral-800 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2 text-gray-300">Total Inquiries</h2>
                <p className="text-3xl font-bold text-blue-400">66</p>
                <p className="text-sm text-gray-400 mt-1">+12% from last month</p>
              </div>
              
              <div className="bg-neutral-800 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2 text-gray-300">Pending Response</h2>
                <p className="text-3xl font-bold text-yellow-400">12</p>
                <p className="text-sm text-gray-400 mt-1">3 awaiting for 3+ days</p>
              </div>

              <div className="bg-neutral-800 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2 text-gray-300">Demo Requests</h2>
                <p className="text-3xl font-bold text-purple-400">{demoRequests.length}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {demoRequests.filter(d => d.status === 'Pending').length} pending
                </p>
              </div>
              
              <div className="bg-neutral-800 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2 text-gray-300">Converted to Clients</h2>
                <p className="text-3xl font-bold text-green-400">5</p>
                <p className="text-sm text-gray-400 mt-1">8% conversion rate</p>
              </div>
            </div>

            {/* Stats Visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-800 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Inquiries by Status</h2>
                <div className="space-y-2">
                  {inquiryStats.map((stat, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{stat.name}</span>
                        <span>{stat.value} ({Math.round((stat.value / 25) * 100)}%)</span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-2.5">
                        <div 
                          className={`${stat.color} h-2.5 rounded-full`} 
                          style={{ width: `${(stat.value / 25) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-neutral-800 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Inquiries by Country</h2>
                <div className="space-y-2">
                  {countryStats.map((country, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{country.name}</span>
                        <span>{country.inquiries}</span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-2.5">
                        <div 
                          className="bg-purple-500 h-2.5 rounded-full" 
                          style={{ width: `${(country.inquiries / 22) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Inquiries Table */}
<div className="bg-neutral-800 rounded-lg shadow overflow-hidden mb-8">
  {/* Response Modal */}
  {showRespondModal && selectedInquiry && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-neutral-800 rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Respond to {selectedInquiry.name}</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-300 mb-1">Email: {selectedInquiry.email}</p>
          <p className="text-sm text-gray-300">Company: {selectedInquiry.company}</p>
          <p className="text-sm text-gray-300 mt-2">Inquiry Details:</p>
          <p className="text-sm text-gray-400">{selectedInquiry.jobDetails}</p>
        </div>
        
        <p className="mb-4">How would you like to respond?</p>
        
        <div className="flex flex-col space-y-3">
          <button 
            onClick={() => handleSendResponse('email')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Respond via Email
          </button>
          <button 
            onClick={() => handleSendResponse('phone')}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Respond via Phone
          </button>
          <button 
            onClick={() => setShowRespondModal(false)}
            className="bg-neutral-700 hover:bg-neutral-600 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}

  {/* Response Confirmation Modal */}
  {showResponseConfirmation && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-neutral-800 rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Response Sent</h3>
        <p className="mb-4">
          Your {responseMethod} response has been forwarded to the customer contact department.
          They will follow up with {selectedInquiry.name} from {selectedInquiry.company}.
        </p>
        <div className="flex justify-end space-x-3">
          <button 
            onClick={handleConfirmResponse}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )}

  <div className="p-4 border-b border-neutral-700">
    <h2 className="text-lg font-semibold">Recent Customer Inquiries</h2>
  </div>
  
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-neutral-700">
      <thead className="bg-neutral-750">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Company</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Country</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Job Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-neutral-800 divide-y divide-neutral-700">
        {inquiries.map((inquiry) => (
          <tr key={inquiry.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="font-medium">{inquiry.name}</div>
              <div className="text-sm text-gray-400">{inquiry.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{inquiry.company}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{inquiry.country}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{inquiry.jobTitle}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                ${inquiry.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                  inquiry.status === 'Responded' ? 'bg-blue-500/20 text-blue-400' : 
                  'bg-green-500/20 text-green-400'}`}>
                {inquiry.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button 
                onClick={() => handleRespondClick(inquiry)}
                className="text-blue-400 hover:text-blue-300 mr-3"
              >
                Respond
              </button>
              <button 
                onClick={() => handleConfirmDelete(inquiry.id)}
                className="text-red-400 hover:text-red-300"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  <div className="px-6 py-4 bg-neutral-750 text-right">
    <Link 
      to="/admin/inquiries"
      className="text-sm text-blue-400 hover:text-blue-300 font-medium"
    >
      View All Inquiries →
    </Link>
  </div>
</div>
          </>
        )}

{activeTab === 'demos' && (
  <>


    {/* Demo Requests Table */}
    <div className="bg-neutral-800 rounded-lg shadow overflow-hidden mb-8">
      {/* Schedule Modal */}
      {showScheduleModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-neutral-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Schedule Demo for {selectedRequest.name}</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-300">Company: {selectedRequest.company}</p>
              <p className="text-sm text-gray-300 mt-2">Interested in: {selectedRequest.interests.join(', ')}</p>
              <p className="text-sm text-gray-300 mt-2">Preferred timeline: {selectedRequest.timeline}</p>
            </div>
            
            <div className="flex flex-col space-y-3">
              <button 
                onClick={confirmSchedule}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Confirm Schedule
              </button>
              <button 
                onClick={() => setShowScheduleModal(false)}
                className="bg-neutral-700 hover:bg-neutral-600 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Confirmation */}
      {scheduleConfirmed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-neutral-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Demo Scheduled</h3>
            <p className="mb-4">
              The demo for {selectedRequest.name} from {selectedRequest.company} has been scheduled.
              Demo team will contact them shortly to confirm the details.
            </p>
            <div className="flex justify-end">
              <button 
                onClick={() => setScheduleConfirmed(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-neutral-800 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Request Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-300">Name</p>
                <p className="text-sm text-gray-400">{selectedRequest.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Email</p>
                <p className="text-sm text-gray-400">{selectedRequest.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Company</p>
                <p className="text-sm text-gray-400">{selectedRequest.company} ({selectedRequest.industry})</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Interests</p>
                <p className="text-sm text-gray-400">{selectedRequest.interests.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Timeline</p>
                <p className="text-sm text-gray-400">{selectedRequest.timeline}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Challenges</p>
                <p className="text-sm text-gray-400">{selectedRequest.challenges}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowDetailsModal(false)}
                className="bg-neutral-700 hover:bg-neutral-600 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 border-b border-neutral-700">
        <h2 className="text-lg font-semibold">Demo Requests</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-700">
          <thead className="bg-neutral-750">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Interests</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Timeline</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-800 divide-y divide-neutral-700">
            {demoRequests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{request.name}</div>
                  <div className="text-sm text-gray-400">{request.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {request.company}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {request.interests.map((interest, i) => (
                      <span key={i} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                        {interest}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {request.timeline}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${request.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                      request.status === 'Scheduled' ? 'bg-blue-500/20 text-blue-400' : 
                      'bg-green-500/20 text-green-400'}`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => handleScheduleClick(request)}
                    className="text-blue-400 hover:text-blue-300 mr-3"
                    disabled={request.status === 'Scheduled'}
                  >
                    {request.status === 'Scheduled' ? 'Scheduled' : 'Schedule'}
                  </button>
                  <button 
                    onClick={() => handleViewDetails(request)}
                    className="text-gray-400 hover:text-white"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
)}

        {activeTab === 'solutions' && (
          <div className="bg-neutral-800 rounded-lg shadow overflow-hidden mb-8">
            <div className="p-4 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold">AI Solutions</h2>
              <button 
  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
  onClick={() => {
    setFormData({
      ...formData,
      solutions: { id: null, title: '', category: '', description: '', status: 'Active' }
    });
    setEditing({ ...editing, solutions: null });
    setActiveForm('solutions');
  }}
>
  Add New Solution
</button>
            </div>
            
            {/* Solution Form */}
            {(activeForm === 'solutions' || editing.solutions) && (
  <div className="p-4 border-b border-neutral-700">
                <form onSubmit={(e) => handleSubmit('solutions', e)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.solutions.title}
                        onChange={(e) => handleInputChange('solutions', e)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                      <input
                        type="text"
                        name="category"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.solutions.category}
                        onChange={(e) => handleInputChange('solutions', e)}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                      <textarea
                        name="description"
                        rows="3"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.solutions.description}
                        onChange={(e) => handleInputChange('solutions', e)}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                      <select
                        name="status"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.solutions.status}
                        onChange={(e) => handleInputChange('solutions', e)}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Coming Soon">Coming Soon</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                  <button
  type="button"
  className="px-4 py-2 bg-neutral-600 rounded-md hover:bg-neutral-500 transition-colors"
  onClick={() => {
    setFormData({
      ...formData,
      [section]: { /* reset form data */ }
    });
    setEditing(prev => ({ ...prev, [section]: null }));
    setActiveForm(null);
  }}
>
  Cancel
</button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                    >
                      {editingId ? 'Update Solution' : 'Add Solution'}
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Solutions List */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-700">
                <thead className="bg-neutral-750">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-neutral-800 divide-y divide-neutral-700">
                  {solutions.map((solution) => (
                    <tr key={solution.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{solution.title}</div>
                        <div className="text-sm text-gray-400">{solution.description.substring(0, 50)}...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{solution.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${solution.status === 'Active' ? 'bg-green-500/20 text-green-400' : 
                            solution.status === 'Inactive' ? 'bg-red-500/20 text-red-400' : 
                            'bg-yellow-500/20 text-yellow-400'}`}>
                          {solution.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          className="text-blue-400 hover:text-blue-300 mr-3"
                          onClick={() => handleEdit('solutions', solution.id)}
                        >
                          Edit
                        </button>
                        <button 
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleDelete('solutions', solution.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="bg-neutral-800 rounded-lg shadow overflow-hidden mb-8">
            <div className="p-4 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Our Clients</h2>
              <button 
  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
  onClick={() => {
    setFormData({
      ...formData,
      clients: { id: null, name: '', industry: '', logo: '', since: '', contact: '' }
    });
    setEditing({ ...editing, clients: null });
    setActiveForm('clients');
  }}
>
  Add New Client
</button>
            </div>
            
            {/* Client Form */}
            {(activeForm === 'clients' || editing.clients) && (
  <div className="p-4 border-b border-neutral-700">
                <form onSubmit={(e) => handleSubmit('clients', e)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Client Name</label>
                      <input
                        type="text"
                        name="name"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.clients.name}
                        onChange={(e) => handleInputChange('clients', e)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Industry</label>
                      <input
                        type="text"
                        name="industry"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.clients.industry}
                        onChange={(e) => handleInputChange('clients', e)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Logo URL</label>
                      <input
                        type="text"
                        name="logo"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.clients.logo}
                        onChange={(e) => handleInputChange('clients', e)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Since</label>
                      <input
                        type="date"
                        name="since"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.clients.since}
                        onChange={(e) => handleInputChange('clients', e)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Contact Email</label>
                      <input
                        type="email"
                        name="contact"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.clients.contact}
                        onChange={(e) => handleInputChange('clients', e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                  <button
  type="button"
  className="px-4 py-2 bg-neutral-600 rounded-md hover:bg-neutral-500 transition-colors"
  onClick={() => {
    setFormData({
      ...formData,
      [section]: { /* reset form data */ }
    });
    setEditing(prev => ({ ...prev, [section]: null }));
    setActiveForm(null);
  }}
>
  Cancel
</button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                    >
                      {editingId ? 'Update Client' : 'Add Client'}
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Clients List */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-700">
                <thead className="bg-neutral-750">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Industry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Since</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-neutral-800 divide-y divide-neutral-700">
                  {clients.map((client) => (
                    <tr key={client.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{client.name}</div>
                        {client.logo && (
                          <div className="mt-1">
                            <img src={client.logo} alt={client.name} className="h-8" />
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{client.industry}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{client.since}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{client.contact}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          className="text-blue-400 hover:text-blue-300 mr-3"
                          onClick={() => handleEdit('clients', client.id)}
                        >
                          Edit
                        </button>
                        <button 
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleDelete('clients', client.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'articles' && (
          <div className="bg-neutral-800 rounded-lg shadow overflow-hidden mb-8">
            <div className="p-4 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Articles</h2>
              <button 
  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
  onClick={() => {
    setFormData({
      ...formData,
      articles: { id: null, title: '', author: '', date: '', category: '', content: '', status: 'Draft' }
    });
    setEditing({ ...editing, articles: null });
    setActiveForm('articles');
  }}
>
  Add New Article
</button>
            </div>
            
            {/* Article Form */}
            {(activeForm === 'articles' || editing.articles) && (
  <div className="p-4 border-b border-neutral-700">
                <form onSubmit={(e) => handleSubmit('articles', e)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.articles.title}
                        onChange={(e) => handleInputChange('articles', e)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Author</label>
                      <input
                        type="text"
                        name="author"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.articles.author}
                        onChange={(e) => handleInputChange('articles', e)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Publish Date</label>
                      <input
                        type="date"
                        name="date"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.articles.date}
                        onChange={(e) => handleInputChange('articles', e)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                      <select
                        name="category"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.articles.category}
                        onChange={(e) => handleInputChange('articles', e)}
                      >
                        <option value="">Select category</option>
                        <option value="Insights">Insights</option>
                        <option value="How-To">How-To</option>
                        <option value="News">News</option>
                        <option value="Case Study">Case Study</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Content</label>
                      <textarea
                        name="content"
                        rows="5"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.articles.content}
                        onChange={(e) => handleInputChange('articles', e)}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                      <select
                        name="status"
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                        value={formData.articles.status}
                        onChange={(e) => handleInputChange('articles', e)}
                      >
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                        <option value="Archived">Archived</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                  <button
  type="button"
  className="px-4 py-2 bg-neutral-600 rounded-md hover:bg-neutral-500 transition-colors"
  onClick={() => {
    setFormData({
      ...formData,
      [section]: { /* reset form data */ }
    });
    setEditing(prev => ({ ...prev, [section]: null }));
    setActiveForm(null);
  }}
>
  Cancel
</button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                    >
                      {editingId ? 'Update Article' : 'Add Article'}
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Articles List */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-700">
                <thead className="bg-neutral-750">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-neutral-800 divide-y divide-neutral-700">
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td className="px-6 py-4">
                        <div className="font-medium">{article.title}</div>
                        <div className="text-sm text-gray-400 mt-1">{article.content.substring(0, 60)}...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{article.author}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{article.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{article.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${article.status === 'Published' ? 'bg-green-500/20 text-green-400' : 
                            article.status === 'Draft' ? 'bg-yellow-500/20 text-yellow-400' : 
                            'bg-gray-500/20 text-gray-400'}`}>
                          {article.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          className="text-blue-400 hover:text-blue-300 mr-3"
                          onClick={() => handleEdit('articles', article.id)}
                        >
                          Edit
                        </button>
                        <button 
                          className="text-red-400 hover:text-red-300"
                          onClick={() => handleDelete('articles', article.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 'comments' && (
          <div className="bg-neutral-800 rounded-lg shadow overflow-hidden mb-8">
            <div className="p-4 border-b border-neutral-700">
              <h2 className="text-lg font-semibold">Article Comments</h2>
              <div className="flex space-x-4 mt-2">
                <button 
                  className={`text-sm ${filterStatus === 'all' ? 'text-blue-400' : 'text-gray-400'}`}
                  onClick={() => setFilterStatus('all')}
                >
                  All ({comments.length})
                </button>
                <button 
                  className={`text-sm ${filterStatus === 'approved' ? 'text-green-400' : 'text-gray-400'}`}
                  onClick={() => setFilterStatus('approved')}
                >
                  Approved ({comments.filter(c => c.status === 'approved').length})
                </button>
                <button 
                  className={`text-sm ${filterStatus === 'pending' ? 'text-yellow-400' : 'text-gray-400'}`}
                  onClick={() => setFilterStatus('pending')}
                >
                  Pending ({comments.filter(c => c.status === 'pending').length})
                </button>
                <button 
                  className={`text-sm ${filterStatus === 'spam' ? 'text-red-400' : 'text-gray-400'}`}
                  onClick={() => setFilterStatus('spam')}
                >
                  Spam ({comments.filter(c => c.status === 'spam').length})
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-700">
                <thead className="bg-neutral-750">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Comment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Article</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-neutral-800 divide-y divide-neutral-700">
                  {comments
                    .filter(comment => filterStatus === 'all' || comment.status === filterStatus)
                    .map((comment) => (
                      <tr key={comment.id}>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-300">{comment.comment}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">{comment.articleTitle}</div>
                          <div className="text-xs text-gray-400">ID: {comment.articleId}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">{comment.name}</div>
                          <div className="text-xs text-gray-400">{comment.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {new Date(comment.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${comment.status === 'approved' ? 'bg-green-500/20 text-green-400' : 
                              comment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                              'bg-red-500/20 text-red-400'}`}>
                            {comment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            {comment.status !== 'approved' && (
                              <button 
                                className="text-green-400 hover:text-green-300"
                                onClick={() => updateCommentStatus(comment.id, 'approved')}
                              >
                                Approve
                              </button>
                            )}
                            {comment.status !== 'spam' && (
                              <button 
                                className="text-red-400 hover:text-red-300"
                                onClick={() => updateCommentStatus(comment.id, 'spam')}
                              >
                                Spam
                              </button>
                            )}
                            <button 
                              className="text-gray-400 hover:text-white"
                              onClick={() => deleteComment(comment.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mb-8">
          {/* First row with 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-neutral-800 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-3">Export Data</h2>
              <p className="text-sm text-gray-400 mb-4">Export inquiry data for analysis or reporting</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                Export to CSV
              </button>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-3">Send Bulk Email</h2>
              <p className="text-sm text-gray-400 mb-4">Send updates or promotions to all inquiries</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors">
                Compose Email
              </button>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg shadow">
            <div className="mb-3 flex flex-col items-center justify-center">
              <h2 className="text-lg font-medium text-gray-200 mb-1">Comments</h2>
              <p className="text-2xl font-bold text-purple-400">TOTAL COMMENTS - {comments.length}</p>
            </div>
              
              <div className="flex justify-between text-sm">
                <div className="text-center">
                  <p className="text-green-400 font-medium">
                    {comments.filter(c => c.status === 'approved').length}
                  </p>
                  <p className="text-gray-400">Approved</p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-400 font-medium">
                    {comments.filter(c => c.status === 'pending').length}
                  </p>
                  <p className="text-gray-400">Pending</p>
                </div>
                <div className="text-center">
                  <p className="text-red-400 font-medium">
                    {comments.filter(c => c.status === 'spam').length}
                  </p>
                  <p className="text-gray-400">Spam</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Full-width second row */}
          <div className="bg-neutral-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">System Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Server Status</p>
                <div className="flex items-center text-green-400">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Operational</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Database</p>
                <div className="flex items-center text-green-400">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Connected</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Last Backup</p>
                <div className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Today, 02:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;