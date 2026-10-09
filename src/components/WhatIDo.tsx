import { useScrollReveal } from '../hooks/useScrollReveal';

const cards = [
  {
    icon: '💪',
    title: 'Fitness Coaching',
    text: 'Real training. Real results. Custom workout plans, diet guidance, and body transformation coaching built around your life — not some generic YouTube plan.',
  },
  {
    icon: '🚀',
    title: 'Fitpreneurship',
    text: 'Turn your passion for fitness into a personal brand and income. Learn how to build an audience, create digital products, and grow a business around who you are.',
  },
  {
    icon: '🧠',
    title: 'Mindset & Reality',
    text: 'Overthinking, discipline, self-doubt — we talk about the hard stuff. No motivation quotes. Just raw, honest conversations that actually change how you think.',
  },
];

const WhatIDo = () => {
  const headRef  = useScrollReveal<HTMLDivElement>();
  const gridRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="what-i-do" className="what-i-do">
      <div className="what-i-do-inner">
        <div className="section-header reveal" ref={headRef}>
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Fitness. Business.<br />
            <span className="text-blue">Mind.</span>
          </h2>
        </div>

        <div className="cards-grid reveal-stagger" ref={gridRef}>
          {cards.map((c, i) => (
            <div key={i} className="card">
              <span className="card-icon">{c.icon}</span>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
