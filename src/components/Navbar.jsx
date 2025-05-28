import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import ContactForm from "../forms/contactform";
import AdminLoginForm from "../forms/AdminLoginForm";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    if (mobileDrawerOpen) setMobileDrawerOpen(false);
  };

  const toggleAdminForm = () => {
    setShowAdminForm(!showAdminForm);
    if (mobileDrawerOpen) setMobileDrawerOpen(false);
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    navigate("/admin/dashboard");
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    navigate("/"); // Redirect to home page after logout
    setShowAdminForm(false); // Close admin form if open
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'Y') {
        setShowAdminButton(!showAdminButton);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showAdminButton]);

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <NavLink 
                to="/" 
                className="flex items-center group"
                end
              >
                <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                <span className="text-xl tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  AISOLUTION
                </span>
              </NavLink>
            </div>
            
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex space-x-12">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink 
                      to={item.href}
                      className={({ isActive }) => 
                        `relative group transition-colors duration-300 ${
                          isActive 
                            ? 'text-blue-400 font-medium' 
                            : 'hover:text-blue-400'
                        }`
                      }
                    >
                      {item.label}
                      <span className={`
                        absolute left-0 bottom-0 h-0.5 bg-blue-400 
                        transition-all duration-300 ${
                          location.pathname === item.href 
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'
                        }`
                      }></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleContactForm}
                className="relative bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md hover:opacity-90 transition-opacity duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="relative z-10">CONTACT US</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              {showAdminButton && (
                isAdminLoggedIn ? (
                  <>
                    <NavLink 
                      to="/admin/dashboard"
                      className={({ isActive }) => 
                        `relative py-2 px-3 rounded-md group ${
                          isActive 
                            ? 'bg-green-700' 
                            : 'bg-green-600 hover:bg-green-700'
                        } transition-colors duration-300`
                      }
                    >
                      <span className="relative z-10">Dashboard</span>
                    </NavLink>
                    <button
                      onClick={handleAdminLogout}
                      className="relative py-2 px-3 border border-neutral-600 rounded-md hover:bg-neutral-800 transition-colors duration-300 group"
                    >
                      <span className="relative z-10">Logout</span>
                      <span className="absolute inset-0 bg-neutral-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={toggleAdminForm}
                    className="relative py-2 px-3 border border-neutral-600 rounded-md hover:bg-neutral-800 transition-colors duration-300 group"
                  >
                    <span className="relative z-10">Admin</span>
                    <span className="absolute inset-0 bg-neutral-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                )
              )}
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button 
                onClick={toggleNavbar}
                className="p-2 focus:outline-none hover:bg-neutral-800 rounded-md transition-colors duration-300"
              >
                {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul className="w-full text-center">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <NavLink 
                      to={item.href}
                      className={({ isActive }) => 
                        `text-lg transition-colors duration-300 relative group ${
                          isActive 
                            ? 'text-blue-400 font-medium' 
                            : 'hover:text-blue-400'
                        }`
                      }
                    >
                      {item.label}
                      <span className={`
                        absolute left-1/2 bottom-0 h-0.5 bg-blue-400 
                        transition-all duration-300 ${
                          location.pathname === item.href 
                            ? 'w-full left-0' 
                            : 'w-0 group-hover:w-full group-hover:left-0'
                        }`
                      }></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-4">
                <button
                  onClick={toggleContactForm}
                  className="relative py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 hover:opacity-90 transition-opacity duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                {showAdminButton && (
                  isAdminLoggedIn ? (
                    <>
                      <NavLink 
                        to="/admin/dashboard"
                        className={({ isActive }) => 
                          `relative py-2 px-3 rounded-md group ${
                            isActive 
                              ? 'bg-green-700' 
                              : 'bg-green-600 hover:bg-green-700'
                          } transition-colors duration-300`
                        }
                      >
                        <span className="relative z-10">Dashboard</span>
                      </NavLink>
                      <button
                        onClick={handleAdminLogout}
                        className="relative py-2 px-3 border border-neutral-600 rounded-md hover:bg-neutral-800 transition-colors duration-300 group"
                      >
                        <span className="relative z-10">Logout</span>
                        <span className="absolute inset-0 bg-neutral-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={toggleAdminForm}
                      className="relative py-2 px-3 border border-neutral-600 rounded-md hover:bg-neutral-800 transition-colors duration-300 group"
                    >
                      <span className="relative z-10">Admin</span>
                      <span className="absolute inset-0 bg-neutral-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <ContactForm isOpen={showContactForm} onClose={toggleContactForm} />
      <AdminLoginForm 
        isOpen={showAdminForm} 
        onClose={toggleAdminForm}
        onLoginSuccess={handleAdminLoginSuccess}
      />
    </>
  );
};

export default Navbar;