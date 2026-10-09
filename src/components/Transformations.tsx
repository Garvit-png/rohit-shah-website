import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    text: "Rohit bhai ne meri life literally badal di. 3 mahine mein 12kg lose kiya aur jo mindset shift hua — woh kisi gym ya dietician ne nahi diya. Real, honest coaching.",
    name: 'Aryan Mehta',
    meta: 'Lost 12kg in 3 months',
    emoji: '🔥',
  },
  {
    text: "I was stuck at the same weight for 2 years. One month with Rohit and I finally understood what I was doing wrong. No generic plans — everything was built for me.",
    name: 'Karan Thakur',
    meta: 'Gained 8kg muscle in 4 months',
    emoji: '💪',
  },
  {
    text: "The mindset coaching was unexpected but it changed everything. I stopped overthinking, started being consistent, and now I am the fittest I have ever been at 28.",
    name: 'Rahul Verma',
    meta: 'Complete body transformation',
    emoji: '🧠',
  },
  {
    text: "Rohit does not sugarcoat anything. He told me exactly what was wrong and exactly how to fix it. 6 months later — I have the body and the confidence I always wanted.",
    name: 'Sahil Joshi',
    meta: 'Down 18kg, still going',
    emoji: '⚡',
  },
  {
    text: "It is not just fitness — he helped me start my own fitness page too. From follower to creator in 6 months. Real fitpreneurship guidance.",
    name: 'Vikas Nair',
    meta: 'Now a fitness creator himself',
    emoji: '🚀',
  },
  {
    text: "I was skeptical about online coaching but Rohit's accountability and check-ins felt like he was right there with me. Best investment I have made in myself.",
    name: 'Dev Sharma',
    meta: 'Lost 9kg, built real discipline',
    emoji: '🎯',
  },
];

const Transformations = () => {
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="transformations" className="transformations">
      <div className="trans-inner">
        <div className="reveal" ref={headRef}>
          <span className="section-label">Results</span>
          <h2 className="section-title">
            Real People.<br />
            <span className="text-blue">Real Results.</span>
          </h2>
          <p style={{ color: 'var(--gray-light)', marginTop: '0.75rem', fontSize: '0.95rem', maxWidth: '500px' }}>
            No staged photos. No paid testimonials. Just people who showed up and did the work.
          </p>
        </div>

        <div className="testimonials-grid reveal-stagger" ref={gridRef}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.emoji}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
