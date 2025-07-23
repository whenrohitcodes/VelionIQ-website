import React from 'react'

export default function CaseStudy() {
  return (
    <main className="min-h-screen bg-background text-gray-900 px-6 py-16">
      <section className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Case Study: Manufacturing Automation with Flowgenix</h1>

        <h2 className="text-2xl font-semibold mb-2 text-primary">Client Background</h2>
        <p className="mb-6">
          Our client, a mid-sized manufacturing company with 500+ employees and operations across three locations, was heavily dependent on manual processes for managing supplier invoices, jobwork challans, and delivery documentation.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-primary">Challenges</h2>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>High volume of invoices and jobwork records processed manually</li>
          <li>Frequent human errors in data entry and reconciliation</li>
          <li>Delayed document processing impacting production and payment cycles</li>
          <li>No centralized visibility on vendor document status</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-primary">Solution: Implementation of Flowgenix</h2>
        <p className="mb-6">
          VelionIQ’s Flowgenix was deployed across finance and procurement functions to automate incoming vendor documents. Integration with their ERP system ensured seamless entry of validated data into their transaction modules.
        </p>

        <h3 className="text-xl font-semibold mb-2">Key Features Used:</h3>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>OCR-based scanning of Invoices and Challans</li>
          <li>Multilingual PDF support for domestic and international vendors</li>
          <li>Smart data mapping with ERP field structure</li>
          <li>Exception flagging and approval workflow setup</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-primary">Results</h2>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>80% reduction in manual entry efforts</li>
          <li>95% accuracy in document-to-ERP data mapping</li>
          <li>3x faster vendor payment processing cycle</li>
          <li>Real-time visibility and audit trails for all processed documents</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2 text-primary">Client Testimonial</h2>
        <blockquote className="italic text-gray-700 border-l-4 border-primary pl-4 mb-4">
          “Flowgenix has fundamentally changed the way we handle document transactions. Our team now focuses on decision-making, not data entry. VelionIQ delivered exceptional ROI in under 3 months.”
        </blockquote>
        <p className="text-right font-semibold text-gray-600">— CFO, Manufacturing Client</p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 VelionIQ. All rights reserved.
      </footer>
    </main>
  )
}
