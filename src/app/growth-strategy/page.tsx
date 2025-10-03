"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake, Calculator, TrendingDown, Activity, Zap, Cog, Gauge, ArrowUp, Rocket, Navigation, Sprout } from "lucide-react";

export default function GrowthStrategy() {
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
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600" onClick={() => window.location.href = '/commercial-due-diligence'}>Due Diligence</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-green-600" onClick={() => window.location.href = '/market-analysis'}>Market Analysis</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-indigo-600" onClick={() => window.location.href = '/strategic-advisory'}>Strategic Advisory</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-red-600" onClick={() => window.location.href = '/financial-modeling'}>Financial</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-yellow-600" onClick={() => window.location.href = '/operational-excellence'}>Operations</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-pink-600" onClick={() => window.location.href = '/growth-strategy'}>Growth</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-pink-600 text-white hover:bg-pink-700">Growth Acceleration</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Growth Strategy & Business Expansion
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Accelerate your business growth with data-driven strategies, market expansion, and scalable business models. Our comprehensive approach ensures sustainable success.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-pink-100 text-pink-800 hover:bg-pink-200">4-12 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-pink-100 text-pink-800 hover:bg-pink-200">Market expansion</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-pink-100 text-pink-800 hover:bg-pink-200">Revenue growth</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-pink-600 hover:bg-pink-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-pink-600 text-pink-600 hover:bg-pink-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-pink-600 text-pink-600 hover:bg-pink-50" onClick={() => window.open('/api/one-pagers/GROWTH_STRATEGY_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Rocket className="w-6 h-6 text-pink-600"/>, title: "Rapid Growth", text: "Accelerate business expansion" },
                { icon: <Navigation className="w-6 h-6 text-pink-600"/>, title: "Strategic Direction", text: "Clear path to success" },
                { icon: <Sprout className="w-6 h-6 text-pink-600"/>, title: "Sustainable Scaling", text: "Build for long-term success" },
                { icon: <TrendingUp className="w-6 h-6 text-pink-600"/>, title: "Data-Driven", text: "Metrics-based decision making" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-pink-100 hover:border-pink-300 hover:shadow-md transition-all duration-200">
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

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-pink-200 bg-gradient-to-br from-pink-50 to-white">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Accelerate Your Growth</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">Ready to accelerate your growth with data-driven strategies? Our growth expertise delivers sustainable results.</p>
              </div>
              <div className="rounded-2xl border border-pink-200 p-4 bg-pink-50">
                <p className="text-sm font-medium text-gray-900">Get Started</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Schedule a growth consultation</li>
                  <li>Receive customized growth strategy</li>
                  <li>Start implementing growth initiatives</li>
                  <li>Achieve measurable business results</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-pink-600 hover:bg-pink-700" onClick={() => setInterest("start")}>Start Growth</Button>
              <Button variant="outline" className="rounded-2xl border-pink-600 text-pink-600 hover:bg-pink-50" onClick={() => setInterest("contact")}>Contact Us</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}