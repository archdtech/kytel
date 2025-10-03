"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake } from "lucide-react";

export default function StrategicAdvisory() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const advisoryServices = [
    {
      title: "Business Strategy Development",
      description: "Comprehensive strategic planning to define vision, mission, and actionable roadmap for sustainable growth",
      duration: "4-6 weeks",
      price: "Custom pricing",
      deliverables: ["Strategic plan document", "Vision and mission framework", "Goal setting framework", "Implementation roadmap"]
    },
    {
      title: "Organizational Design",
      description: "Optimize organizational structure, roles, and processes to enhance efficiency and effectiveness",
      duration: "3-5 weeks", 
      price: "Custom pricing",
      deliverables: ["Organizational assessment", "Structure redesign", "Role definitions", "Process optimization"]
    },
    {
      title: "Change Management",
      description: "Guide organizations through transformation initiatives with structured change management approaches",
      duration: "6-12 weeks",
      price: "Custom pricing", 
      deliverables: ["Change strategy", "Communication plan", "Training programs", "Success metrics"]
    },
    {
      title: "Performance Optimization",
      description: "Enhance organizational and individual performance through targeted improvement initiatives",
      duration: "4-8 weeks",
      price: "Custom pricing",
      deliverables: ["Performance assessment", "Improvement roadmap", "KPI framework", "Monitoring system"]
    }
  ];

  const clientSuccess = [
    {
      company: "Fortune 500 Company",
      challenge: "Stagnant growth and market share decline",
      solution: "Comprehensive business strategy redesign and organizational restructuring",
      outcome: "Achieved 15% revenue growth and regained market leadership within 18 months",
      timeline: "6-month engagement"
    },
    {
      company: "Mid-sized Technology Firm", 
      challenge: "Rapid growth causing operational inefficiencies",
      solution: "Organizational redesign and process optimization",
      outcome: "Improved operational efficiency by 30%, reduced costs by 20%, maintained growth trajectory",
      timeline: "4-month engagement"
    },
    {
      company: "Family-owned Business",
      challenge: "Succession planning and modernization",
      solution: "Strategic advisory for transition and business transformation",
      outcome: "Successful leadership transition, 40% revenue increase, modernized operations",
      timeline: "8-month engagement"
    }
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
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600" onClick={() => window.location.href = '/commercial-due-diligence'}>Due Diligence</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-green-600" onClick={() => window.location.href = '/market-analysis'}>Market Analysis</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-indigo-600" onClick={() => window.location.href = '/strategic-advisory'}>Strategic Advisory</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-indigo-600 text-white hover:bg-indigo-700">Strategic Guidance</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Strategic Advisory
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Expert guidance on business strategy, operational improvement, and organizational development. Our advisory services help leaders navigate complex challenges and drive sustainable growth through strategic insights and practical solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">4-12 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Business transformation</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Leadership development</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-indigo-600 hover:bg-indigo-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-50" onClick={() => window.open('/api/one-pagers/STRATEGIC_ADVISORY_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Lightbulb className="w-6 h-6 text-indigo-600"/>, title: "Strategic Insight", text: "Clear vision and direction" },
                { icon: <Settings className="w-6 h-6 text-indigo-600"/>, title: "Operational Excellence", text: "Optimized processes and structure" },
                { icon: <Award className="w-6 h-6 text-indigo-600"/>, title: "Performance Growth", text: "Sustainable business results" },
                { icon: <Handshake className="w-6 h-6 text-indigo-600"/>, title: "Partnership Approach", text: "Collaborative success journey" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all duration-200">
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

      {/* Services Overview */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Advisory Services</h2>
        <p className="mt-2 text-gray-600">Comprehensive strategic guidance to address your most critical business challenges</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {advisoryServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-indigo-200 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-indigo-200 text-indigo-700">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-indigo-600">{service.price}</span>
                  <Button className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advisory Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Our Advisory Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Assessment",
              description: "Comprehensive evaluation of current state, challenges, and opportunities"
            },
            {
              step: "02", 
              title: "Strategy",
              description: "Develop tailored strategic recommendations and action plans"
            },
            {
              step: "03",
              title: "Implementation",
              description: "Support execution of initiatives with hands-on guidance"
            },
            {
              step: "04",
              title: "Optimization",
              description: "Monitor results and continuously refine strategies for maximum impact"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-indigo-200 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Client Success Stories</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {clientSuccess.map((story, i) => (
            <Card key={i} className="rounded-2xl border-indigo-200 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-indigo-600"/>
                  <CardTitle className="text-base text-gray-900">{story.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <p className="font-medium text-red-600">Challenge: {story.challenge}</p>
                <p className="text-indigo-600">Solution: {story.solution}</p>
                <p className="font-medium text-green-600">{story.outcome}</p>
                <p className="text-xs text-gray-500">{story.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Focus Areas */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Focus Areas</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-indigo-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><TargetIcon className="w-5 h-5 text-indigo-600"/><CardTitle className="text-lg text-gray-900">Business Strategy</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Strategic planning and visioning</p>
              <p>• Market positioning and differentiation</p>
              <p>• Growth strategy development</p>
              <p>• Competitive advantage creation</p>
              <p>• Business model innovation</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-indigo-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users2 className="w-5 h-5 text-indigo-600"/><CardTitle className="text-lg text-gray-900">Organizational Development</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Organizational design and structure</p>
              <p>• Leadership development and coaching</p>
              <p>• Team effectiveness and collaboration</p>
              <p>• Culture transformation</p>
              <p>• Talent management strategy</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-indigo-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-indigo-600"/><CardTitle className="text-lg text-gray-900">Operational Excellence</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Process optimization and redesign</p>
              <p>• Performance management systems</p>
              <p>• Change management and transformation</p>
              <p>• Quality improvement initiatives</p>
              <p>• Cost optimization strategies</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">What You Receive</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-indigo-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><FileText className="w-5 h-5 text-indigo-600"/><CardTitle className="text-lg text-gray-900">Strategic Deliverables</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Comprehensive strategic plan</p>
              <p>• Detailed implementation roadmap</p>
              <p>• Performance metrics framework</p>
              <p>• Risk assessment and mitigation</p>
              <p>• Stakeholder communication plan</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-indigo-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-indigo-600"/><CardTitle className="text-lg text-gray-900">Ongoing Support</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Executive coaching and mentoring</p>
              <p>• Regular progress reviews</p>
              <p>• Strategy refinement sessions</p>
              <p>• Team training and development</p>
              <p>• Long-term partnership approach</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-indigo-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-indigo-50">
          <div className="flex items-center gap-3 text-gray-800">
            <CalendarDays className="w-5 h-5 text-indigo-600"/>
            <p className="text-sm leading-relaxed">Ready to transform your business with strategic guidance? Our advisory services provide the expertise you need.</p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-indigo-600 hover:bg-indigo-700" onClick={() => setInterest("start")}>Start Advisory</Button>
            <Button variant="outline" className="rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-50" onClick={() => setInterest("contact")}>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Transform Your Business</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">Our strategic advisory services provide the expertise and guidance needed to navigate complex business challenges and achieve sustainable growth through strategic thinking and practical implementation.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Experienced advisors with diverse industry expertise</li>
                  <li>Customized solutions tailored to your specific needs</li>
                  <li>Hands-on implementation support</li>
                  <li>Measurable results and continuous improvement</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-indigo-200 p-4 bg-indigo-50">
                <p className="text-sm font-medium text-gray-900">Advisory Approach</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Collaborative partnership model</li>
                  <li>Data-driven decision making</li>
                  <li>Stakeholder alignment and engagement</li>
                  <li>Agile and adaptive methodology</li>
                  <li>Focus on sustainable results</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-indigo-600 hover:bg-indigo-700" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button variant="outline" className="rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-50" onClick={() => setInterest("learn")}>Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}