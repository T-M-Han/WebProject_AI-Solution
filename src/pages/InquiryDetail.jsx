// src/pages/InquiryDetails.jsx
import { Link, useParams } from "react-router-dom";

const InquiryDetails = () => {
  const { id } = useParams();
  
  // Sample data - in a real app, this would come from an API
  const inquiryData = {
    1: { id: 1, name: 'John Smith', email: 'john@example.com', company: 'TechCorp', country: 'UK', jobTitle: 'CTO', jobDetails: 'Need AI solution for employee productivity tracking', date: '2023-05-15', status: 'Pending', notes: 'Waiting for budget approval from finance team. Follow up in 1 week.' },
    2: { id: 2, name: 'Sarah Lee', email: 'sarah@example.com', company: 'FinServe', country: 'USA', jobTitle: 'Product Manager', jobDetails: 'Looking for rapid prototyping tools', date: '2023-05-14', status: 'Responded', notes: 'Sent product catalog and pricing. Waiting for their feedback.' },
    3: { id: 3, name: 'Mohammed Ali', email: 'mohammed@example.com', company: 'HealthPlus', country: 'UAE', jobTitle: 'IT Director', jobDetails: 'Digital employee experience platform', date: '2023-05-12', status: 'Converted', notes: 'Signed contract for initial discovery phase. Project kickoff next Monday.' },
    4: { id: 4, name: 'Emma Johnson', email: 'emma@example.com', company: 'EduTech', country: 'Canada', jobTitle: 'Innovation Lead', jobDetails: 'AI-powered learning assistant', date: '2023-05-10', status: 'Pending', notes: 'Requires custom solution. Need to schedule technical discussion.' },
    5: { id: 5, name: 'Carlos Mendez', email: 'carlos@example.com', company: 'AutoManufact', country: 'Germany', jobTitle: 'Engineering Manager', jobDetails: 'Automated design validation system', date: '2023-05-08', status: 'Responded', notes: 'Sent case studies. Interested in pilot program.' },
  };

  const inquiry = inquiryData[id] || inquiryData[1]; // Fallback to first inquiry if not found

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Inquiry Details</h1>
          <Link 
            to="/admin/dashboard"
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-neutral-800 rounded-lg shadow overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1">{inquiry.name}</h2>
                <p className="text-gray-400">{inquiry.jobTitle} at {inquiry.company}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full 
                  ${inquiry.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                    inquiry.status === 'Responded' ? 'bg-blue-500/20 text-blue-400' : 
                    'bg-green-500/20 text-green-400'}`}>
                  {inquiry.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Contact Information</h3>
                <div className="space-y-2">
                  <p><span className="text-gray-400">Email:</span> {inquiry.email}</p>
                  <p><span className="text-gray-400">Company:</span> {inquiry.company}</p>
                  <p><span className="text-gray-400">Country:</span> {inquiry.country}</p>
                  <p><span className="text-gray-400">Date Received:</span> {inquiry.date}</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Project Details</h3>
                <p className="text-gray-300">{inquiry.jobDetails}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Notes</h3>
              <div className="bg-neutral-750 p-4 rounded-lg">
                <p>{inquiry.notes}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                Send Email
              </button>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors">
                Add Note
              </button>
              {inquiry.status !== 'Converted' && (
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors">
                  Mark as Converted
                </button>
              )}
              <button className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors">
                Edit Details
              </button>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-neutral-700">
            <h2 className="text-lg font-semibold">Communication History</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4 py-2">
                <div className="flex justify-between items-start">
                  <p className="font-medium">Initial inquiry received</p>
                  <span className="text-sm text-gray-400">{inquiry.date}</span>
                </div>
                <p className="text-sm text-gray-300 mt-1">Customer submitted inquiry through website contact form.</p>
              </div>
              
              {inquiry.status !== 'Pending' && (
                <div className="border-l-2 border-green-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <p className="font-medium">Response sent</p>
                    <span className="text-sm text-gray-400">
                      {inquiry.status === 'Responded' ? '2023-05-16' : '2023-05-13'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    Sent initial response with product information and next steps.
                  </p>
                </div>
              )}
              
              {inquiry.status === 'Converted' && (
                <div className="border-l-2 border-purple-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <p className="font-medium">Project started</p>
                    <span className="text-sm text-gray-400">2023-05-20</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    Contract signed and project kickoff completed. Assigned to project manager.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryDetails;