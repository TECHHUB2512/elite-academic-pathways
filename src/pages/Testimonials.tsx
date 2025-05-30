
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Star, Quote, Trophy, Target } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      exam: "JEE Main 2024",
      score: "99.2 Percentile",
      college: "IIT Delhi - Computer Science",
      image: "photo-1507003211169-0a1dd7228f2d",
      message: "The teaching methodology at EduExcel Academy is exceptional. The faculty not only helped me understand complex concepts but also developed my problem-solving skills. The regular mock tests and doubt-clearing sessions were instrumental in my success.",
      rating: 5
    },
    {
      name: "Priya Singh",
      exam: "NEET 2024",
      score: "685/720",
      college: "AIIMS Delhi",
      image: "photo-1494790108755-2616b612b786",
      message: "I joined EduExcel Academy in Class 11 and it was the best decision. The Biology faculty here is amazing and made even the most difficult topics easy to understand. The NCERT-focused approach really helped me crack NEET.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      exam: "JEE Advanced 2024",
      score: "AIR 147",
      college: "IIT Bombay - Mechanical",
      image: "photo-1472099645785-5658abf4ff4e",
      message: "The Mathematics faculty at EduExcel Academy is phenomenal. They taught me shortcuts and tricks that saved me valuable time during the actual exam. The competitive environment here pushed me to perform better every day.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      exam: "CBSE Class 12",
      score: "97.2%",
      college: "Delhi University - Economics Hons",
      image: "photo-1438761681033-6461ffad8d80",
      message: "Thanks to EduExcel Academy, I not only scored excellent marks in my boards but also developed a love for learning. The teachers here are very supportive and always ready to help with doubts.",
      rating: 5
    },
    {
      name: "Vikash Kumar",
      exam: "JEE Main 2024",
      score: "98.8 Percentile",
      college: "NIT Trichy - ECE",
      image: "photo-1507003211169-0a1dd7228f2d",
      message: "The Physics classes at EduExcel Academy are outstanding. The way complex concepts are explained with real-life examples made learning enjoyable. The study material provided was comprehensive and very helpful.",
      rating: 5
    },
    {
      name: "Ananya Joshi",
      exam: "NEET 2024",
      score: "670/720",
      college: "Maulana Azad Medical College",
      image: "photo-1494790108755-2616b612b786",
      message: "The Chemistry faculty here is brilliant. They made Organic Chemistry, which I used to fear, my strongest subject. The regular tests and personalized feedback helped me improve consistently.",
      rating: 5
    }
  ];

  const achievements = [
    {
      title: "JEE Main Qualifiers",
      count: "450+",
      description: "Students qualified JEE Main in 2024",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "NEET Qualifiers",
      count: "380+",
      description: "Students qualified NEET in 2024",
      icon: <Target className="w-8 h-8 text-green-500" />
    },
    {
      title: "Top Ranks",
      count: "50+",
      description: "Students in top 1000 ranks",
      icon: <Star className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Board Toppers",
      count: "120+",
      description: "Students scored 95%+ in boards",
      icon: <Trophy className="w-8 h-8 text-orange-500" />
    }
  ];

  const successStories = [
    {
      year: "2024",
      highlights: [
        "5 students in IIT Delhi",
        "12 students in AIIMS",
        "89% JEE Main qualification rate",
        "92% NEET qualification rate"
      ]
    },
    {
      year: "2023",
      highlights: [
        "3 students in IIT Bombay",
        "8 students in AIIMS",
        "85% JEE Main qualification rate",
        "88% NEET qualification rate"
      ]
    },
    {
      year: "2022",
      highlights: [
        "7 students in top IITs",
        "15 students in AIIMS/JIPMER",
        "82% JEE Main qualification rate",
        "85% NEET qualification rate"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from our successful students who achieved their dreams with our guidance and support
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements in Numbers</h2>
            <p className="text-lg text-gray-600">Results that speak for our excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.count}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our successful students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600" />
                </div>
                
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Message */}
                <p className="text-gray-700 mb-6 text-center italic">"{testimonial.message}"</p>
                
                {/* Student Info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center">
                    <img 
                      src={`https://images.unsplash.com/${testimonial.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.exam}</p>
                      <p className="text-sm text-green-600 font-bold">{testimonial.score}</p>
                      <p className="text-xs text-gray-600">{testimonial.college}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise Success Stories */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Year-wise Success Stories</h2>
            <p className="text-lg text-gray-600">Consistent excellence year after year</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{story.year}</h3>
                  <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
                </div>
                
                <ul className="space-y-3">
                  {story.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center">
                      <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be the next success story at EduExcel Academy. Start your journey towards achieving your dream college today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Counseling
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
