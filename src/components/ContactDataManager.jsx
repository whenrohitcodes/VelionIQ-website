import { useState, useEffect } from 'react';
import { Download, Trash2, Eye, Calendar, Mail, Building2, MessageSquare, Filter } from 'lucide-react';

export default function ContactDataManager() {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [filter, setFilter] = useState('all'); // all, new, contacted
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadSubmissions();
  }, []);

  useEffect(() => {
    filterSubmissions();
  }, [submissions, filter, searchTerm]);

  const loadSubmissions = () => {
    const saved = localStorage.getItem('velioniq_contact_submissions');
    if (saved) {
      const data = JSON.parse(saved);
      setSubmissions(data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
    }
  };

  const filterSubmissions = () => {
    let filtered = [...submissions];

    // Filter by status
    if (filter !== 'all') {
      filtered = filtered.filter(sub => sub.status === filter);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(sub =>
        sub.name.toLowerCase().includes(term) ||
        sub.email.toLowerCase().includes(term) ||
        sub.company.toLowerCase().includes(term) ||
        sub.message.toLowerCase().includes(term)
      );
    }

    setFilteredSubmissions(filtered);
  };

  const updateSubmissionStatus = (id, newStatus) => {
    const updated = submissions.map(sub =>
      sub.id === id ? { ...sub, status: newStatus } : sub
    );
    setSubmissions(updated);
    localStorage.setItem('velioniq_contact_submissions', JSON.stringify(updated));
  };

  const deleteSubmission = (id) => {
    const updated = submissions.filter(sub => sub.id !== id);
    setSubmissions(updated);
    localStorage.setItem('velioniq_contact_submissions', JSON.stringify(updated));
    setSelectedSubmission(null);
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Company', 'Interest', 'Message', 'Date', 'Status'];
    const csvData = filteredSubmissions.map(sub => [
      sub.name,
      sub.email,
      sub.company,
      sub.interest,
      sub.message.replace(/"/g, '""'),
      new Date(sub.timestamp).toLocaleDateString(),
      sub.status
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(field => `"${field}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `velioniq-contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getInterestIcon = (interest) => {
    switch (interest) {
      case 'demo': return '🎯';
      case 'partnership': return '🤝';
      case 'flowgenix': return '📄';
      case 'autorecon': return '🔍';
      case 'priceguard': return '🛡️';
      case 'smartspec': return '📋';
      case 'inboxintelli': return '📧';
      case 'claimwise': return '✅';
      default: return '💬';
    }
  };

  if (submissions.length === 0) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
              Contact Submissions
            </h2>
            <p className="text-secondary-600">No contact submissions found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="mb-8">
          <h2 className="text-4xl font-display font-bold text-secondary-900 mb-4">
            Contact Submissions
          </h2>
          <p className="text-secondary-600 mb-6">
            Manage and review contact form submissions from your website.
          </p>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, email, company, or message..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-secondary-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="input-field min-w-[120px]"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Export */}
            <button
              onClick={exportToCSV}
              className="btn-secondary flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-secondary-900">{submissions.length}</div>
              <div className="text-sm text-secondary-600">Total</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {submissions.filter(s => s.status === 'new').length}
              </div>
              <div className="text-sm text-secondary-600">New</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {submissions.filter(s => s.status === 'contacted').length}
              </div>
              <div className="text-sm text-secondary-600">Contacted</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-secondary-600">
                {filteredSubmissions.length}
              </div>
              <div className="text-sm text-secondary-600">Filtered</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Submissions List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className={`card p-6 cursor-pointer transition-all duration-200 ${
                  selectedSubmission?.id === submission.id
                    ? 'ring-2 ring-primary-500 shadow-elegant'
                    : 'hover:shadow-elegant'
                }`}
                onClick={() => setSelectedSubmission(submission)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{getInterestIcon(submission.interest)}</div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">{submission.name}</h3>
                      <p className="text-sm text-secondary-600">{submission.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                    <Eye className="w-4 h-4 text-secondary-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-secondary-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{submission.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-600">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(submission.timestamp)}</span>
                  </div>
                </div>

                <p className="text-secondary-600 text-sm mt-3 line-clamp-2">
                  {submission.message}
                </p>
              </div>
            ))}

            {filteredSubmissions.length === 0 && (
              <div className="text-center py-8">
                <p className="text-secondary-600">No submissions match your filters.</p>
              </div>
            )}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-1">
            {selectedSubmission ? (
              <div className="card p-6 sticky top-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-display font-semibold text-secondary-900">
                    Submission Details
                  </h3>
                  <button
                    onClick={() => deleteSubmission(selectedSubmission.id)}
                    className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors duration-200"
                    title="Delete submission"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Contact Information
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-secondary-400" />
                        <span className="text-secondary-900">{selectedSubmission.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-secondary-400" />
                        <a
                          href={`mailto:${selectedSubmission.email}`}
                          className="text-primary-600 hover:underline"
                        >
                          {selectedSubmission.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-secondary-400" />
                        <span className="text-secondary-900">{selectedSubmission.company}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Interest Area
                    </label>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getInterestIcon(selectedSubmission.interest)}</span>
                      <span className="text-secondary-900 capitalize">
                        {selectedSubmission.interest.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Message
                    </label>
                    <div className="bg-secondary-50 rounded-xl p-4">
                      <MessageSquare className="w-4 h-4 text-secondary-400 mb-2" />
                      <p className="text-secondary-900 leading-relaxed">
                        {selectedSubmission.message}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Submission Date
                    </label>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-secondary-400" />
                      <span className="text-secondary-900">{formatDate(selectedSubmission.timestamp)}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Status
                    </label>
                    <div className="space-y-2">
                      {['new', 'contacted', 'archived'].map(status => (
                        <button
                          key={status}
                          onClick={() => updateSubmissionStatus(selectedSubmission.id, status)}
                          className={`w-full p-3 rounded-xl text-left font-medium transition-all duration-200 ${
                            selectedSubmission.status === status
                              ? `${getStatusColor(status)} ring-2 ring-offset-2 ring-current`
                              : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-700'
                          }`}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card p-6 text-center">
                <Eye className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                <p className="text-secondary-600">
                  Select a submission to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 