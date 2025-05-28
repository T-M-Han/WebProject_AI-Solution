import { Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "AI is revolutionizing industries, bringing efficiencies and insights that were once impossible. Discover how businesses are leveraging AI to gain competitive advantages.",
      category: "Industry Trends",
      date: "May 15, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "How AI is Shaping the Future of Work",
      excerpt: "AI is increasingly being integrated into workflows, automating tasks and improving productivity. Learn how the workplace is transforming with AI solutions.",
      category: "Workplace Innovation",
      date: "June 2, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "AI Automation: A Game Changer",
      excerpt: "Automation powered by AI is leading the charge in optimizing repetitive tasks and improving efficiency. Explore real-world applications changing business operations.",
      category: "Technology",
      date: "June 18, 2023",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Digital Employee Experience Revolution",
      excerpt: "How AI-powered tools are transforming the digital workplace experience for employees across various industries.",
      category: "Workplace Innovation",
      date: "July 5, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80"
    },
    {
      id: 5,
      title: "Ethical Considerations in AI Implementation",
      excerpt: "As AI becomes more prevalent, ethical concerns around bias, privacy, and accountability are coming to the forefront. Learn how companies are addressing these challenges.",
      category: "Ethics",
      date: "August 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 6,
      title: "Machine Learning in Customer Service",
      excerpt: "Discover how ML algorithms are transforming customer support with chatbots, sentiment analysis, and predictive assistance for more personalized experiences.",
      category: "Customer Experience",
      date: "September 1, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 7,
      title: "The Rise of AI-Powered Analytics",
      excerpt: "Business intelligence is being revolutionized by AI-driven analytics tools that can spot patterns and insights humans might miss.",
      category: "Data Science",
      date: "September 18, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 8,
      title: "AI in Healthcare: Current Applications",
      excerpt: "From diagnostic tools to personalized treatment plans, AI is making significant strides in improving patient outcomes and healthcare efficiency.",
      category: "Healthcare",
      date: "October 5, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 9,
      title: "The Future of AI-Assisted Creativity",
      excerpt: "How generative AI tools are becoming collaborators in creative processes, from writing to design to music composition.",
      category: "Creativity",
      date: "October 22, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // Sample comments data
  const comments = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Great article! The insights about AI in business are spot on. Looking forward to more content like this.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've implemented some of these AI solutions in my company and can confirm they make a huge difference.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Would love to see a deeper dive into the ethical considerations of workplace AI in future articles.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Emily",
      avatar: "https://randomuser.me/api/portraits/women/69.jpg",
      text: "I'd want to see a more in-depth look at the ethical implications of workplace AI in future publications.",
      date: "3 days ago"
    }
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log("Comment submitted:", commentData);
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form and hide success message after 3 seconds
    setTimeout(() => {
      setCommentData({
        name: '',
        email: '',
        comment: ''
      });
      setShowSuccess(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Insights & Articles</h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto">
          Discover the latest trends, innovations, and thought leadership in AI-powered digital employee experiences.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <div key={article.id} className="bg-blue-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <Link 
                 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Section */}
      <div className="mt-16 max-w-9xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Join the Discussion</h2>
        
        {/* Comment Form */}
        <div className="bg-transparent p-6 rounded-lg shadow-md mb-8 relative">
          {showSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-green-800 font-medium">Comment submitted successfully!</h3>
                <p className="text-green-700 text-sm">Thank you for your contribution to the discussion.</p>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold mb-4">Leave a comment</h3>
              <form className="space-y-4" onSubmit={handleCommentSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white-700 mb-1">Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={commentData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white-700 mb-1">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={commentData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-white-700 mb-1">Comment*</label>
                  <textarea 
                    id="comment"
                    name="comment"
                    value={commentData.comment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Share your thoughts..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </>
          )}
        </div>
        
        {/* Comments List */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{comments.length} Comments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comments.map(comment => (
              <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <img 
                    src={comment.avatar} 
                    alt={comment.name} 
                    className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline flex-wrap">
                      <h4 className="text-black ont-medium mr-2">{comment.name}</h4>
                      <span className="text-gray-500 text-sm">{comment.date}</span>
                    </div>
                    <p className="text-gray-700 mt-1 text-sm">{comment.text}</p>
                    <div className="flex space-x-4 text-xs text-gray-500 mt-2">
                      <button className="hover:text-blue-600">Like</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;