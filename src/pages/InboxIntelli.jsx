import React from 'react';
import { Mail, MessageSquare, Zap, Shield, Database, Users, ExternalLink, ArrowRight, CheckCircle, Settings } from 'lucide-react';

export default function InboxIntelli() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Email-to-Data Parsing',
      description: 'Advanced NLP and LLM technology that intelligently extracts structured data from email content'
    },
    {
      icon: Database,
      title: 'ERP Integration',
      description: 'Seamless integration with Tally, SAP, IDMS and other major ERP systems for real-time data sync'
    },
    {
      icon: Settings,
      title: 'Custom Templates',
      description: 'Pre-built and customizable prompt templates for various business scenarios and workflows'
    },
    {
      icon: Shield,
      title: 'Role-Based Access',
      description: 'Secure inbox connections with role-based permissions and comprehensive audit trails'
    }
  ];

  const useCases = [
    {
      title: 'Invoice Processing',
      description: 'Automatically extract invoice data from email attachments',
      icon: '📧'
    },
    {
      title: 'Order Management',
      description: 'Parse purchase orders and sales orders from email content',
      icon: '📋'
    },
    {
      title: 'COA Processing',
      description: 'Extract Certificate of Analysis data for quality control',
      icon: '🔬'
    },
    {
      title: 'Report Generation',
      description: 'Transform email reports into structured ERP data',
      icon: '📊'
    }
  ];

  const benefits = [
    { metric: '85%', label: 'Reduction in Manual Work' },
    { metric: '24/7', label: 'Automated Processing' },
    { metric: '99%', label: 'Email Parsing Accuracy' },
    { metric: '10+', label: 'ERP Systems Supported' }
  ];

  const integrations = [
    { name: 'Tally ERP', logo: '💼' },
    { name: 'SAP', logo: '🏢' },
    { name: 'IDMS', logo: '📊' },
    { name: 'QuickBooks', logo: '💰' },
    { name: 'Oracle', logo: '🔶' },
    { name: 'Microsoft Dynamics', logo: '🔷' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl mb-8 shadow-elegant">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              InboxIntelli
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-Powered Email Parsing & ERP Bridge for Transactional Automation
            </p>
            <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed mb-12">
              InboxIntelli automates the interpretation of email communications and attachments to extract actionable data, transform it into structured formats, and directly feed it into ERP systems like Tally, SAP, and IDMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intellibox.idms-qa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Launch InboxIntelli</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button className="btn-secondary flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Schedule Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Intelligent Email Processing
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Transform your inbox into a powerful data processing engine with AI-driven automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features List */}
          <div className="card p-8 animate-slide-up">
            <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-6 text-center">
              Complete Email Automation Suite
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Real-time ERP push & alerting',
                'Email log, status tracker, and audit trail',
                'Multi-format attachment handling',
                'Intelligent data validation and error detection',
                'Custom workflow configuration',
                'API-first architecture for easy integration'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Perfect for Modern Teams
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ideal for finance, sales, and admin teams dealing with high-volume email workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="card p-6 text-center card-hover animate-slide-up">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-display font-semibold text-secondary-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Seamless ERP Integration
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Connect with your existing systems effortlessly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <div key={index} className="card p-6 text-center card-hover animate-slide-up">
                <div className="text-3xl mb-3">{integration.logo}</div>
                <h4 className="text-sm font-semibold text-secondary-900">
                  {integration.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits/Stats Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Proven Impact
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See how InboxIntelli transforms email workflows for businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="card p-8">
                  <div className="text-4xl font-display font-bold gradient-text mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-secondary-600 font-medium">
                    {benefit.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container-custom">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Automate Your Email Workflows?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Transform your inbox into a powerful automation engine. Reduce manual work and enhance transaction speed with InboxIntelli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intellibox.idms-qa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
