"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Rocket, Mic, Laptop, CalendarDays, Shield, Zap, BookOpen, Lightbulb, Code, Palette, Users2, TrendingUp } from "lucide-react";

export default function ProductDiscovery() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedSprint, setSelectedSprint] = useState<string | null>(null);

  const sprintOptions = [
    { 
      title: "Discovery Sprint", 
      duration: "3 days", 
      price: "$4,999", 
      description: "Validate your product idea and define MVP scope",
      outcomes: ["User research insights", "Market validation", "Feature prioritization", "Technical feasibility"],
      idealFor: "Early-stage startups and new product initiatives"
    },
    { 
      title: "MVP Design Sprint", 
      duration: "5 days", 
      price: "$8,999", 
      description: "Design and prototype your minimum viable product",
      outcomes: ["Interactive prototype", "User testing results", "Technical architecture", "Development roadmap"],
      idealFor: "Teams ready to build their first product version"
    },
    { 
      title: "Growth Sprint", 
      duration: "4 days", 
      price: "$6,999", 
      description: "Optimize existing product for growth and retention",
      outcomes: ["Growth strategy", "User journey optimization", "Analytics framework", "A/B testing plan"],
      idealFor: "Products with initial traction seeking scale"
    }
  ];

  const upcomingSprints = [
    { date: "March 18-22, 2024", type: "MVP Design Sprint", spots: 4, format: "In-person" },
    { date: "April 8-12, 2024", type: "Discovery Sprint", spots: 6, format: "Hybrid" },
    { date: "April 29 - May 3, 2024", type: "Growth Sprint", spots: 5, format: "Virtual" },
    { date: "May 20-24, 2024", type: "MVP Design Sprint", spots: 3, format: "In-person" },
  ];

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

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-orange-600 text-white hover:bg-orange-700">Product Innovation</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Product Discovery & MVP Sprints
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Accelerate your product development journey with intensive, hands-on sprints. From idea validation to MVP launch, we help teams build the right product, faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-orange-100 text-orange-800 hover:bg-orange-200">3-5 day sprints</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-orange-100 text-orange-800 hover:bg-orange-200">Hands-on workshops</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-orange-100 text-orange-800 hover:bg-orange-200">Small teams (3-8)</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-orange-600 hover:bg-orange-700" onClick={() => setInterest("book")}>Book a Sprint</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-50" onClick={() => setInterest("learn")}>Learn More</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Rocket className="w-6 h-6 text-orange-600"/>, title: "Rapid Validation", text: "Test ideas in days, not months" },
                { icon: <Zap className="w-6 h-6 text-orange-600"/>, title: "Speed to Market", text: "From concept to MVP in weeks" },
                { icon: <Users2 className="w-6 h-6 text-orange-600"/>, title: "User-Centered", text: "Build what customers actually want" },
                { icon: <TrendingUp className="w-6 h-6 text-orange-600"/>, title: "Growth Focused", text: "Design for scalability from day one" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-orange-100 hover:border-orange-300 hover:shadow-md transition-all duration-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-gray-800">{item.icon}<CardTitle className="text-base font-medium">{item.title}</CardTitle></div>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600">{item.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Options */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Sprint Options</h2>
        <p className="mt-2 text-gray-600">Choose the sprint that matches your product development stage</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {sprintOptions.map((sprint, i) => (
            <Card key={i} className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedSprint(sprint.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-orange-200 text-orange-700">{sprint.duration}</Badge>
                  <Badge className="bg-orange-600 text-white">{sprint.price}</Badge>
                </div>
                <CardTitle className="text-lg text-gray-900">{sprint.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3">
                <p>{sprint.description}</p>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Outcomes:</p>
                  <ul className="space-y-1">
                    {sprint.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0"/>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-500">Ideal for: {sprint.idealFor}</p>
                <Button className="w-full rounded-2xl bg-orange-600 hover:bg-orange-700 mt-2">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900">About Our Sprint Methodology</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our Product Discovery and MVP Sprints combine design thinking, lean startup principles, and agile methodologies to help teams move from idea to execution rapidly. Each sprint is facilitated by experienced product strategists and includes hands-on workshops, user research, and collaborative design sessions.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We work with your team to validate assumptions, define user needs, prioritize features, and create actionable plans. By the end of each sprint, you will have clear deliverables and the confidence to move forward with your product development.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge variant="outline" className="px-3 py-1 border-orange-200 text-orange-700 hover:bg-orange-50">Design Thinking</Badge>
              <Badge variant="outline" className="px-3 py-1 border-orange-200 text-orange-700 hover:bg-orange-50">Lean Startup</Badge>
              <Badge variant="outline" className="px-3 py-1 border-orange-200 text-orange-700 hover:bg-orange-50">User Research</Badge>
              <Badge variant="outline" className="px-3 py-1 border-orange-200 text-orange-700 hover:bg-orange-50">Rapid Prototyping</Badge>
            </div>
            <div className="mt-6">
              <Button className="rounded-2xl bg-orange-600 hover:bg-orange-700" onClick={() => setInterest("methodology")}>View Methodology</Button>
            </div>
          </div>
          <Card className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2"><Code className="w-5 h-5 text-orange-600"/><CardTitle className="text-lg text-gray-900">What You Get</CardTitle></div>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-orange-600"/>Expert facilitation</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-orange-600"/>Customized workshop materials</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-orange-600"/>Digital deliverables</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-orange-600"/>Post-sprint support</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-orange-600"/>Team training resources</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Sprints */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Upcoming Sprints</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {upcomingSprints.map((sprint, i) => (
            <Card key={i} className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedSprint(sprint.type)}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-5 h-5 text-orange-600"/>
                    <div>
                      <p className="font-medium text-gray-900">{sprint.type}</p>
                      <p className="text-sm text-gray-600">{sprint.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs border-orange-200 text-orange-700 mb-1">{sprint.format}</Badge>
                    <p className="text-xs text-gray-500">{sprint.spots} spots left</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-orange-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-orange-50">
          <div className="flex items-center gap-3 text-gray-800">
            <CalendarDays className="w-5 h-5 text-orange-600"/>
            <p className="text-sm leading-relaxed">Custom sprint dates available for teams. Contact us to schedule a dedicated session for your organization.</p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-orange-600 hover:bg-orange-700" onClick={() => setInterest("custom")}>Book Custom Sprint</Button>
            <Button variant="outline" className="rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-50" onClick={() => setInterest("calendar")}>View Calendar</Button>
          </div>
        </div>
      </section>

      {/* Sprint Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">How Our Sprints Work</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Target className="w-5 h-5 text-orange-600"/><CardTitle className="text-lg text-gray-900">Preparation</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Stakeholder interviews</p>
              <p>• Current state assessment</p>
              <p>• Goal definition</p>
              <p>• Team alignment</p>
              <p>• Resource planning</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-orange-600"/><CardTitle className="text-lg text-gray-900">Execution</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Facilitated workshops</p>
              <p>• User research sessions</p>
              <p>• Collaborative design</p>
              <p>• Rapid prototyping</p>
              <p>• Iterative feedback</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-orange-600"/><CardTitle className="text-lg text-gray-900">Delivery</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Comprehensive deliverables</p>
              <p>• Action roadmap</p>
              <p>• Team presentation</p>
              <p>• Success metrics</p>
              <p>• Next steps planning</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-orange-600"/><CardTitle className="text-lg text-gray-900">Who Should Participate</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Product managers and owners</p>
              <p>• UX/UI designers and researchers</p>
              <p>• Developers and engineers</p>
              <p>• Business stakeholders</p>
              <p>• Marketing and sales representatives</p>
              <p>• Executive sponsors and decision-makers</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Video className="w-5 h-5 text-orange-600"/><CardTitle className="text-lg text-gray-900">Tools and Environment</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Collaborative digital whiteboards</p>
              <p>• Prototyping and design tools</p>
              <p>• Project management software</p>
              <p>• User testing platforms</p>
              <p>• Documentation and sharing tools</p>
              <p>• Video conferencing for remote teams</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Success Stories</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              company: "FinTech Startup",
              sprint: "Discovery Sprint",
              result: "Validated MVP concept and secured $2M funding",
              timeline: "3 weeks from idea to pitch"
            },
            {
              company: "SaaS Company",
              sprint: "MVP Design Sprint",
              result: "Launched product with 40% faster development",
              timeline: "Reduced time to market by 6 months"
            },
            {
              company: "E-commerce Platform",
              sprint: "Growth Sprint",
              result: "Increased user retention by 65%",
              timeline: "Implemented in 8 weeks"
            }
          ].map((story, i) => (
            <Card key={i} className="rounded-2xl border-orange-200 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-gray-900">{story.company}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">{story.sprint}</Badge>
                <p className="font-medium text-gray-900">{story.result}</p>
                <p className="text-xs text-gray-500">{story.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-orange-200 bg-gradient-to-br from-orange-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Ready to Accelerate Your Product?</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">Transform your product ideas into reality with our intensive, hands-on sprints. Whether you are validating a new concept or optimizing an existing product, we have the right sprint for your team.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>No long-term commitments required</li>
                  <li>Customizable to your specific needs</li>
                  <li>Experienced facilitation and guidance</li>
                  <li>Measurable outcomes and deliverables</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-orange-200 p-4 bg-orange-50">
                <p className="text-sm font-medium text-gray-900">Getting Started</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Schedule a free consultation call</li>
                  <li>Discuss your product goals and challenges</li>
                  <li>Choose the right sprint format</li>
                  <li>Book your sprint dates and prepare your team</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-orange-600 hover:bg-orange-700" onClick={() => setInterest("consultation")}>Free Consultation</Button>
              <Button variant="outline" className="rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-50" onClick={() => setInterest("contact")}>Contact Us</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}