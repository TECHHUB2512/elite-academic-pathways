
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, User, Clock, ArrowRight, BookOpen, Target, Lightbulb } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "JEE Main 2025: Complete Preparation Strategy",
      excerpt: "A comprehensive guide to crack JEE Main 2025 with effective study plans, important topics, and time management tips.",
      content: "Master the art of JEE Main preparation with our detailed strategy guide covering Physics, Chemistry, and Mathematics...",
      author: "Dr. Rajesh Kumar",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "JEE Preparation",
      image: "photo-1461749280684-dccba630e2f6",
      tags: ["JEE Main", "Study Strategy", "Time Management"]
    },
    {
      id: 2,
      title: "NEET 2025: Biology Preparation Tips",
      excerpt: "Essential strategies for mastering Biology for NEET 2025, including NCERT-based study approach and memory techniques.",
      content: "Biology forms the backbone of NEET preparation. Learn how to tackle Botany and Zoology effectively...",
      author: "Dr. Priya Mehta",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "NEET Preparation",
      image: "photo-1486312338219-ce68d2c6f44d",
      tags: ["NEET", "Biology", "NCERT", "Memory Techniques"]
    },
    {
      id: 3,
      title: "Board Exam 2025: Last Minute Preparation",
      excerpt: "Effective revision strategies and exam techniques to score 95%+ in Class 12 board examinations.",
      content: "With board exams approaching, learn the most effective last-minute preparation strategies...",
      author: "Prof. Anita Sharma",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Board Exams",
      image: "photo-1581091226825-a6a2a5aee158",
      tags: ["Board Exams", "Revision", "Score Improvement"]
    },
    {
      id: 4,
      title: "Mathematics Problem Solving Techniques",
      excerpt: "Advanced problem-solving strategies for JEE Mathematics with shortcuts and time-saving techniques.",
      content: "Master complex mathematical problems with our proven techniques and shortcuts...",
      author: "Mr. Vikash Singh",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Mathematics",
      image: "photo-1488590528505-98d2b5aba04b",
      tags: ["Mathematics", "Problem Solving", "JEE", "Shortcuts"]
    },
    {
      id: 5,
      title: "Chemistry Organic Reactions: Made Easy",
      excerpt: "Simplify organic chemistry reactions with our systematic approach and memory aids for better understanding.",
      content: "Organic chemistry doesn't have to be intimidating. Learn our systematic approach...",
      author: "Prof. Anita Sharma",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Chemistry",
      image: "photo-1498050108023-c5249f4df085",
      tags: ["Chemistry", "Organic Reactions", "Memory Aids"]
    },
    {
      id: 6,
      title: "Physics Numerical Problems: Step-by-Step Guide",
      excerpt: "Master physics numerical problems with our step-by-step approach and common mistake prevention tips.",
      content: "Physics numerical problems require systematic approach and practice. Here's how to master them...",
      author: "Dr. Rajesh Kumar",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Physics",
      image: "photo-1649972904349-6e44c42644a7",
      tags: ["Physics", "Numerical Problems", "Step-by-Step"]
    }
  ];

  const categories = [
    { name: "JEE Preparation", count: 15, icon: <Target className="w-5 h-5" /> },
    { name: "NEET Preparation", count: 12, icon: <BookOpen className="w-5 h-5" /> },
    { name: "Board Exams", count: 8, icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Study Tips", count: 10, icon: <Clock className="w-5 h-5" /> }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Study Tips & Exam Updates</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert insights, study strategies, and the latest updates to help you succeed in your academic journey
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={`https://images.unsplash.com/${featuredPost.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Read Full Article <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                    <img 
                      src={`https://images.unsplash.com/${post.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">
                          <div className="flex items-center">
                            {category.icon}
                            <span className="ml-3">{category.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">({category.count})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Study Tips */}
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Study Tips</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Practice previous year questions daily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Create mind maps for complex topics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Take regular mock tests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Maintain a doubt-clearing journal</span>
                    </li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-sm text-gray-600 mb-4">Get the latest study tips and exam updates delivered to your inbox.</p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button className="w-full bg-orange-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
