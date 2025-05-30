
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Award, Target, Eye, Heart, Users, BookOpen } from "lucide-react";

const About = () => {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Physics",
      qualification: "Ph.D in Physics, IIT Delhi",
      experience: "15+ years",
      image: "photo-1507003211169-0a1dd7228f2d",
      achievements: ["JEE Main Topper Mentor", "Research Publications: 25+", "Gold Medalist"]
    },
    {
      name: "Prof. Anita Sharma",
      subject: "Chemistry",
      qualification: "M.Sc Chemistry, Gold Medalist",
      experience: "12+ years",
      image: "photo-1494790108755-2616b612b786",
      achievements: ["NEET Chemistry Expert", "Organic Chemistry Specialist", "Student Favorite"]
    },
    {
      name: "Mr. Vikash Singh",
      subject: "Mathematics",
      qualification: "M.Tech IIT Bombay",
      experience: "10+ years",
      image: "photo-1472099645785-5658abf4ff4e",
      achievements: ["JEE Advanced Mathematics", "Problem Solving Expert", "Math Olympiad Judge"]
    },
    {
      name: "Dr. Priya Mehta",
      subject: "Biology",
      qualification: "Ph.D Botany, AIIMS",
      experience: "14+ years",
      image: "photo-1438761681033-6461ffad8d80",
      achievements: ["NEET Biology Topper Guide", "Medical Entrance Expert", "NCERT Contributor"]
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for academic excellence and help students achieve their highest potential"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Care",
      description: "Individual attention and personalized mentoring for every student's success"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Innovation",
      description: "Modern teaching methods and technology-enhanced learning experiences"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Integrity",
      description: "Honest guidance and transparent teaching practices for student growth"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduExcel Academy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering students since 2019 with quality education and proven results in competitive exams
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide comprehensive, affordable, and quality education that empowers students to achieve their academic goals and secure admission in top engineering and medical colleges. We believe in nurturing not just academic excellence but also building character and confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the most trusted and preferred educational institute in the region, known for our innovative teaching methods, dedicated faculty, and outstanding results. We envision creating future leaders and professionals who contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading coaching institute
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our institute building"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Founded in 2019</h3>
                <p className="text-gray-700">
                  EduExcel Academy was founded with a simple yet powerful vision: to make quality education accessible to every aspiring student. What started as a small coaching center with just 20 students has now grown into a premier institute with over 500 successful students.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-700">
                  Our consistent results speak for themselves. With a 95% success rate in board exams and 90% of our students clearing JEE Main, we have established ourselves as a trusted name in the education sector.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Growing Strong</h3>
                <p className="text-gray-700">
                  Today, we continue to evolve with modern teaching methodologies, state-of-the-art infrastructure, and a team of highly qualified faculty members dedicated to student success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our teaching and interactions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Faculty</h2>
            <p className="text-lg text-gray-600">Experienced educators dedicated to your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square">
                  <img 
                    src={`https://images.unsplash.com/${teacher.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{teacher.subject}</p>
                  <p className="text-sm text-gray-600 mb-2">{teacher.qualification}</p>
                  <p className="text-sm text-gray-600 mb-4">Experience: {teacher.experience}</p>
                  
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Achievements:</h4>
                    {teacher.achievements.map((achievement, idx) => (
                      <p key={idx} className="text-xs text-gray-600">• {achievement}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Modern Infrastructure</h2>
            <p className="text-lg text-gray-600">State-of-the-art facilities for optimal learning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Smart Classrooms"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Smart Classrooms</h3>
              <p className="text-gray-600">Interactive whiteboards and digital learning tools</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Library"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Well-equipped Library</h3>
              <p className="text-gray-600">Extensive collection of reference books and study materials</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Lab"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Science Labs</h3>
              <p className="text-gray-600">Fully equipped Physics, Chemistry, and Biology laboratories</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
