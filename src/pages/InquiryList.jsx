import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const InquiryList = () => {
  // Sample data - in a real app, this would come from an API
  const [inquiries, setInquiries] = useState([
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+441234567890', company: 'TechCorp', country: 'UK', jobTitle: 'CTO', jobDetails: 'Need AI solution for employee productivity tracking', date: '2023-05-15', status: 'Pending' },
    { id: 2, name: 'Sarah Lee', email: 'sarah@example.com', phone: '+12025551234', company: 'FinServe', country: 'USA', jobTitle: 'Product Manager', jobDetails: 'Looking for rapid prototyping tools for our financial services platform', date: '2023-05-14', status: 'Responded' },
    { id: 3, name: 'Mohammed Ali', email: 'mohammed@example.com', phone: '+971501234567', company: 'HealthPlus', country: 'UAE', jobTitle: 'IT Director', jobDetails: 'Digital employee experience platform for our hospital network', date: '2023-05-12', status: 'Converted' },
    { id: 4, name: 'Emma Johnson', email: 'emma@example.com', phone: '+14165551234', company: 'EduTech', country: 'Canada', jobTitle: 'Innovation Lead', jobDetails: 'AI-powered learning assistant for our online education platform', date: '2023-05-10', status: 'Pending' },
    { id: 5, name: 'Carlos Mendez', email: 'carlos@example.com', phone: '+4915123456789', company: 'AutoManufact', country: 'Germany', jobTitle: 'Engineering Manager', jobDetails: 'Automated design validation system for vehicle components', date: '2023-05-08', status: 'Responded' },
    { id: 6, name: 'Priya Patel', email: 'priya@example.com', phone: '+919876543210', company: 'RetailChain', country: 'India', jobTitle: 'Digital Transformation Lead', jobDetails: 'AI solutions for inventory management and customer experience', date: '2023-05-05', status: 'Pending' },
    { id: 7, name: 'James Wilson', email: 'james@example.com', phone: '+61234567890', company: 'MiningCo', country: 'Australia', jobTitle: 'Operations Director', jobDetails: 'Predictive maintenance solutions for mining equipment', date: '2023-05-03', status: 'Converted' },
    { id: 8, name: 'Sophie Martin', email: 'sophie@example.com', phone: '+33123456789', company: 'FashionForward', country: 'France', jobTitle: 'Digital Director', jobDetails: 'AR/VR solutions for virtual try-ons in e-commerce', date: '2023-05-01', status: 'Pending' },
    { id: 9, name: 'Lucas Brown', email: 'lucas@example.com', phone: '+5511987654321', company: 'AgriTech', country: 'Brazil', jobTitle: 'Technology Officer', jobDetails: 'IoT solutions for precision agriculture', date: '2023-04-28', status: 'Responded' },
    { id: 10, name: 'Yuki Tanaka', email: 'yuki@example.com', phone: '+81345678901', company: 'RoboticsInc', country: 'Japan', jobTitle: 'R&D Manager', jobDetails: 'Computer vision for industrial robotics', date: '2023-04-25', status: 'Converted' },
    { id: 11, name: 'Olivia White', email: 'olivia@example.com', phone: '+442076543210', company: 'LegalTech', country: 'UK', jobTitle: 'Head of Innovation', jobDetails: 'Document analysis AI for legal contracts', date: '2023-04-22', status: 'Pending' },
    { id: 12, name: 'David Kim', email: 'david@example.com', phone: '+821012345678', company: 'GameStudio', country: 'South Korea', jobTitle: 'Technical Director', jobDetails: 'Procedural content generation for game development', date: '2023-04-20', status: 'Responded' },
  ]);

  // State for filters and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const inquiriesPerPage = 8; // Changed from 5 to 8

  // Filter inquiries based on search and status
  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = 
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || inquiry.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Get current inquiries for pagination
  const indexOfLastInquiry = currentPage * inquiriesPerPage;
  const indexOfFirstInquiry = indexOfLastInquiry - inquiriesPerPage;
  const currentInquiries = filteredInquiries.slice(indexOfFirstInquiry, indexOfLastInquiry);
  const totalPages = Math.ceil(filteredInquiries.length / inquiriesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Status options for filter
  const statusOptions = ['All', 'Pending', 'Responded', 'Converted'];

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Customer Inquiries</h1>
          <Link 
            to="/admin/dashboard"
            className="px-4 py-2 bg-neutral-700 rounded-md hover:bg-neutral-600 transition-colors text-sm md:text-base"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-neutral-800 p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Search</label>
              <input
                type="text"
                placeholder="Search inquiries..."
                className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
              <select
                className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                {statusOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('All');
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Inquiry Count */}
        <div className="mb-4 text-sm text-gray-400">
          Showing {filteredInquiries.length} inquiry{filteredInquiries.length !== 1 ? 's' : ''}
          {searchTerm && ` matching "${searchTerm}"`}
          {statusFilter !== 'All' && ` with status "${statusFilter}"`}
        </div>

        {/* Inquiries Table */}
        <div className="bg-neutral-800 rounded-lg shadow overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-700">
              <thead className="bg-neutral-750">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-neutral-800 divide-y divide-neutral-700">
                {currentInquiries.length > 0 ? (
                  currentInquiries.map((inquiry) => (
                    <tr key={inquiry.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{inquiry.name}</div>
                        <div className="text-sm text-gray-400">{inquiry.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{inquiry.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{inquiry.country}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{inquiry.jobTitle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{inquiry.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${inquiry.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                            inquiry.status === 'Responded' ? 'bg-blue-500/20 text-blue-400' : 
                            'bg-green-500/20 text-green-400'}`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link 
                          to={`/admin/inquiries/${inquiry.id}`}
                          className="text-blue-400 hover:text-blue-300 mr-3"
                        >
                          View
                        </Link>
                        <button className="text-green-400 hover:text-green-300">Respond</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-400">
                      No inquiries found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {filteredInquiries.length > inquiriesPerPage && (
          <div className="flex justify-center mb-8">
            <nav className="inline-flex rounded-md shadow">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-l-md border border-neutral-700 ${currentPage === 1 ? 'bg-neutral-800 text-gray-500 cursor-not-allowed' : 'bg-neutral-700 text-white hover:bg-neutral-600'}`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 border-t border-b border-neutral-700 ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-neutral-700 text-white hover:bg-neutral-600'}`}
                >
                  {number}
                </button>
              ))}
              
              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-r-md border border-neutral-700 ${currentPage === totalPages ? 'bg-neutral-800 text-gray-500 cursor-not-allowed' : 'bg-neutral-700 text-white hover:bg-neutral-600'}`}
              >
                Next
              </button>
            </nav>
          </div>
        )}

        {/* Export Button */}
        <div className="flex justify-end">
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors">
            Export to CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryList;