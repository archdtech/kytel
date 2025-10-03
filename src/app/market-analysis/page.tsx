"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass } from "lucide-react";

export default function MarketAnalysis() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const marketAnalysisServices = [
    {
      title: "Market Sizing & Segmentation",
      description: "Comprehensive assessment of market size, growth rates, and customer segmentation to identify total addressable market",
      duration: "2-3 weeks",
      price: "Custom pricing",
      deliverables: ["TAM/SAM/SOM analysis", "Customer segmentation", "Market growth projections", "Geographic analysis"]
    },
    {
      title: "Competitive Intelligence",
      description: "In-depth analysis of competitive landscape, including strengths, weaknesses, and strategic positioning",
      duration: "3-4 weeks", 
      price: "Custom pricing",
      deliverables: ["Competitor profiling", "Market share analysis", "Benchmarking", "Strategic positioning map"]
    },
    {
      title: "Customer Insights",
      description: "Deep understanding of customer needs, preferences, behaviors, and decision-making processes",
      duration: "3-4 weeks",
      price: "Custom pricing", 
      deliverables: ["Customer personas", "Journey mapping", "Voice of customer analysis", "Satisfaction metrics"]
    },
    {
      title: "Industry Trend Analysis",
      description: "Identification and analysis of key industry trends, disruptions, and future outlook",
      duration: "2-3 weeks",
      price: "Custom pricing",
      deliverables: ["Trend identification", "Impact assessment", "Opportunity analysis", "Future outlook report"]
    }
  ];

  const successStories = [
    {
      company: "SaaS Startup",
      challenge: "Unclear market positioning",
      solution: "Comprehensive market segmentation and competitive analysis",
      outcome: "Identified $500M serviceable market, refined positioning, increased conversion by 35%",
      timeline: "4-week engagement"
    },
    {
      company: "Manufacturing Company", 
      challenge: "Entering new geographic markets",
      solution: "Market entry analysis and opportunity assessment",
      outcome: "Successfully entered 3 new markets, achieved 25% revenue growth in first year",
      timeline: "6-week engagement"
    },
    {
      company: "Retail Chain",
      challenge: "Declining market share",
      solution: "Competitive intelligence and customer insights analysis",
      outcome: "Developed new strategy, regained market leadership, increased customer loyalty by 40%",
      timeline: "5-week engagement"
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
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-green-600 text-white hover:bg-green-700">Market Intelligence</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Market Analysis
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              In-depth market research and competitive intelligence to identify growth opportunities. Our comprehensive analysis provides the insights needed to make strategic decisions and gain competitive advantage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-green-100 text-green-800 hover:bg-green-200">2-4 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-green-100 text-green-800 hover:bg-green-200">Growth strategy</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-green-100 text-green-800 hover:bg-green-200">Competitive intelligence</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-green-600 hover:bg-green-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-green-600 text-green-600 hover:bg-green-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-green-600 text-green-600 hover:bg-green-50" onClick={() => window.open('/api/one-pagers/MARKET_ANALYSIS_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Globe className="w-6 h-6 text-green-600"/>, title: "Market Scope", text: "Global and local market insights" },
                { icon: <Compass className="w-6 h-6 text-green-600"/>, title: "Strategic Direction", text: "Data-driven growth strategies" },
                { icon: <TargetIcon className="w-6 h-6 text-green-600"/>, title: "Competitive Edge", text: "Identify untapped opportunities" },
                { icon: <LineChart className="w-6 h-6 text-green-600"/>, title: "Trend Analysis", text: "Future market predictions" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-200">
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
        <h2 className="text-2xl font-semibold text-gray-900">Market Analysis Services</h2>
        <p className="mt-2 text-gray-600">Comprehensive research and analysis to uncover market opportunities and competitive advantages</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {marketAnalysisServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-green-200 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-green-200 text-green-700">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-green-600">{service.price}</span>
                  <Button className="rounded-2xl bg-green-600 hover:bg-green-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Our Research Methodology</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Research Design",
              description: "Define objectives, scope, and research methodology tailored to your needs"
            },
            {
              step: "02", 
              title: "Data Collection",
              description: "Gather primary and secondary data through multiple research methods"
            },
            {
              step: "03",
              title: "Analysis & Synthesis",
              description: "Analyze data patterns and synthesize insights into actionable recommendations"
            },
            {
              step: "04",
              title: "Reporting & Strategy",
              description: "Deliver comprehensive report with strategic implications and action plan"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-green-200 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
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
            <Card key={i} className="rounded-2xl border-green-200 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-green-600"/>
                  <CardTitle className="text-base text-gray-900">{story.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <p className="font-medium text-red-600">Challenge: {story.challenge}</p>
                <p className="text-green-600">Solution: {story.solution}</p>
                <p className="font-medium text-blue-600">{story.outcome}</p>
                <p className="text-xs text-gray-500">{story.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Areas */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Research Areas</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-green-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><PieChart className="w-5 h-5 text-green-600"/><CardTitle className="text-lg text-gray-900">Market Assessment</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Market size and growth analysis</p>
              <p>• Market segmentation and targeting</p>
              <p>• Geographic market analysis</p>
              <p>• Industry trend identification</p>
              <p>• Opportunity sizing and prioritization</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-green-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users2 className="w-5 h-5 text-green-600"/><CardTitle className="text-lg text-gray-900">Customer Intelligence</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Customer persona development</p>
              <p>• Journey mapping and analysis</p>
              <p>• Needs and pain point identification</p>
              <p>• Satisfaction and loyalty metrics</p>
              <p>• Behavioral pattern analysis</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-green-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-green-600"/><CardTitle className="text-lg text-gray-900">Competitive Analysis</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Competitor profiling and benchmarking</p>
              <p>• Market share analysis</p>
              <p>• Strength and weakness assessment</p>
              <p>• Strategic positioning mapping</p>
              <p>• Threat and opportunity analysis</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">What You Receive</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-green-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><FileText className="w-5 h-5 text-green-600"/><CardTitle className="text-lg text-gray-900">Comprehensive Report</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Executive summary with key findings</p>
              <p>• Detailed market analysis and insights</p>
              <p>• Competitive landscape assessment</p>
              <p>• Growth opportunity identification</p>
              <p>• Strategic recommendations</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-green-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-green-600"/><CardTitle className="text-lg text-gray-900">Presentation & Support</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Stakeholder presentation of findings</p>
              <p>• Interactive workshop for strategy development</p>
              <p>• Implementation planning support</p>
              <p>• Ongoing market monitoring framework</p>
              <p>• Quarterly insight reviews</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-green-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-green-50">
          <div className="flex items-center gap-3 text-gray-800">
            <CalendarDays className="w-5 h-5 text-green-600"/>
            <p className="text-sm leading-relaxed">Ready to uncover market opportunities and gain competitive advantage? Our market analysis provides the insights you need.</p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-green-600 hover:bg-green-700" onClick={() => setInterest("start")}>Start Analysis</Button>
            <Button variant="outline" className="rounded-2xl border-green-600 text-green-600 hover:bg-green-50" onClick={() => setInterest("contact")}>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-green-200 bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Gain Market Intelligence</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">Our market analysis services provide the critical insights needed to identify growth opportunities, understand competitive dynamics, and make informed strategic decisions.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Comprehensive primary and secondary research</li>
                  <li>Advanced data analytics and visualization</li>
                  <li>Actionable strategic recommendations</li>
                  <li>Customized research methodologies</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-green-200 p-4 bg-green-50">
                <p className="text-sm font-medium text-gray-900">Research Methods</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Surveys and interviews</li>
                  <li>Focus groups and workshops</li>
                  <li>Competitive benchmarking</li>
                  <li>Data mining and analytics</li>
                  <li>Industry expert consultations</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-green-600 hover:bg-green-700" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button variant="outline" className="rounded-2xl border-green-600 text-green-600 hover:bg-green-50" onClick={() => setInterest("learn")}>Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}