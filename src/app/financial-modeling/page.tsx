"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake, Calculator, TrendingDown, Activity } from "lucide-react";

export default function FinancialModeling() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const modelingServices = [
    {
      title: "Financial Forecasting",
      description: "Develop comprehensive financial projections and forecasts to support strategic planning and investment decisions",
      duration: "2-3 weeks",
      price: "Custom pricing",
      deliverables: ["3-5 year financial projections", "Revenue forecasting models", "Expense analysis", "Cash flow projections"]
    },
    {
      title: "Valuation Analysis",
      description: "Business valuation using multiple methodologies including DCF, comparable company analysis, and precedent transactions",
      duration: "3-4 weeks", 
      price: "Custom pricing",
      deliverables: ["DCF valuation model", "Comparable company analysis", "Precedent transaction analysis", "Valuation report"]
    },
    {
      title: "Scenario & Sensitivity Analysis",
      description: "Model various business scenarios and analyze sensitivity to key drivers to understand risk and opportunity",
      duration: "2-3 weeks",
      price: "Custom pricing", 
      deliverables: ["Base case scenarios", "Optimistic/pessimistic scenarios", "Sensitivity analysis", "Risk assessment"]
    },
    {
      title: "Budgeting & Planning",
      description: "Create detailed budgets and financial plans to support operational execution and performance management",
      duration: "3-5 weeks",
      price: "Custom pricing",
      deliverables: ["Annual operating budget", "Capital expenditure plan", "Departmental budgets", "Variance analysis framework"]
    }
  ];

  const projectExamples = [
    {
      company: "Technology Startup",
      project: "Series A Fundraising",
      challenge: "Needed comprehensive financial model for investor pitch",
      solution: "Built 5-year financial model with multiple scenarios and valuation analysis",
      outcome: "Successfully raised $25M in Series A funding with investor confidence in financial projections",
      timeline: "3-week engagement"
    },
    {
      company: "Manufacturing Company", 
      project: "Acquisition Due Diligence",
      challenge: "Required financial due diligence for potential acquisition",
      solution: "Comprehensive financial analysis, quality of earnings, and valuation assessment",
      outcome: "Informed acquisition decision, identified $5M in synergies, successful deal closure",
      timeline: "4-week engagement"
    },
    {
      company: "Retail Chain",
      project: "Financial Restructuring",
      challenge: "Declining profitability and cash flow pressures",
      solution: "Developed turnaround financial model and scenario analysis",
      outcome: "Implemented cost-saving measures, improved cash flow by 35%, returned to profitability",
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
            <Button variant="ghost" className="text-gray-600 hover:text-indigo-600" onClick={() => window.location.href = '/strategic-advisory'}>Strategic Advisory</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-red-600" onClick={() => window.location.href = '/financial-modeling'}>Financial Modeling</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-red-600 text-white hover:bg-red-700">Financial Analysis</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Financial Modeling
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Sophisticated financial models to support valuation, forecasting, and scenario planning. Our financial modeling services provide the analytical foundation for informed decision-making and strategic planning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-red-100 text-red-800 hover:bg-red-200">2-5 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-red-100 text-red-800 hover:bg-red-200">Valuation support</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-red-100 text-red-800 hover:bg-red-200">Financial planning</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-red-600 hover:bg-red-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-red-600 text-red-600 hover:bg-red-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-red-600 text-red-600 hover:bg-red-50" onClick={() => window.open('/api/one-pagers/FINANCIAL_MODELING_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Calculator className="w-6 h-6 text-red-600"/>, title: "Precision Modeling", text: "Accurate financial projections" },
                { icon: <Activity className="w-6 h-6 text-red-600"/>, title: "Scenario Analysis", text: "Multiple outcome scenarios" },
                { icon: <TrendingUp className="w-6 h-6 text-red-600"/>, title: "Valuation Expertise", text: "Multiple valuation methodologies" },
                { icon: <TrendingDown className="w-6 h-6 text-red-600"/>, title: "Risk Assessment", text: "Comprehensive risk analysis" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-red-100 hover:border-red-300 hover:shadow-md transition-all duration-200">
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
        <h2 className="text-2xl font-semibold text-gray-900">Modeling Services</h2>
        <p className="mt-2 text-gray-600">Comprehensive financial modeling solutions to support your most critical business decisions</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {modelingServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-red-200 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-red-200 text-red-700">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-red-600">{service.price}</span>
                  <Button className="rounded-2xl bg-red-600 hover:bg-red-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modeling Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Our Modeling Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Requirements",
              description: "Define modeling objectives, scope, and key assumptions"
            },
            {
              step: "02", 
              title: "Data Collection",
              description: "Gather historical data and research key drivers"
            },
            {
              step: "03",
              title: "Model Development",
              description: "Build sophisticated financial models with scenario analysis"
            },
            {
              step: "04",
              title: "Validation & Delivery",
              description: "Test assumptions and deliver with training and support"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-red-200 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Examples */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Project Examples</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projectExamples.map((project, i) => (
            <Card key={i} className="rounded-2xl border-red-200 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-red-600"/>
                  <CardTitle className="text-base text-gray-900">{project.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <p className="font-medium text-red-600">{project.project}</p>
                <p className="text-gray-600">Challenge: {project.challenge}</p>
                <p className="text-red-600">Solution: {project.solution}</p>
                <p className="font-medium text-green-600">{project.outcome}</p>
                <p className="text-xs text-gray-500">{project.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modeling Capabilities */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-gray-900">Modeling Capabilities</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-red-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-red-600"/><CardTitle className="text-lg text-gray-900">Forecasting Models</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Revenue growth projections</p>
              <p>• Operating expense forecasting</p>
              <p>• Cash flow modeling</p>
              <p>• Working capital requirements</p>
              <p>• Capital expenditure planning</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-red-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><PieChart className="w-5 h-5 text-red-600"/><CardTitle className="text-lg text-gray-900">Valuation Models</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Discounted Cash Flow (DCF)</p>
              <p>• Comparable company analysis</p>
              <p>• Precedent transactions</p>
              <p>• Leveraged buyout (LBO) models</p>
              <p>• Mergers and acquisitions (M&A)</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-red-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><LineChart className="w-5 h-5 text-red-600"/><CardTitle className="text-lg text-gray-900">Analysis Tools</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Sensitivity analysis</p>
              <p>• Scenario modeling</p>
              <p>• Monte Carlo simulation</p>
              <p>• Break-even analysis</p>
              <p>• Variance analysis</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">What You Receive</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-red-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><FileText className="w-5 h-5 text-red-600"/><CardTitle className="text-lg text-gray-900">Model Deliverables</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Excel financial model with documentation</p>
              <p>• Executive summary of key findings</p>
              <p>• Assumptions documentation</p>
              <p>• Scenario analysis results</p>
              <p>• Presentation deck for stakeholders</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-red-200 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-red-600"/><CardTitle className="text-lg text-gray-900">Support & Training</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Model training for your team</p>
              <p>• Ongoing model maintenance support</p>
              <p>• Quarterly model updates</p>
              <p>• Ad-hoc analysis requests</p>
              <p>• Strategic interpretation sessions</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-red-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-red-50">
          <div className="flex items-center gap-3 text-gray-800">
            <CalendarDays className="w-5 h-5 text-red-600"/>
            <p className="text-sm leading-relaxed">Ready to build sophisticated financial models for better decision-making? Our modeling expertise provides the clarity you need.</p>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl bg-red-600 hover:bg-red-700" onClick={() => setInterest("start")}>Start Modeling</Button>
            <Button variant="outline" className="rounded-2xl border-red-600 text-red-600 hover:bg-red-50" onClick={() => setInterest("contact")}>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-red-200 bg-gradient-to-br from-red-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Build Financial Clarity</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">Our financial modeling services provide the sophisticated analytical foundation needed for strategic decision-making, investor communications, and operational planning.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Experienced financial modelers with diverse industry expertise</li>
                  <li>Customized models tailored to your specific business needs</li>
                  <li>Advanced Excel and financial modeling techniques</li>
                  <li>Focus on practical, actionable insights</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-red-200 p-4 bg-red-50">
                <p className="text-sm font-medium text-gray-900">Technical Expertise</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Advanced Excel modeling and VBA</li>
                  <li>Financial statement modeling</li>
                  <li>Valuation methodology expertise</li>
                  <li>Scenario and sensitivity analysis</li>
                  <li>Data visualization and dashboards</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-red-600 hover:bg-red-700" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button variant="outline" className="rounded-2xl border-red-600 text-red-600 hover:bg-red-50" onClick={() => setInterest("learn")}>Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}