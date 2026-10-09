import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  type: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', whatsapp: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner reveal" ref={ref}>
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          Let's Talk.<br />
          <span className="text-blue">For Real.</span>
        </h2>
        <p style={{ color: 'var(--gray-light)', fontSize: '0.95rem', marginTop: '0.75rem' }}>
          Coaching enquiry, collaboration, media or just want to say something? Fill the form and Rohit or his team will get back within 24 hours.
        </p>

        {submitted ? (
          <div className="form-success" style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
            <h3>Message Sent!</h3>
            <p style={{ color: 'var(--gray-light)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              We will get back to you within 24 hours.
            </p>
            <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
              Send Another
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Aryan Mehta" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="aryan@example.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp Number</label>
                <input id="whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label htmlFor="type">Enquiry Type</label>
                <select id="type" name="type" value={form.type} onChange={handleChange} required>
                  <option value="" disabled>Select one...</option>
                  <option value="coaching">Coaching</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="media">Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me what you need..." required />
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.9rem 2.5rem' }}>
              Send Message →
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
