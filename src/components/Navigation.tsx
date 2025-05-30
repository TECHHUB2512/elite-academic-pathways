
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">EduExcel</span>
              <span className="text-orange-500 ml-1">Academy</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</Link>
            {user ? (
              <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Dashboard</Link>
            ) : (
              <>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
                <Link to="/auth" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">Login</Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Home</Link>
            <Link to="/courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Courses</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>About Us</Link>
            <Link to="/testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Testimonials</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Blog</Link>
            <Link to="/faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>FAQ</Link>
            {user ? (
              <Link to="/dashboard" className="block px-3 py-2 bg-blue-600 text-white rounded-lg mx-3" onClick={toggleMenu}>Dashboard</Link>
            ) : (
              <>
                <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
                <Link to="/auth" className="block px-3 py-2 bg-orange-500 text-white rounded-lg mx-3" onClick={toggleMenu}>Login</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
