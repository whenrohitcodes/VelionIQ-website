import React from 'react';
import { Shield, AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react';
import ComingSoonModal from '../components/ComingSoonModal';

export default function PriceGuard() {
  const features = [
    {
      icon: Shield,
      title: 'Real-Time Rate Validation',
      description: 'Continuously compare purchase order rates against master contracts and price lists with instant alerts'
    },
    {
      icon: AlertTriangle,
      title: 'Anomaly Detection',
      description: 'Advanced AI models identify abnormal price hikes and suspicious rate patterns automatically'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Comprehensive rate prediction modules and market trend analysis for strategic procurement'
    },
    {
      icon: CheckCircle,
      title: 'ERP Integration & Reports',
      description: 'Seamless integration with ERP systems and downloadable audit reports for compliance and review'
    }
  ];

  const additionalFeatures = [
    'Deviation thresholds and exception alerts',
    'Integration with ERP/Purchase modules',
    'Downloadable audit reports'
  ];

  const useCases = [
    {
      title: 'Procurement Teams',
      description: 'Eliminate overpayments and enforce contract integrity in enterprise environments',
      icon: '🏭'
    },
    {
      title: 'Auditors',
      description: 'Validate procurement activity against master contracts and price benchmarks',
      icon: '🕵️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl mb-8 shadow-elegant">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              PriceGuard AI
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automated Rate Compliance Monitoring for Purchase Orders
            </p>
            <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed mb-12">
              PriceGuard AI continuously validates purchase order rates against master contracts, price lists, and prior orders to ensure compliance and cost control. It flags inconsistencies and provides rate deviation analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-black">
              <ComingSoonModal buttonLabel="🚀 Try PriceGuard AI" />
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

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
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

          <div className="card p-8 animate-slide-up">
            <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-6 text-center">
              Additional Capabilities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalFeatures.map((feature, index) => (
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
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Ideal Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
