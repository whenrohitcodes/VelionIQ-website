export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "VelionIQ helped us cut processing time in half. Truly transformative!",
      author: "Operations Head, IT Services",
    },
    {
      text: "Our finance team uses Flowgenix every day. Seamless and efficient!",
      author: "Finance Manager, Manufacturing",
    },
    {
      text: "Real-time alerts from PriceGuard have saved us from costly overruns.",
      author: "Procurement Lead, Auto Industry",
    },
    {
      text: "InboxIntelli is a game changer for automating vendor emails.",
      author: "Accounts Payable, Logistics",
    },
    {
      text: "We finally have full traceability on jobwork items thanks to SmartSpec.",
      author: "QA Head, Electronics Manufacturing",
    },
    {
      text: "AI-based invoice validation? VelionIQ nailed it.",
      author: "CFO, Housing Infrastructure",
    },
    {
      text: "ClaimWise reduced our warranty claims turnaround from days to hours.",
      author: "Service Manager, Consumer Electronics",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-10 text-primary">
        What Our Clients Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-6 min-w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white w-80 p-6 rounded-lg shadow text-left flex-shrink-0"
            >
              <p className="text-gray-700 italic">“{t.text}”</p>
              <footer className="mt-4 text-primary font-medium text-sm">
                — {t.author}
              </footer>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
