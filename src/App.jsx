import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Solutions from "./pages/solutions";
import Clients from "./pages/clients";
import Articles from "./pages/articles";
import AdminDashboard from "./pages/AdminDashboard";
import InquiryDetails from './pages/InquiryDetail';
import InquiryList from './pages/InquiryList';
import ScrollToTop from './components/ScrollToTop'; // ✅ Import ScrollToTop

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add this here */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <PhotoGallery/>
                <Pricing />
                <Testimonials />
              </div>
            } />
            <Route path="/solutions" element={
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <Solutions />
              </div>
            } />
            <Route path="/clients" element={
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <Clients />
              </div>
            } />
            <Route path="/articles" element={
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <Articles />
              </div>
            } />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/inquiries/:id" element={<InquiryDetails />} />
            <Route path="/admin/inquiries" element={<InquiryList />} />

            {/* 404 Page */}
            <Route path="*" element={
              <div className="max-w-7xl mx-auto pt-20 px-6 text-center">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="mt-4">The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
