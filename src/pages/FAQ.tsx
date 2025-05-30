
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, Users, Clock } from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      title: "General Questions",
      icon: <HelpCircle className="w-6 h-6 text-blue-600" />,
      faqs: [
        {
          question: "What is EduExcel Academy?",
          answer: "EduExcel Academy is a premier coaching institute specializing in JEE Main & Advanced, NEET, and Class 11 & 12 board exam preparation. We have been helping students achieve their academic goals since 2019 with our expert faculty and proven teaching methodologies."
        },
        {
          question: "Where is EduExcel Academy located?",
          answer: "Our main campus is located at 123 Education Street, Academic City, State 123456. We also offer online classes for students who cannot attend physical classes."
        },
        {
          question: "What are your contact hours?",
          answer: "We are open Monday to Friday from 9:00 AM to 8:00 PM, Saturday from 9:00 AM to 6:00 PM, and Sunday from 10:00 AM to 4:00 PM. You can reach us at +91 98765 43210 or email us at info@eduexcelacademy.com."
        }
      ]
    },
    {
      title: "Courses & Admission",
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      faqs: [
        {
          question: "What courses do you offer?",
          answer: "We offer comprehensive coaching for JEE Main & Advanced, NEET, Class 11 & 12 CBSE, and State Board examinations. We also provide specialized crash courses and doubt-clearing sessions."
        },
        {
          question: "What is the admission process?",
          answer: "The admission process varies by course: JEE courses require an entrance test + interview, NEET courses are merit-based with counseling, and Board exam courses have direct admission. Contact us for specific details about your preferred course."
        },
        {
          question: "What are the course fees?",
          answer: "Our fees are: JEE Main & Advanced - ₹50,000/year, NEET Preparation - ₹45,000/year, Class 11 & 12 Boards - ₹30,000/year. We offer scholarships for meritorious students and flexible payment options."
        },
        {
          question: "Do you provide study materials?",
          answer: "Yes, we provide comprehensive study materials including books, practice sheets, previous year question papers, and online resources. All study materials are included in the course fee."
        }
      ]
    },
    {
      title: "Class Schedule & Batches",
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      faqs: [
        {
          question: "What are the batch timings?",
          answer: "We offer multiple batch options: Morning batches (6:00-8:00 AM), Evening batches (6:00-8:00 PM), and Weekend batches (Saturday & Sunday 9:00 AM - 1:00 PM). Choose the timing that suits your schedule best."
        },
        {
          question: "Can I change my batch after admission?",
          answer: "Yes, you can request a batch change subject to availability. Please contact our academic coordinator at least one week before you want to make the change."
        },
        {
          question: "What if I miss a class?",
          answer: "We provide recorded sessions for all our classes. You can access missed classes through our online portal. We also conduct doubt-clearing sessions to help you catch up."
        },
        {
          question: "Do you offer crash courses?",
          answer: "Yes, we offer intensive crash courses before major exams. These are designed for quick revision and last-minute preparation with focused practice sessions."
        }
      ]
    },
    {
      title: "Online Classes",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      faqs: [
        {
          question: "Do you offer online classes?",
          answer: "Yes, we offer live interactive online classes via Zoom and Google Meet. Our online classes include real-time doubt solving, recorded sessions for revision, and the same quality education as offline classes."
        },
        {
          question: "What technology do I need for online classes?",
          answer: "You need a stable internet connection, a computer/tablet/smartphone with camera and microphone, and the Zoom or Google Meet app installed. We provide technical support for setup."
        },
        {
          question: "Are online classes as effective as offline classes?",
          answer: "Our online classes are designed to be as interactive and effective as offline classes. We use digital whiteboards, breakout rooms for group discussions, and regular assessments to ensure quality education."
        },
        {
          question: "Can I attend both online and offline classes?",
          answer: "Yes, we offer hybrid learning options where you can attend some classes online and others offline, depending on your convenience and schedule."
        }
      ]
    },
    {
      title: "Tests & Performance",
      icon: <HelpCircle className="w-6 h-6 text-red-600" />,
      faqs: [
        {
          question: "How often do you conduct tests?",
          answer: "We conduct weekly chapter tests, monthly full-length mock tests, and quarterly comprehensive assessments. Special test series are conducted before major exams."
        },
        {
          question: "Do you provide performance analysis?",
          answer: "Yes, we provide detailed performance analysis after each test, including subject-wise breakdown, time management analysis, and personalized improvement suggestions."
        },
        {
          question: "What is your success rate?",
          answer: "We have a 95% success rate in board exams and 90% of our students clear JEE Main. Over 85% of our NEET students qualify for counseling. Detailed statistics are available on our testimonials page."
        },
        {
          question: "Do you provide career counseling?",
          answer: "Yes, we offer comprehensive career counseling including college selection guidance, career path discussions, and entrance exam strategy planning."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our courses, admission process, and academic programs
          </p>
        </div>
      </section>

      {/* FAQ Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-2xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <HelpCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Category Header */}
                <div className="bg-gray-50 p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    {category.icon}
                    <h2 className="text-2xl font-bold text-gray-900 ml-3">{category.title}</h2>
                  </div>
                </div>

                {/* FAQs */}
                <div className="p-6">
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex; // Unique index for each FAQ
                      const isOpen = openFAQ === globalIndex;
                      
                      return (
                        <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                          >
                            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="p-4 bg-white border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600">We're here to help you with any additional queries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Support</h3>
              <p className="text-gray-600 mb-4">Get in touch with our support team for personalized assistance</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Schedule Counseling</h3>
              <p className="text-gray-600 mb-4">Book a one-on-one session with our academic counselors</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Book Session
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Download Brochure</h3>
              <p className="text-gray-600 mb-4">Get detailed information about our courses and facilities</p>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Don't let doubts hold you back. Get in touch with us today and take the first step towards your success!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Call Now: +91 98765 43210
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
