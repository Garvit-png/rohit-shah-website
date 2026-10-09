import { useScrollReveal } from '../hooks/useScrollReveal';

const milestones = [
  { year: '2017', text: 'Started training seriously. Failed multiple times, lost confidence, but kept showing up to the gym every single day.' },
  { year: '2020', text: 'First viral reel — raw, unfiltered gym content. Nobody expected the response. That was the turning point.' },
  { year: '2022', text: 'Hit 100K followers. Launched The Mard Show — a show for men who want the unfiltered truth about fitness, business and life.' },
  { year: '2023', text: 'Crossed 500K. Started 1:1 coaching. Helped 100+ clients transform their bodies and their mindsets.' },
  { year: '2024', text: '654K+ followers, verified creator, and still growing — with the same no-filter energy from day one.' },
];

const values = ['Discipline', 'Honesty', 'Consistency', 'Self-Belief', 'No Shortcuts'];

const About = () => {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -30px 0px' });

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-text reveal-left" ref={leftRef}>
          <span className="section-label">About Me</span>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            The Fitpreneur<br />
            <span className="text-blue">Behind the Brand</span>
          </h2>
          <p>
            I'm Rohit Sah. I started going to the gym not to become an influencer — I
            just wanted to stop feeling weak. I had no coach, no plan, and honestly no
            clue what I was doing.
          </p>
          <p>
            Seven years later, I have 654K people watching me talk about the things that
            actually matter — training, mindset, money, and building a life you're proud
            of. I founded The Mard Show because no one was having these conversations
            honestly with young Indian men.
          </p>
          <p>
            I'm not here to sell you a dream. I'm here to show you what real work looks
            like. The body, the business, the mind — all three together. That's what I
            call being a <strong style={{ color: 'var(--white)' }}>fitpreneur</strong>.
          </p>

          <div className="values-list">
            {values.map((v, i) => (
              <span key={i} className="value-tag" style={{ animationDelay: `${i * 0.08}s` }}>{v}</span>
            ))}
          </div>
        </div>

        <div className="reveal-right" ref={rightRef}>
          <span className="section-label">Milestones</span>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className="tl-item">
                <div className="tl-dot" />
                <div className="tl-year">{m.year}</div>
                <p className="tl-text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
