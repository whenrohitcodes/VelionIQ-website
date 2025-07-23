import React from 'react';
import { ClipboardCheck, CheckCircle } from 'lucide-react';
import ComingSoonModal from '../components/ComingSoonModal';

export default function ClaimWise() {
  const features = [
    {
      icon: ClipboardCheck,
      title: 'Claim Parsing',
      description: 'Extract claim details from emails or portal uploads for streamlined processing.'
    },
    {
      icon: CheckCircle,
      title: 'AI-based Eligibility Check',
      description: 'Validate claims against policy, invoice, and repair history for accurate decisions.'
    },
    {
      icon: CheckCircle,
      title: 'Automated Decision Suggestions',
      description: 'AI suggests approve/reject actions based on policy data and service logs.'
    },
    {
      icon: CheckCircle,
      title: 'Claim Dashboard with SLA Tracking',
      description: 'Monitor claim statuses and SLA performance in real time.'
    },
    {
      icon: CheckCircle,
      title: 'CRM/Warranty System Integration',
      description: 'Seamless integration with existing customer support systems.'
    },
    {
      icon: CheckCircle,
      title: 'TAT Reports & Exception Logs',
      description: 'Download reports for turnaround time analysis and exception insights.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support Teams',
      description: 'Improve satisfaction by reducing claim turnaround times.'
    },
    {
      title: 'Appliance & Automotive Sectors',
      description: 'Ensure consistent and fair warranty resolutions for high-value equipment.'
    },
    {
      title: 'Service Teams',
      description: 'Automate workflows and reduce manual review time.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-red-500 rounded-3xl mb-8 shadow-elegant">
              <ClipboardCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              ClaimWise
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automated Warranty Claim Validation and Resolution Assistant
            </p>
            <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed mb-12">
              ClaimWise uses AI to validate and process warranty claims by comparing claim documents, product history, service logs, and policy coverage. It reduces turnaround time and improves accuracy in warranty decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-black">
              <ComingSoonModal buttonLabel="🚀 Try ClaimWise" />
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
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-500 rounded-xl flex items-center justify-center">
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
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Ideal Use Cases
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card p-8 text-center card-hover animate-slide-up">
                <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
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
