"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake, Calculator, TrendingDown, Activity, Zap, Cog, Gauge, ArrowUp } from "lucide-react";

export default function OperationalExcellence() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const excellenceServices = [
    {
      title: "Process Optimization",
      description: "Streamline business processes to eliminate waste, reduce costs, and improve efficiency across your organization",
      duration: "4-6 weeks",
      price: "Custom pricing",
      deliverables: ["Process mapping", "Bottleneck identification", "Optimization roadmap", "Implementation plan"]
    },
    {
      title: "Performance Management",
      description: "Implement comprehensive performance management systems to drive accountability and continuous improvement",
      duration: "6-8 weeks", 
      price: "Custom pricing",
      deliverables: ["KPI framework", "Performance dashboards", "Reporting systems", "Improvement methodologies"]
    },
    {
      title: "Quality Management",
      description: "Develop and implement quality management systems to ensure consistent product/service delivery",
      duration: "8-12 weeks",
      price: "Custom pricing", 
      deliverables: ["Quality standards", "Control systems", "Audit frameworks", "Continuous improvement programs"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize end-to-end supply chain processes to improve efficiency, reduce costs, and enhance resilience",
      duration: "6-10 weeks",
      price: "Custom pricing",
      deliverables: ["Supply chain assessment", "Network optimization", "Inventory strategy", "Risk mitigation plan"]
    }
  ];

  const successStories = [
    {
      company: "Manufacturing Company",
      challenge: "High production costs and quality issues",
      solution: "Comprehensive process optimization and quality management implementation",
      outcome: "Reduced production costs by 28%, improved quality metrics by 45%, increased throughput by 35%",
      timeline: "12-week engagement"
    },
    {
      company: "Healthcare Provider", 
      challenge: "Inefficient patient flow and long wait times",
      solution: "Process reengineering and performance management system implementation",
      outcome: "Reduced patient wait times by 60%, improved staff productivity by 25%, increased patient satisfaction by 40%",
      timeline: "10-week engagement"
    },
    {
      company: "Retail Chain",
      challenge: "Supply chain inefficiencies and high inventory costs",
      solution: "Supply chain optimization and inventory management system redesign",
      outcome: "Reduced inventory costs by 32%, improved on-time delivery to 98%, increased supply chain resilience",
      timeline: "14-week engagement"
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
            <Button variant="ghost" className="text-gray-600 hover:text-red-600" onClick={() => window.location.href = '/financial-modeling'}>Financial Modeling</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-yellow-600" onClick={() => window.location.href = '/operational-excellence'}>Operational Excellence</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-yellow-600 text-white hover:bg-yellow-700">Process Improvement</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Operational Excellence
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Process optimization and performance improvement initiatives to drive efficiency. Our operational excellence services help organizations streamline processes, reduce costs, and enhance performance across all business functions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">4-12 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Process optimization</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Performance improvement</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-yellow-600 hover:bg-yellow-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-50" onClick={() => window.open('/api/one-pagers/OPERATIONAL_EXCELLENCE_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Zap className="w-6 h-6 text-yellow-600"/>, title: "Efficiency", text: "Streamlined processes" },
                { icon: <Gauge className="w-6 h-6 text-yellow-600"/>, title: "Performance", text: "Measurable improvements" },
                { icon: <Cog className="w-6 h-6 text-yellow-600"/>, title: "Optimization", text: "Cost reduction focus" },
                { icon: <ArrowUp className="w-6 h-6 text-yellow-600"/>, title: "Growth", text: "Sustainable scalability" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-yellow-100 hover:border-yellow-300 hover:shadow-md transition-all duration-200">
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
        <h2 className="text-2xl font-semibold text-gray-900">Excellence Services</h2>
        <p className="mt-2 text-gray-600">Comprehensive operational improvement solutions to drive efficiency and performance</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {excellenceServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-yellow-200 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-yellow-200 text-yellow-700">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-yellow-600">{service.price}</span>
                  <Button className="rounded-2xl bg-yellow-600 hover:bg-yellow-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Excellence Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Our Excellence Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Assessment",
              description: "Comprehensive evaluation of current operations and identification of improvement opportunities"
            },
            {
              step: "02", 
              title: "Design",
              description: "Develop optimized processes and performance management systems"
            },
            {
              step: "03",
              title: "Implementation",
              description: "Execute improvement initiatives with change management support"
            },
            {
              step: "04",
              title: "Sustain",
              description: "Establish monitoring systems and continuous improvement culture"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-yellow-200 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Success Stories</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {successStories.map((story, i) => (
            <Card key={i} className="rounded-2xl border-yellow-200 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-yellow-600"/>
                  <CardTitle className="text-base text-gray-900">{story.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <p className="font-medium text-red-600">Challenge: {story.challenge}</p>
                <p className="text-yellow-600">Solution: {story.solution}</p>
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
          <Card className="rounded-2xl border-yellow-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Settings className="w-5 h-5 text-yellow-600"/><CardTitle className="text-lg text-gray-900">Process Design</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Business process reengineering</p>
              <p>• Workflow optimization</p>
              <p>• Standardization initiatives</p>
              <p>• Automation opportunities</p>
              <p>• Bottleneck elimination</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-yellow-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-yellow-600"/><CardTitle className="text-lg text-gray-900">Performance Management</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• KPI development and tracking</p>
              <p>• Performance dashboards</p>
              <p>• Benchmarking analysis</p>
              <p>• Continuous improvement</p>
              <p>• Employee engagement</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-yellow-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Award className="w-5 h-5 text-yellow-600"/><CardTitle className="text-lg text-gray-900">Quality Systems</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Quality management systems</p>
              <p>• Six Sigma methodologies</p>
              <p>• Lean implementation</p>
              <p>• Root cause analysis</p>
              <p>• Statistical process control</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">What You Receive</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-yellow-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><FileText className="w-5 h-5 text-yellow-600"/><CardTitle className="text-lg text-gray-900">Implementation Deliverables</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Detailed process documentation</p>
              <p>• Performance measurement systems</p>
              <p>• Training materials and programs</p>
              <p>• Change management plans</p>
              <p>• ROI analysis and business case</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-yellow-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-yellow-600"/><CardTitle className="text-lg text-gray-900">Ongoing Support</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Implementation coaching</p>
              <p>• Progress monitoring and reporting</p>
              <p>• Team training and development</p>
              <p>• Continuous improvement guidance</p>
              <p>• Long-term partnership support</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-yellow-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-yellow-50">
          <div className="flex items-center gap-3 text-gray-800">
            <CalendarDays className="w-5 h-5 text-yellow-600"/>
            <p className="text-sm leading-relaxed">Ready to optimize your operations and drive performance improvements? Our excellence programs deliver measurable results.</p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-yellow-600 hover:bg-yellow-700" onClick={() => setInterest("start")}>Start Excellence</Button>
            <Button variant="outline" className="rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-50" onClick={() => setInterest("contact")}>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Drive Operational Excellence</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">Our operational excellence services provide the methodologies, tools, and expertise needed to transform your operations, reduce costs, and build a culture of continuous improvement.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Proven methodologies including Lean, Six Sigma, and BPM</li>
                  <li>Customized solutions for your specific industry and challenges</li>
                  <li>Hands-on implementation support and training</li>
                  <li>Measurable results and sustainable improvements</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-yellow-200 p-4 bg-yellow-50">
                <p className="text-sm font-medium text-gray-900">Methodologies</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Lean Manufacturing and Services</li>
                  <li>Six Sigma DMAIC methodology</li>
                  <li>Business Process Management (BPM)</li>
                  <li>Total Quality Management (TQM)</li>
                  <li>Continuous Improvement (Kaizen)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-yellow-600 hover:bg-yellow-700" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button variant="outline" className="rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-50" onClick={() => setInterest("learn")}>Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}