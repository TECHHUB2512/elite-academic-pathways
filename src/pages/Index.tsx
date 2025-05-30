
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { BookOpen, Users, Trophy, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Faculty",
      description: "Learn from experienced teachers with proven track records"
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      title: "Proven Results",
      description: "90% of our students crack their target exams"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Interactive Classes",
      description: "Engaging online and offline learning experiences"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Doubt Solving",
      description: "24/7 personalized doubt clearing sessions"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Enrolled" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Expert Faculty" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crack JEE & NEET with <span className="text-orange-500">Expert Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who achieved their dreams with our proven teaching methodology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Join Now
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Free Demo Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose EduExcel Academy?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive education solutions with personalized attention to help you achieve your academic goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-lg text-gray-600">Comprehensive preparation for all major competitive exams</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* JEE Course */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">JEE Preparation</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Main & Advanced</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Physics, Chemistry, Maths</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Mock Tests & Analysis</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Doubt Clearing Sessions</li>
              </ul>
              <Link to="/courses" className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>

            {/* NEET Course */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">NEET Preparation</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Biology, Chemistry, Physics</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />NCERT Based Teaching</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Regular Tests</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Medical Career Guidance</li>
              </ul>
              <Link to="/courses" className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Learn More
              </Link>
            </div>

            {/* Board Exams */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Board Exams</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Class 11 & 12 CBSE</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />State Board Preparation</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Subject-wise Excellence</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Board Exam Strategy</li>
              </ul>
              <Link to="/courses" className="block text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg opacity-90">Numbers that speak for our excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{achievement.number}</div>
                <div className="text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Success stories from our proud achievers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"The teaching methodology at EduExcel Academy is exceptional. I cleared JEE Main with 99.2 percentile!"</p>
                <div className="flex items-center">
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1649972904349-6e44c42644a7' : index === 1 ? '1488590528505-98d2b5aba04b' : '1461749280684-dccba630e2f6'}?w=150&h=150&fit=crop&crop=face`}
                    alt="Student"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Rahul Sharma</div>
                    <div className="text-sm text-gray-600">JEE Main 99.2%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Testimonials <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Success Journey?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of successful students and achieve your dream scores</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Demo Class
            </Link>
            <Link 
              to="/courses" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
