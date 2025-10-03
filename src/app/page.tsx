"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Wand2, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen } from "lucide-react";

export default function SpeakingWorkshops() {
  const [interest, setInterest] = useState<string | null>(null);

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
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-purple-600 text-white hover:bg-purple-700">Executive Workshop</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              AI for Business Innovation & Operational Efficiency
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              A practical, hands-on session where executives and teams learn to harness AI for strategy, workflow automation, and measurable impact. Aligned with the House of Wisdom vision for future-oriented learning and community development.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200">2-3 hours including Q&A</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200">Adults 16+</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200">Capacity 10-40</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-purple-600 hover:bg-purple-700" onClick={() => setInterest("book")}>Request Booking</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-purple-600 text-purple-600 hover:bg-purple-50" onClick={() => setInterest("download")}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Wand2 className="w-6 h-6 text-purple-600"/>, title: "Use-case Sprint", text: "Map high-ROI AI opportunities" },
                { icon: <BarChart3 className="w-6 h-6 text-purple-600"/>, title: "Impact Math", text: "Time and cost savings model" },
                { icon: <Shield className="w-6 h-6 text-purple-600"/>, title: "Risk and Governance", text: "Policies, controls, guardrails" },
                { icon: <Laptop className="w-6 h-6 text-purple-600"/>, title: "Hands-on Build", text: "Prompt systems and mini copilots" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-200">
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
            <h2 className="text-2xl font-semibold text-gray-900">About Alaa Almallah</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Product Designer and Innovation Strategist with deep experience in web3 and Generative AI. I help founders and leadership teams turn complex ideas into decision maps and scalable systems. Previous talks and workshops span strategy, AI prompt engineering, and product architecture.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge variant="outline" className="px-3 py-1 border-purple-200 text-purple-700 hover:bg-purple-50">Design Systems</Badge>
              <Badge variant="outline" className="px-3 py-1 border-purple-200 text-purple-700 hover:bg-purple-50">AI Product Architecture</Badge>
              <Badge variant="outline" className="px-3 py-1 border-purple-200 text-purple-700 hover:bg-purple-50">Strategy Sprints</Badge>
              <Badge variant="outline" className="px-3 py-1 border-purple-200 text-purple-700 hover:bg-purple-50">Data and Concept Visualization</Badge>
            </div>
            <div className="mt-6">
              <Button className="rounded-2xl bg-purple-600 hover:bg-purple-700" onClick={() => setInterest("about")}>View full About page</Button>
            </div>
          </div>
          <Card className="rounded-2xl border-purple-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2"><Mic className="w-5 h-5 text-purple-600"/><CardTitle className="text-lg text-gray-900">Formats</CardTitle></div>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-purple-600"/>Keynote (30-60 minutes)</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-purple-600"/>Workshop (2-3 hours)</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-purple-600"/>Executive Roundtable (90 minutes)</p>
              <p><CheckCircle className="inline w-4 h-4 mr-2 text-purple-600"/>Private Team Sprint (Half-day)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Workshop: AI for Business - From Idea to ROI</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-purple-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Target className="w-5 h-5 text-purple-600"/><CardTitle className="text-lg text-gray-900">Outcomes</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• AI Opportunity Map for your organization</p>
              <p>• Automation Shortlist (5-7 workflows)</p>
              <p>• 90-day AI Action Plan</p>
              <p>• Risk and governance checklist</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-purple-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Clock className="w-5 h-5 text-purple-600"/><CardTitle className="text-lg text-gray-900">Duration</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>2-3 hours including Q&A and networking break.</p>
              <p>Ideal group size: 10-30 (maximum 40).</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-purple-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-purple-600"/><CardTitle className="text-lg text-gray-900">Audience</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>Executives, managers, founders, and functional leads (Operations, Marketing, Product, Compliance).</p>
              <p>Adult learners 16+; beginner-to-intermediate AI literacy.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-purple-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-purple-600"/><CardTitle className="text-lg text-gray-900">Session Flow</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>1) Orientation: Stakes and opportunities (10 minutes)</p>
              <p>2) AI Landscape for leaders (25 minutes)</p>
              <p>3) Workflow mapping and impact modeling (25 minutes)</p>
              <p>- Break and networking (15 minutes)</p>
              <p>4) Hands-on: Prompt systems and mini-copilot build (40 minutes)</p>
              <p>5) Risk, governance, and change management (20 minutes)</p>
              <p>6) Q&A and Commitments (15 minutes)</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-purple-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Video className="w-5 h-5 text-purple-600"/><CardTitle className="text-lg text-gray-900">Tech and AV</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Projector or LED with HDMI/USB-C input and clicker</p>
              <p>• One handheld or lapel microphone with room audio</p>
              <p>• Reliable Wi-Fi (10 Mbps+ download and upload)</p>
              <p>• Whiteboard or flipchart with markers</p>
              <p>• Power outlets for 10-40 laptops</p>
              <p>• Optional: recording setup (camera and feed)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past & Upcoming */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Past and Upcoming</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {["AI Strategy Sprint (Private)", "Founder Fitness: Prompt Systems", "Decision Map Studio for Startups"].map((title, i) => (
            <Card key={i} className="rounded-2xl border-purple-200 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-1"><CardTitle className="text-base text-gray-900">{title}</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700">
                Visual documentation and testimonials available upon request.
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-purple-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-purple-50">
          <div className="flex items-center gap-3 text-gray-800">
            <CalendarDays className="w-5 h-5 text-purple-600"/>
            <p className="text-sm leading-relaxed">Accepting bookings for Q4 and Q1. On-site (UAE) or virtual delivery available.</p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-purple-600 hover:bg-purple-700" onClick={() => setInterest("book")}>Book a Date</Button>
            <Button variant="outline" className="rounded-2xl border-purple-600 text-purple-600 hover:bg-purple-50" onClick={() => setInterest("contact")}>Contact</Button>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-purple-200 bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Booking and Contact</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">For the House of Wisdom or partner venues, please include preferred dates, audience profile, and any AV constraints.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Delivery: Free to participants; sponsor-supported where possible</li>
                  <li>Accessibility: Step-free access, sound amplification, seating variety</li>
                  <li>Materials: Slides and workbook PDF provided post-event</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-purple-200 p-4 bg-purple-50">
                <p className="text-sm font-medium text-gray-900">AV and Room Checklist</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Display: Projector or LED at 1080p or higher</li>
                  <li>Audio: Microphone and speakers with 3.5mm or HDMI audio</li>
                  <li>Connectivity: Stable Wi-Fi with guest login access</li>
                  <li>Seating: Classroom or U-shape arrangement</li>
                  <li>Whiteboard or flipchart with markers</li>
                  <li>Power: Extension leads for laptop connections</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}