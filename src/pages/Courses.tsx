
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { BookOpen, Clock, Users, CheckCircle, Star } from "lucide-react";

const Courses = () => {
  const courseDetails = [
    {
      id: "jee",
      title: "JEE Main & Advanced",
      description: "Comprehensive preparation for India's most prestigious engineering entrance exam",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      batches: [
        { type: "Morning Batch", time: "6:00 AM - 8:00 AM" },
        { type: "Evening Batch", time: "6:00 PM - 8:00 PM" },
        { type: "Weekend Batch", time: "Saturday & Sunday 9:00 AM - 1:00 PM" }
      ],
      fee: "₹80,000/year",
      features: [
        "Complete NCERT + Advanced Level Coverage",
        "Daily Practice Tests & Mock Exams",
        "Previous Year Question Bank",
        "24/7 Doubt Clearing Sessions",
        "Performance Analysis & Reports",
        "Study Material & Books Included"
      ],
      admission: "Entrance Test + Interview",
      icon: "🏗️",
      color: "blue"
    },
    {
      id: "neet",
      title: "NEET Preparation",
      description: "Complete medical entrance exam preparation with NCERT-based approach",
      subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
      batches: [
        { type: "Morning Batch", time: "7:00 AM - 9:00 AM" },
        { type: "Afternoon Batch", time: "2:00 PM - 4:00 PM" },
        { type: "Evening Batch", time: "7:00 PM - 9:00 PM" }
      ],
      fee: "₹45,000/year",
      features: [
        "NCERT Line-by-Line Coverage",
        "Medical Terminology Focus",
        "Daily Biology Practice",
        "AIIMS & JIPMER Preparation",
        "Medical Career Counseling",
        "Anatomy Charts & Models Access"
      ],
      admission: "Merit-based + Counseling",
      icon: "🏥",
      color: "green"
    },
    {
      id: "boards",
      title: "Class 11 & 12 Board Preparation",
      description: "Excellence in CBSE and State Board examinations with 95%+ target",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
      batches: [
        { type: "Regular Batch", time: "4:00 PM - 6:00 PM" },
        { type: "Fast Track", time: "10:00 AM - 12:00 PM" },
        { type: "Revision Batch", time: "Weekend Special" }
      ],
      fee: "₹30,000/year",
      features: [
        "CBSE & State Board Curriculum",
        "Chapter-wise Test Series",
        "Board Exam Pattern Practice",
        "Practical Lab Sessions",
        "Internal Assessment Preparation",
        "Subject-wise Expert Faculty"
      ],
      admission: "Direct Admission",
      icon: "📚",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          border: 'border-blue-200'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700',
          border: 'border-green-200'
        };
      case 'orange':
        return {
          bg: 'bg-orange-100',
          text: 'text-orange-600',
          button: 'bg-orange-600 hover:bg-orange-700',
          border: 'border-orange-200'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive coaching programs designed to help you achieve excellence in JEE, NEET, and Board examinations
          </p>
        </div>
      </section>

      {/* Courses Detail Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courseDetails.map((course, index) => {
              const colors = getColorClasses(course.color);
              
              return (
                <div key={course.id} className={`border-2 ${colors.border} rounded-2xl overflow-hidden`}>
                  {/* Course Header */}
                  <div className={`${colors.bg} p-8`}>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl mr-4">{course.icon}</span>
                      <h2 className={`text-3xl md:text-4xl font-bold ${colors.text}`}>{course.title}</h2>
                    </div>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">{course.description}</p>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Subjects Covered */}
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                            Subjects Covered
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {course.subjects.map((subject, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Batch Timings */}
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-blue-600" />
                            Batch Timings
                          </h3>
                          <div className="space-y-2">
                            {course.batches.map((batch, idx) => (
                              <div key={idx} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                <span className="font-medium">{batch.type}</span>
                                <span className="text-gray-600">{batch.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Fee Structure */}
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Fee Structure</h3>
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                            <span className="text-2xl font-bold text-green-600">{course.fee}</span>
                            <p className="text-sm text-gray-600 mt-1">*Scholarships available for meritorious students</p>
                          </div>
                        </div>

                        {/* Admission Process */}
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Admission Process</h3>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <span className="font-medium text-blue-800">{course.admission}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Features */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-blue-600" />
                          Course Features
                        </h3>
                        <div className="space-y-3">
                          {course.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 space-y-4">
                          <button className={`w-full ${colors.button} text-white py-3 rounded-lg font-semibold transition-colors`}>
                            Enroll Now
                          </button>
                          <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                            Download Syllabus
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online Classes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Online Classes Available</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can't attend physical classes? Join our interactive online sessions via Zoom and Google Meet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Interactive Classes</h3>
              <p className="text-gray-600">Real-time doubt solving and personalized attention</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recorded Sessions</h3>
              <p className="text-gray-600">Access recorded classes anytime for revision</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Timings</h3>
              <p className="text-gray-600">Multiple batch options to suit your schedule</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
