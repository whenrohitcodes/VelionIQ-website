import React from 'react';
import { Target, Users, Layers } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50 section-padding">
      <div className="container-custom space-y-24">

        {/* Our Vision */}
        <section className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-5xl font-display font-bold text-secondary-900">
                Our Vision
              </h2>
            </div>
            <p className="text-xl text-secondary-700 leading-relaxed mb-4">
              VelionIQ is committed to revolutionizing enterprise workflows through a suite of AI-powered tools designed to automate, validate, and optimize key business processes.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Our vision is to empower businesses with smarter, faster, and more accurate decision-making using cutting-edge technologies like OCR, NLP, and GenAI.
            </p>
          </div>
          <div className="relative h-full rounded-3xl overflow-hidden shadow-elegant bg-primary-100 p-10">
            <div className="absolute inset-0 opacity-10 bg-[url('/background-texture.svg')] bg-cover"></div>
            <ul className="relative space-y-5 text-secondary-800 text-lg">
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold">›</span>
                <span>Automate, validate, and optimize workflows</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold">›</span>
                <span>Smarter, faster decision-making</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold">›</span>
                <span>OCR, NLP, GenAI technologies</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Who We Are */}
        <section className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up">
          <div className="relative rounded-3xl bg-white p-10 shadow-elegant border-l-4 border-primary-500">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-5xl font-display font-bold text-secondary-900">Who We Are</h2>
            </div>
            <p className="text-xl text-secondary-700 leading-relaxed mb-4">
              VelionIQ is an innovation driven by a team of seasoned industry veterans with deep expertise in ERP, AI automation, and enterprise-grade technology.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Backed by over two decades of hands-on experience, our leadership has consistently delivered intelligent software solutions to solve real-world manufacturing and operational challenges.
            </p>
          </div>
          <div className="rounded-3xl p-10 bg-gradient-to-br from-primary-50 to-primary-100 shadow-elegant">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">Our Core Strengths</h3>
            <div className="grid grid-cols-1 gap-4 text-secondary-700 text-base">
              <div className="p-4 bg-white shadow rounded-xl border-l-4 border-primary-500">
                ERP & Enterprise-grade Architecture
              </div>
              <div className="p-4 bg-white shadow rounded-xl border-l-4 border-primary-500">
                AI Automation (OCR, NLP, ML)
              </div>
              <div className="p-4 bg-white shadow rounded-xl border-l-4 border-primary-500">
                Real-world operational problem solving
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="animate-slide-up">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                <Layers className="w-7 h-7 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-display font-bold text-secondary-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Practical AI tools designed for the real challenges of operations, procurement, QA, and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="rounded-3xl bg-white border border-primary-100 p-8 shadow-elegant hover:shadow-dreamy transition-all">
              <h3 className="text-2xl font-display font-bold text-secondary-900 mb-3">6 Focused AI Products</h3>
              <p className="text-secondary-600 leading-relaxed text-base">
                A suite of specialized tools tailored for operations, procurement, QA, and documentation teams.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-primary-100 p-8 shadow-elegant hover:shadow-dreamy transition-all">
              <h3 className="text-2xl font-display font-bold text-secondary-900 mb-3">Flexible Deployment</h3>
              <p className="text-secondary-600 leading-relaxed text-base">
                SaaS, on-premise, or hybrid deployment options to fit every enterprise infrastructure.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-primary-100 p-8 shadow-elegant hover:shadow-dreamy transition-all">
              <h3 className="text-2xl font-display font-bold text-secondary-900 mb-3">Customer-Centric Implementation</h3>
              <p className="text-secondary-600 leading-relaxed text-base">
                Rapid onboarding and ongoing support to ensure success from day one.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
