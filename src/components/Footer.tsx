
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">EduExcel</span>
              <span className="text-orange-500 ml-1">Academy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering students to crack JEE, NEET, and Board exams with expert guidance and proven teaching methodologies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-orange-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-orange-500" />
                <span>info@eduexcelacademy.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-orange-500" />
                <span>123 Education Street, Academic City, State 123456</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-orange-500 transition-colors">Our Courses</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-orange-500 transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-orange-500 transition-colors">Study Tips</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">JEE Main & Advanced</span></li>
              <li><span className="text-gray-300">NEET Preparation</span></li>
              <li><span className="text-gray-300">Class 11 & 12 CBSE</span></li>
              <li><span className="text-gray-300">State Board</span></li>
              <li><span className="text-gray-300">Online Classes</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 EduExcel Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
