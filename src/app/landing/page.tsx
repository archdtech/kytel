"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Users, Brain, Rocket, Target, Lightbulb, TrendingUp, CalendarDays, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      id: "workshops",
      title: "AI Business Workshops",
      description: "Practical hands-on sessions where executives and teams learn to harness AI for strategy, workflow automation, and measurable impact.",
      icon: <Brain className="w-8 h-8 text-purple-600"/>,
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:bg-purple-100",
      textColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      outlineColor: "border-purple-600 text-purple-600 hover:bg-purple-50",
      link: "/",
      duration: "2-3 hours",
      audience: "Executives & Teams",
      price: "Custom pricing"
    },
    {
      id: "mastermind",
      title: "Business Mastermind ThinkTank",
      description: "Recurring sessions for curated groups of business leaders to leverage collective intelligence, solve challenges, and accelerate growth.",
      icon: <Users className="w-8 h-8 text-teal-600"/>,
      color: "teal",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      hoverColor: "hover:bg-teal-100",
      textColor: "text-teal-600",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      outlineColor: "border-teal-600 text-teal-600 hover:bg-teal-50",
      link: "/mastermind",
      duration: "Monthly sessions",
      audience: "C-level & Founders",
      price: "From $299/session"
    },
    {
      id: "product",
      title: "Product Discovery & MVP Sprints",
      description: "Intensive hands-on sprints that help teams move from idea validation to MVP launch rapidly, using design thinking and lean methodologies.",
      icon: <Rocket className="w-8 h-8 text-orange-600"/>,
      color: "orange",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverColor: "hover:bg-orange-100",
      textColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      outlineColor: "border-orange-600 text-orange-600 hover:bg-orange-50",
      link: "/product-discovery",
      duration: "3-5 day sprints",
      audience: "Product Teams",
      price: "From $4,999"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Inc.",
      content: "Alaa's AI workshop transformed how we approach automation. We identified 15+ high-impact opportunities and implemented 3 within a month.",
      rating: 5,
      service: "AI Business Workshops"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, GrowthLabs",
      content: "The ThinkTank sessions have been invaluable. The collective intelligence of the group helped us pivot our strategy and secure our Series A.",
      rating: 5,
      service: "Business Mastermind"
    },
    {
      name: "Emily Watson",
      role: "Product Director, SaaSCo",
      content: "The MVP Design Sprint was a game-changer. We went from concept to validated prototype in 5 days, saving months of development time.",
      rating: 5,
      service: "Product Discovery"
    }
  ];

  const filteredServices = activeTab === "all" ? services : services.filter(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="mx-auto max-w-6xl px-6 pt-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-900">Alaa Almallah</div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-gray-600 hover:text-purple-600" onClick={() => window.location.href = '/'}>Workshops</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-teal-600" onClick={() => window.location.href = '/mastermind'}>ThinkTank</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-orange-600" onClick={() => window.location.href = '/product-discovery'}>Product Discovery</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="rounded-2xl px-4 py-2 text-sm mb-6 bg-gradient-to-r from-purple-600 to-orange-600 text-white">
            Innovation Strategy & Product Design
          </Badge>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Transform Ideas Into
            <span className="bg-gradient-to-r from-purple-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
              {" "}Impactful Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Helping founders and leadership teams navigate the intersection of AI, business strategy, and product innovation through hands-on workshops, collaborative think tanks, and accelerated development sprints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-2xl bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-8">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How I Can Help You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the format that best fits your needs - from intensive workshops to ongoing collaborative sessions
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            {[
              { id: "all", label: "All Services" },
              { id: "workshops", label: "Workshops" },
              { id: "mastermind", label: "ThinkTank" },
              { id: "product", label: "Product Sprints" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <Card key={service.id} className={`rounded-3xl ${service.borderColor} hover:shadow-xl transition-all duration-300 overflow-hidden group`}>
              <div className={`${service.bgColor} p-6`}>
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className={`text-xs ${service.hoverColor} ${service.textColor}`}>
                        {service.duration}
                      </Badge>
                      <Badge variant="secondary" className={`text-xs ${service.hoverColor} ${service.textColor}`}>
                        {service.audience}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Investment</span>
                    <span className="font-semibold text-gray-900">{service.price}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button 
                    className={`rounded-2xl ${service.buttonColor} text-white flex-1 group-hover:scale-105 transition-transform`}
                    onClick={() => window.location.href = service.link}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Alaa Almallah</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Product Designer & Innovation Strategist with deep experience in web3 and Generative AI. I help founders and leadership teams turn complex ideas into decision maps and scalable systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My approach combines strategic thinking with hands-on facilitation, ensuring that theoretical concepts translate into actionable outcomes. Whether through AI workshops, collaborative think tanks, or product sprints, I create environments where innovation thrives.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="px-3 py-1 border-gray-300 text-gray-700">Design Systems</Badge>
                <Badge variant="outline" className="px-3 py-1 border-gray-300 text-gray-700">AI Product Architecture</Badge>
                <Badge variant="outline" className="px-3 py-1 border-gray-300 text-gray-700">Strategy Sprints</Badge>
                <Badge variant="outline" className="px-3 py-1 border-gray-300 text-gray-700">Data Visualization</Badge>
              </div>
              <Button className="rounded-2xl bg-gray-900 hover:bg-black text-white">
                Download Full Profile
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Target className="w-6 h-6 text-purple-600"/>, title: "50+ Projects", text: "Completed across various industries" },
                { icon: <Users className="w-6 h-6 text-teal-600"/>, title: "200+ Leaders", text: "Coached and mentored" },
                { icon: <Lightbulb className="w-6 h-6 text-orange-600"/>, title: "15+ Years", text: "Experience in design and strategy" },
                { icon: <TrendingUp className="w-6 h-6 text-green-600"/>, title: "95% Success", text: "Rate in achieving project goals" }
              ].map((stat, i) => (
                <Card key={i} className="rounded-2xl p-4 text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
                  <p className="text-sm text-gray-600">{stat.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">What Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses that have transformed their approach to innovation and growth
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <Badge variant="outline" className="text-xs mt-1">{testimonial.service}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, effective process to ensure we achieve your goals efficiently
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your challenges, goals, and current situation through detailed conversations."
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Together we develop a tailored approach that addresses your specific needs and objectives."
              },
              {
                step: "03",
                title: "Execution",
                description: "We facilitate focused sessions, workshops, or sprints to generate actionable insights and solutions."
              },
              {
                step: "04",
                title: "Implementation",
                description: "You leave with clear deliverables, action plans, and the confidence to move forward."
              }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="bg-gradient-to-r from-purple-600 via-teal-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you are looking to harness AI, collaborate with peers, or accelerate your product development, I have the right solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-2xl bg-white text-gray-900 hover:bg-gray-100 px-8">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl border-white text-white hover:bg-white hover:text-gray-900 px-8">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to get started? I would love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">hello@alaamallah.com</p>
          </Card>
          
          <Card className="rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-8 h-8 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+971 50 123 4567</p>
          </Card>
          
          <Card className="rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Dubai, UAE</p>
          </Card>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Twitter className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Alaa Almallah</h3>
              <p className="text-gray-400 mb-4">
                Helping founders and leadership teams navigate the intersection of AI, business strategy, and product innovation.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">AI Workshops</a></li>
                <li><a href="/mastermind" className="hover:text-white transition-colors">Business ThinkTank</a></li>
                <li><a href="/product-discovery" className="hover:text-white transition-colors">Product Sprints</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Alaa Almallah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}