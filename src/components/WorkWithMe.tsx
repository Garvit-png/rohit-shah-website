import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Fill the Application',
    text: "Quick form to understand your goals, current situation, and what you are looking to achieve.",
  },
  {
    num: '02',
    title: 'Discovery Call',
    text: "30-minute call with Rohit to discuss your journey and see if we are a good fit to work together.",
  },
  {
    num: '03',
    title: 'Custom Plan & Onboarding',
    text: "Get your personalised training, diet and mindset plan. We start building — no fluff, just work.",
  },
];

const packages = [
  {
    name: 'Consultation Call',
    price: '₹999',
    per: '/ one-time',
    features: [
      '60-min 1:1 video call',
      'Goal assessment',
      'Custom action plan',
      'Follow-up summary doc',
    ],
    featured: false,
    badge: '',
  },
  {
    name: 'Monthly Coaching',
    price: '₹4,999',
    per: '/ month',
    features: [
      'Weekly check-ins',
      'Custom workout plan',
      'Diet & nutrition guide',
      'WhatsApp support',
      'Progress tracking',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium Transformation',
    price: '₹12,999',
    per: '/ 3 months',
    features: [
      'Everything in Monthly',
      'Daily accountability',
      'Mindset coaching sessions',
      'Brand building guidance',
      'Priority response',
    ],
    featured: false,
    badge: '',
  },
];

const faqs = [
  {
    q: 'Who is this for?',
    a: "Anyone serious about changing their body, mindset, or building a fitness brand. Whether you are a beginner or someone stuck at a plateau — if you are willing to do the work, we will get you there.",
  },
  {
    q: 'Is the coaching online or offline?',
    a: "Completely online. All coaching happens over video calls and WhatsApp, so you can work with Rohit from anywhere in India or abroad.",
  },
  {
    q: 'How long before I see results?',
    a: "Visible physical changes typically start within 4-6 weeks. Mindset shifts happen even faster — usually within the first two weeks.",
  },
  {
    q: 'How does payment work?',
    a: "Payment is done upfront via UPI, bank transfer, or Razorpay before the first session. Flexible EMI options available for the 3-month package.",
  },
];

const WorkWithMe = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const headRef  = useScrollReveal<HTMLDivElement>();
  const stepsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const pkgRef   = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const faqRef   = useScrollReveal<HTMLDivElement>();

  return (
    <section id="work-with-me" className="work-with-me">
      <div className="work-inner">
        <div className="reveal" ref={headRef}>
          <span className="section-label">Work With Me</span>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Ready to Actually<br />
            <span className="text-blue">Change?</span>
          </h2>
          <p style={{ color: 'var(--gray-light)', marginBottom: '3rem', maxWidth: '520px', fontSize: '0.95rem' }}>
            DMs are open, but real transformation starts with a real plan. Here is how we work together.
          </p>
        </div>

        <div className="process-steps reveal-stagger" ref={stepsRef}>
          {steps.map((s, i) => (
            <div key={i} className="step-card">
              <div className="step-number">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-text">{s.text}</p>
            </div>
          ))}
        </div>

        <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          Packages
        </h3>
        <div className="packages-grid reveal-stagger" ref={pkgRef}>
          {packages.map((p, i) => (
            <div key={i} className={`pkg-card ${p.featured ? 'featured' : ''}`} style={{ position: 'relative' }}>
              {p.badge && <span className="pkg-badge">{p.badge}</span>}
              <div className="pkg-name">{p.name}</div>
              <div className="pkg-price">{p.price} <span>{p.per}</span></div>
              <ul className="pkg-features">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="btn-pkg">Book Now</button>
            </div>
          ))}
        </div>

        <div className="faq-section reveal" ref={faqRef}>
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span style={{ color: 'var(--blue)', fontSize: '1.1rem', fontWeight: 300 }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
