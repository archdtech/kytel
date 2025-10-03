"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle } from "lucide-react";

export default function CommercialDueDiligence() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const dueDiligenceServices = [
    {
      title: "Target Company Analysis",
      description: "Comprehensive assessment of target company's business model, market position, and competitive landscape",
      duration: "2-3 weeks",
      price: "Custom pricing",
      deliverables: ["Business model assessment", "Market position analysis", "Competitive landscape mapping", "SWOT analysis"]
    },
    {
      title: "Financial Due Diligence",
      description: "In-depth analysis of financial statements, projections, and key performance indicators",
      duration: "2-4 weeks", 
      price: "Custom pricing",
      deliverables: ["Financial statement analysis", "Quality of earnings assessment", "Working capital analysis", "Debt and liability review"]
    },
    {
      title: "Operational Due Diligence",
      description: "Evaluation of operational efficiency, processes, and organizational structure",
      duration: "2-3 weeks",
      price: "Custom pricing", 
      deliverables: ["Operational efficiency assessment", "Process optimization opportunities", "Organizational structure review", "Risk identification"]
    },
    {
      title: "Market Due Diligence",
      description: "Analysis of market dynamics, customer base, and growth potential",
      duration: "2-3 weeks",
      price: "Custom pricing",
      deliverables: ["Market size and growth analysis", "Customer base assessment", "Competitive positioning", "Growth opportunity identification"]
    }
  ];

  const caseStudies = [
    {
      company: "Private Equity Firm",
      deal: "Tech Company Acquisition",
      value: "$250M",
      outcome: "Identified 15% value preservation opportunities through operational improvements",
      timeline: "4-week engagement"
    },
    {
      company: "Corporate Development Team", 
      deal: "Strategic Acquisition",
      value: "$180M",
      outcome: "Uncovered market positioning risks that led to 20% price renegotiation",
      timeline: "3-week engagement"
    },
    {
      company: "Venture Capital Fund",
      deal: "Series B Investment",
      value: "$50M",
      outcome: "Validated unit economics and growth trajectory, confirming investment thesis",
      timeline: "2-week engagement"
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
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700">Investment Advisory</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Commercial Due Diligence
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Comprehensive analysis of target companies to inform investment decisions and M&A strategies. Our thorough due diligence process uncovers critical insights that drive successful transactions and protect investor value.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200">2-4 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200">M&A transactions</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200">Investment decisions</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-blue-600 hover:bg-blue-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => window.open('/api/one-pagers/COMMERCIAL_DUE_DILIGENCE_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search className="w-6 h-6 text-blue-600"/>, title: "Deep Analysis", text: "Uncover hidden risks and opportunities" },
                { icon: <Eye className="w-6 h-6 text-blue-600"/>, title: "Risk Mitigation", text: "Protect investment value" },
                { icon: <TrendingUp className="w-6 h-6 text-blue-600"/>, title: "Value Creation", text: "Identify growth levers" },
                { icon: <Building2 className="w-6 h-6 text-blue-600"/>, title: "Strategic Insight", text: "Inform M&A decisions" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200">
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
        <h2 className="text-2xl font-semibold text-gray-900">Due Diligence Services</h2>
        <p className="mt-2 text-gray-600">Comprehensive analysis across all critical dimensions of target companies</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {dueDiligenceServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-blue-200 text-blue-700">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-blue-600">{service.price}</span>
                  <Button className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Our Due Diligence Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Scoping & Planning",
              description: "Define objectives, scope, and timeline based on transaction requirements"
            },
            {
              step: "02", 
              title: "Data Collection",
              description: "Gather financial, operational, market, and organizational data"
            },
            {
              step: "03",
              title: "Analysis & Validation",
              description: "Conduct thorough analysis and validate findings with management"
            },
            {
              step: "04",
              title: "Reporting & Recommendations",
              description: "Deliver comprehensive report with actionable insights and recommendations"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-blue-200 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Engagements</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Card key={i} className="rounded-2xl border-blue-200 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600"/>
                  <CardTitle className="text-base text-gray-900">{study.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <p className="font-medium">{study.deal}</p>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-blue-600"/>
                  <span className="font-medium">{study.value}</span>
                </div>
                <p className="text-blue-600 font-medium">{study.outcome}</p>
                <p className="text-xs text-gray-500">{study.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Key Focus Areas</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-blue-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-blue-600"/><CardTitle className="text-lg text-gray-900">Financial Analysis</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Revenue quality and sustainability</p>
              <p>• Cost structure optimization</p>
              <p>• Working capital efficiency</p>
              <p>• Debt and liability assessment</p>
              <p>• Financial forecasting accuracy</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-blue-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users2 className="w-5 h-5 text-blue-600"/><CardTitle className="text-lg text-gray-900">Market Assessment</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Market size and growth dynamics</p>
              <p>• Competitive positioning</p>
              <p>• Customer concentration risk</p>
              <p>• Market share analysis</p>
              <p>• Growth opportunity identification</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-blue-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-blue-600"/><CardTitle className="text-lg text-gray-900">Risk Identification</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Operational risk assessment</p>
              <p>• Regulatory compliance review</p>
              <p>• Key person dependency</p>
              <p>• Technology and cybersecurity</p>
              <p>• Environmental and social risks</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">What You Receive</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-blue-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><FileText className="w-5 h-5 text-blue-600"/><CardTitle className="text-lg text-gray-900">Comprehensive Report</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Executive summary with key findings</p>
              <p>• Detailed analysis of each focus area</p>
              <p>• Risk assessment and mitigation strategies</p>
              <p>• Value creation opportunities</p>
              <p>• Recommendations and next steps</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-blue-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-blue-600"/><CardTitle className="text-lg text-gray-900">Presentation & Support</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Stakeholder presentation</p>
              <p>• Q&A session with leadership team</p>
              <p>• Integration planning support</p>
              <p>• Post-transaction follow-up</p>
              <p>• Ongoing advisory relationship</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-blue-50">
          <div className="flex items-center gap-3 text-gray-800">
            <CalendarDays className="w-5 h-5 text-blue-600"/>
            <p className="text-sm leading-relaxed">Ready to proceed with confidence? Our due diligence services provide the insights you need for successful investment decisions.</p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-blue-600 hover:bg-blue-700" onClick={() => setInterest("start")}>Start Due Diligence</Button>
            <Button variant="outline" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => setInterest("contact")}>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Protect Your Investment</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">Our commercial due diligence services provide the critical insights needed to make informed investment decisions and mitigate risks in M&A transactions.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Comprehensive analysis across all business dimensions</li>
                  <li>Experienced team with M&A and investment expertise</li>
                  <li>Actionable insights and recommendations</li>
                  <li>Flexible engagement models tailored to your needs</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 p-4 bg-blue-50">
                <p className="text-sm font-medium text-gray-900">Engagement Process</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Initial consultation and scope definition</li>
                  <li>Data collection and information gathering</li>
                  <li>Comprehensive analysis and validation</li>
                  <li>Report delivery and stakeholder presentation</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-blue-600 hover:bg-blue-700" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button variant="outline" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => setInterest("learn")}>Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}