import React from 'react';
import { FileText, CheckCircle, Users, Zap, Globe, Shield, Download, ExternalLink, ArrowRight } from 'lucide-react';

export default function Flowgenix() {
  const features = [
    {
      icon: FileText,
      title: 'OCR-Powered Extraction',
      description: 'Advanced OCR technology that handles PDF, scanned, and image-based documents with 99% accuracy'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Process documents in English, French, Spanish, and other major languages seamlessly'
    },
    {
      icon: Zap,
      title: 'AI-Generated Insights',
      description: 'Automatic summaries and business insights powered by advanced AI and GenAI capabilities'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Role-based access, comprehensive audit logs, and user activity tracking for complete security'
    }
  ];

  const useCases = [
    {
      title: 'Invoice Processing',
      description: 'Automate vendor invoice extraction and validation',
      icon: '📄'
    },
    {
      title: 'Purchase Orders',
      description: 'Streamline PO processing and approval workflows',
      icon: '🛒'
    },
    {
      title: 'Contract Management',
      description: 'Extract key terms and automate contract analysis',
      icon: '📋'
    },
    {
      title: 'Compliance Reports',
      description: 'Generate automated compliance and audit reports',
      icon: '✅'
    }
  ];

  const benefits = [
    { metric: '90%', label: 'Reduction in Processing Time' },
    { metric: '99%', label: 'Document Accuracy Rate' },
    { metric: '75%', label: 'Cost Savings' },
    { metric: '50+', label: 'Document Formats Supported' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mb-8 shadow-elegant">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              Flowgenix
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Smart Document Automation Platform for Enterprise Workflows
            </p>
            <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed mb-12">
              Flowgenix is an intelligent document automation engine that streamlines enterprise document workflows using OCR, AI, and GenAI capabilities. It supports multi-format document extraction, smart summaries, real-time validations, and ERP-ready data exports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://flowgenix.velioniq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Try Flowgenix Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Everything you need to automate your document workflows with enterprise-grade precision
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
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
              Complete Feature Set
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Dynamic Word/PDF template generation',
                'ERP-integrated output formats (JSON, XML, Excel)',
                'Real-time data validation and error detection',
                'Batch processing for high-volume documents',
                'Custom workflow configuration',
                'API integration for seamless connectivity'
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
              Ideal Use Cases
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Perfect for manufacturing, logistics, retail, and service-based industries
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


    </div>
  );
}
