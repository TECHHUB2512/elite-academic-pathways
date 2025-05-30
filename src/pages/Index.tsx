
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Clock, CheckCircle, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Crack JEE & NEET with Expert Guidance
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of successful students who achieved their dreams with our proven teaching methodology and expert faculty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <Link to="/dashboard">Go to Dashboard</Link>
                  </Button>
                ) : (
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <Link to="/auth">Join Now</Link>
                  </Button>
                )}
                <Button variant="outline" size="lg" className="text-blue-600 border-white hover:bg-white">
                  Free Demo Class
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students in classroom" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduExcel Academy?</h2>
            <p className="text-lg text-gray-600">Experience excellence in education with our comprehensive approach</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Experienced teachers with proven track records in IIT & NEET coaching</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">95% success rate with top rankings in JEE & NEET examinations</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Interactive Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Engaging online and offline classes with modern teaching methods</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>24/7 Doubt Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Round-the-clock doubt clearing sessions and personalized guidance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-lg text-gray-600">Comprehensive preparation for your dream career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">JEE Main & Advanced</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Complete syllabus coverage</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Regular mock tests</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Previous year analysis</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Expert faculty guidance</li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-600">NEET Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> NCERT focused approach</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Biology specialization</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Medical entrance strategy</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Regular assessments</li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-600">Board Exam Prep</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> CBSE & State board</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Class 11 & 12 support</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Conceptual clarity</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Exam strategies</li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from our successful students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"EduExcel Academy's teaching methodology helped me crack JEE Advanced with AIR 247. The faculty support was exceptional!"</p>
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Student" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold">Rahul Sharma</p>
                    <p className="text-sm text-gray-600">IIT Delhi, B.Tech CSE</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"The NEET preparation course was comprehensive. I secured admission in AIIMS with the help of excellent faculty and study materials."</p>
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Student" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold">Priya Patel</p>
                    <p className="text-sm text-gray-600">AIIMS Delhi, MBBS</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Scored 96% in Class 12 boards and also cleared JEE Mains. The dual preparation approach at EduExcel is amazing!"</p>
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Student" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold">Arjun Kumar</p>
                    <p className="text-sm text-gray-600">NIT Trichy, B.Tech</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Journey?</h2>
          <p className="text-xl mb-8">Join thousands of students who have achieved their dreams with us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Button asChild size="lg" variant="outline" className="text-orange-600 border-white hover:bg-white">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <Button asChild size="lg" variant="outline" className="text-orange-600 border-white hover:bg-white">
                <Link to="/auth">Enroll Now</Link>
              </Button>
            )}
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white hover:text-orange-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
