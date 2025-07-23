import { useState, useEffect } from 'react';
import { CheckCircle2, Send, User, Mail, Building2, MessageSquare, Calendar } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general'
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});
  const [submissions, setSubmissions] = useState([]);

  // Load previous submissions on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('velioniq_contact_submissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create submission object
    const submission = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'new'
    };
    
    // Save to localStorage
    const updatedSubmissions = [...submissions, submission];
    setSubmissions(updatedSubmissions);
    localStorage.setItem('velioniq_contact_submissions', JSON.stringify(updatedSubmissions));
    
    // Reset form and show success
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      interest: 'general'
    });
    setStatus('success');
    
    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (status === 'success') {
    return (
      <div className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-scale-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-success rounded-full mb-6 shadow-elegant">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-display font-bold text-secondary-900 mb-4">
                Thank You! 🎉
              </h2>
              <p className="text-xl text-secondary-600 mb-6">
                Your message has been received successfully. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-secondary"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-display font-bold gradient-text mb-6">
              Start a Conversation
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Ready to transform your business with AI? We'd love to hear from you. 
              Drop us a message and let's explore how VelionIQ can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <div className="card p-8 space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    Our experts are here to help you understand how our AI solutions 
                    can revolutionize your business processes.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">Quick Response</h4>
                      <p className="text-secondary-600">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">Enterprise Ready</h4>
                      <p className="text-secondary-600">Solutions for businesses of all sizes</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">Proven Results</h4>
                      <p className="text-secondary-600">Join 500+ satisfied customers</p>
                    </div>
                  </div>
                </div>

                {submissions.length > 0 && (
                  <div className="pt-6 border-t border-secondary-200">
                    <p className="text-sm text-secondary-500">
                      💾 {submissions.length} message{submissions.length !== 1 ? 's' : ''} saved locally
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-field pl-12 ${errors.name ? 'border-error' : ''}`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-error animate-slide-down">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-field pl-12 ${errors.email ? 'border-error' : ''}`}
                        placeholder="john@company.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-error animate-slide-down">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Company *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`input-field pl-12 ${errors.company ? 'border-error' : ''}`}
                      placeholder="Your Company Name"
                    />
                  </div>
                  {errors.company && (
                    <p className="mt-1 text-sm text-error animate-slide-down">{errors.company}</p>
                  )}
                </div>

                {/* Interest Field */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="flowgenix">Flowgenix - Document Automation</option>
                    <option value="autorecon">AutoRecon - Product Matching</option>
                    <option value="priceguard">PriceGuard - Rate Anomaly Detection</option>
                    <option value="smartspec">SmartSpec - Product Specification</option>
                    <option value="inboxintelli">InboxIntelli - Email-to-ERP Bridge</option>
                    <option value="claimwise">ClaimWise - Warranty Claim Validation</option>
                    <option value="demo">Request a Demo</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-secondary-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`input-field pl-12 resize-none ${errors.message ? 'border-error' : ''}`}
                      placeholder="Tell us about your project or how we can help you..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-error animate-slide-down">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-secondary-500 text-center">
                  We respect your privacy. Your information is stored securely and never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
