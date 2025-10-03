"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Brain, Mic, Laptop, CalendarDays, Shield, TrendingUp, BookOpen, RefreshCw, Lightbulb, Network } from "lucide-react";

export default function BusinessMastermind() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  const upcomingSessions = [
    { date: "March 15, 2024", time: "2:00 PM - 4:00 PM GST", topic: "Scaling in the AI Era", spots: 8 },
    { date: "April 12, 2024", time: "2:00 PM - 4:00 PM GST", topic: "Future of Work and Remote Teams", spots: 12 },
    { date: "May 10, 2024", time: "2:00 PM - 4:00 PM GST", topic: "Sustainable Business Models", spots: 15 },
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
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-teal-600 text-white hover:bg-teal-700">Business ThinkTank</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Business Mastermind: Collective Intelligence for Modern Leaders
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Join a curated community of forward-thinking business leaders in our recurring thinkTank sessions. Leverage collective intelligence to solve challenges, identify opportunities, and accelerate growth in an era of rapid transformation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-teal-100 text-teal-800 hover:bg-teal-200">2 hours monthly</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-teal-100 text-teal-800 hover:bg-teal-200">Executives and Founders</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-teal-100 text-teal-800 hover:bg-teal-200">Limited to 20 participants</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-teal-600 hover:bg-teal-700" onClick={() => setInterest("join")}>Join ThinkTank</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-teal-600 text-teal-600 hover:bg-teal-50" onClick={() => setInterest("schedule")}>View Schedule</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Brain className="w-6 h-6 text-teal-600"/>, title: "Collective Intelligence", text: "Leverage diverse perspectives" },
                { icon: <TrendingUp className="w-6 h-6 text-teal-600"/>, title: "Growth Acceleration", text: "Actionable insights and strategies" },
                { icon: <Network className="w-6 h-6 text-teal-600"/>, title: "Strategic Connections", text: "Build meaningful relationships" },
                { icon: <Lightbulb className="w-6 h-6 text-teal-600"/>, title: "Innovation Lab", text: "Test ideas in a safe environment" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-teal-100 hover:border-teal-300 hover:shadow-md transition-all duration-200">
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

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900">About the ThinkTank</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our Business Mastermind ThinkTank brings together curated groups of CEOs, founders, and senior executives for monthly facilitated sessions. Each meeting combines structured problem-solving, open dialogue, and peer mentoring to tackle real business challenges and opportunities.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Unlike traditional networking events, our ThinkTank focuses on actionable outcomes, accountability, and building lasting professional relationships that drive measurable business results.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge variant="outline" className="px-3 py-1 border-teal-200 text-teal-700 hover:bg-teal-50">Peer Mentoring</Badge>
              <Badge variant="outline" className="px-3 py-1 border-teal-200 text-teal-700 hover:bg-teal-50">Strategic Planning</Badge>
              <Badge variant="outline" className="px-3 py-1 border-teal-200 text-teal-700 hover:bg-teal-50">Problem Solving</Badge>
              <Badge variant="outline" className="px-3 py-1 border-teal-200 text-teal-700 hover:bg-teal-50">Innovation</Badge>
            </div>
            <div className="mt-6">
              <Button className="rounded-2xl bg-teal-600 hover:bg-teal-700" onClick={() => setInterest("learn")}>Learn More</Button>
            </div>
          </div>
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2"><RefreshCw className="w-5 h-5 text-teal-600"/><CardTitle className="text-lg text-gray-900">Recurring Format</CardTitle></div>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-teal-600"/>Monthly sessions (2nd Friday)</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-teal-600"/>Hybrid attendance options</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-teal-600"/>Private online community</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-teal-600"/>Resource library access</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Upcoming Sessions</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {upcomingSessions.map((session, i) => (
            <Card key={i} className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedSession(session.date)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CalendarDays className="w-5 h-5 text-teal-600"/>
                  <Badge variant="outline" className="text-xs border-teal-200 text-teal-700">{session.spots} spots left</Badge>
                </div>
                <CardTitle className="text-base text-gray-900">{session.topic}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <p className="font-medium">{session.date}</p>
                <p>{session.time}</p>
                <p className="text-xs text-gray-500 mt-2">Virtual and In-person options</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-teal-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-teal-50">
          <div className="flex items-center gap-3 text-gray-800">
            <CalendarDays className="w-5 h-5 text-teal-600"/>
            <p className="text-sm leading-relaxed">Sessions held monthly. Join once or become a member for ongoing access.</p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-teal-600 hover:bg-teal-700" onClick={() => setInterest("register")}>Register for Next Session</Button>
            <Button variant="outline" className="rounded-2xl border-teal-600 text-teal-600 hover:bg-teal-50" onClick={() => setInterest("membership")}>Membership Options</Button>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Session Structure and Benefits</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Target className="w-5 h-5 text-teal-600"/><CardTitle className="text-lg text-gray-900">Outcomes</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Actionable business strategies</p>
              <p>• Expanded professional network</p>
              <p>• Diverse perspective insights</p>
              <p>• Accountability partnerships</p>
              <p>• Access to shared resources</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Clock className="w-5 h-5 text-teal-600"/><CardTitle className="text-lg text-gray-900">Duration</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>2 hours per session including networking.</p>
              <p>Monthly recurring schedule.</p>
              <p>Optional 30-minute pre-session prep.</p>
              <p>Post-session resource sharing.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-teal-600"/><CardTitle className="text-lg text-gray-900">Participants</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>C-level executives and founders</p>
              <p>Senior business leaders</p>
              <p>Industry diverse backgrounds</p>
              <p>Curated for optimal group dynamics</p>
              <p>Maximum 20 participants per session</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-teal-600"/><CardTitle className="text-lg text-gray-900">Session Flow</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>1) Welcome and introductions (15 minutes)</p>
              <p>2) Hot seat challenge presentations (30 minutes)</p>
              <p>3) Group problem-solving and brainstorming (45 minutes)</p>
              <p>4) Action planning and commitments (20 minutes)</p>
              <p>5) Resource sharing and next steps (10 minutes)</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Video className="w-5 h-5 text-teal-600"/><CardTitle className="text-lg text-gray-900">Platform and Tech</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Professional video conferencing platform</p>
              <p>• Collaborative digital whiteboard</p>
              <p>• Session recording and transcripts</p>
              <p>• Private community platform access</p>
              <p>• Resource library and templates</p>
              <p>• Mobile app for on-the-go access</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Membership Options */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Membership Options</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-gray-900">Single Session</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p className="text-2xl font-bold text-teal-600">$299<span className="text-sm font-normal text-gray-600">/session</span></p>
              <p>• Access to one ThinkTank session</p>
              <p>• Session recording and resources</p>
              <p>• One-time networking opportunity</p>
              <Button className="w-full mt-4 rounded-2xl bg-teal-600 hover:bg-teal-700" onClick={() => setInterest("single")}>Book Single Session</Button>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-teal-600 text-white">Most Popular</Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-gray-900">Quarterly Membership</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p className="text-2xl font-bold text-teal-600">$799<span className="text-sm font-normal text-gray-600">/quarter</span></p>
              <p>• 3 ThinkTank sessions</p>
              <p>• Private community access</p>
              <p>• Resource library access</p>
              <p>• Monthly office hours</p>
              <Button className="w-full mt-4 rounded-2xl bg-teal-600 hover:bg-teal-700" onClick={() => setInterest("quarterly")}>Join Quarterly</Button>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-teal-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-gray-900">Annual Membership</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p className="text-2xl font-bold text-teal-600">$2,999<span className="text-sm font-normal text-gray-600">/year</span></p>
              <p>• 12 ThinkTank sessions</p>
              <p>• VIP community access</p>
              <p>• All resources and templates</p>
              <p>• Private mentoring sessions</p>
              <p>• Exclusive events access</p>
              <Button className="w-full mt-4 rounded-2xl bg-teal-600 hover:bg-teal-700" onClick={() => setInterest("annual")}>Join Annual</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-teal-200 bg-gradient-to-br from-teal-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Join the ThinkTank Community</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">Ready to accelerate your business growth through collective intelligence? Apply for membership or register for our next session.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Curated peer groups for optimal dynamics</li>
                  <li>Confidential and trusted environment</li>
                  <li>Flexible attendance options</li>
                  <li>No long-term commitments required</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-teal-200 p-4 bg-teal-50">
                <p className="text-sm font-medium text-gray-900">Getting Started</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Complete the membership application</li>
                  <li>Schedule a brief introduction call</li>
                  <li>Join your first ThinkTank session</li>
                  <li>Start leveraging collective intelligence</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-teal-600 hover:bg-teal-700" onClick={() => setInterest("apply")}>Apply Now</Button>
              <Button variant="outline" className="rounded-2xl border-teal-600 text-teal-600 hover:bg-teal-50" onClick={() => setInterest("contact")}>Contact Us</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}