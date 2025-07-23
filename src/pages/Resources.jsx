import React from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  PlayCircle,
  FileBarChart,
  Clock,
  ExternalLink,
  ArrowRight
} from 'lucide-react'

export default function Resources() {
  const resources = [
    {
      type: 'whitepaper',
      icon: FileText,
      title: 'AI in Document Processing',
      description: 'Explore how enterprises are leveraging OCR and LLMs to automate document-based workflows across industries.',
      link: '#',
      duration: '15 min read',
      category: 'Whitepaper',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'case-study',
      icon: FileBarChart,
      title: 'Manufacturing Automation with Flowgenix',
      description: 'Learn how a mid-sized manufacturing firm reduced manual invoice processing time by 80%.',
      link: '/resources/case-study',
      duration: '12 min read',
      category: 'Case Study',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      type: 'video',
      icon: PlayCircle,
      title: 'Inside VelionIQ\'s Product Suite',
      description: 'Watch a walkthrough of all six products and their use cases in a 5-minute demo video.',
      link: '#',
      duration: '5 min watch',
      category: 'Video Demo',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding my-2">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              Resources
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore case studies, whitepapers, and demos from the VelionIQ suite
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="group card p-8 card-hover animate-slide-up block"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={(e) => {
                  if (resource.link === '#') {
                    e.preventDefault()
                    alert('Coming soon!')
                  }
                }}
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <ExternalLink className="w-4 h-4 text-secondary-400 group-hover:text-primary-600 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {resource.title}
                </h3>

                <p className="text-secondary-600 leading-relaxed mb-6">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-secondary-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{resource.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm font-medium">Access Resource</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
