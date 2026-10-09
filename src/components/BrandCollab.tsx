import { useScrollReveal } from '../hooks/useScrollReveal';

const audienceStats = [
  { num: '654K+', label: 'Instagram Followers' },
  { num: '18–30', label: 'Core Age Group' },
  { num: '78%',   label: 'Male Audience' },
  { num: '85%',   label: 'Audience from India' },
];

const collabTypes = [
  { icon: '🎬', label: 'Sponsored Reels & Posts' },
  { icon: '🤝', label: 'Brand Ambassadorships' },
  { icon: '🎤', label: 'Event Appearances' },
  { icon: '📦', label: 'Product Launches & Reviews' },
  { icon: '📧', label: 'Newsletter & Email Mentions' },
  { icon: '🎙️', label: 'Podcast / Show Features' },
];

const BrandCollab = () => {
  const headRef  = useScrollReveal<HTMLDivElement>();
  const leftRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const rightRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="collab" className="collab">
      <div className="collab-inner">
        <div className="reveal" ref={headRef}>
          <span className="section-label">Brand Collaborations</span>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Work With<br />
            <span className="text-blue">The Brand</span>
          </h2>
          <p style={{ color: 'var(--gray-light)', maxWidth: '540px', fontSize: '0.95rem', marginBottom: '3rem' }}>
            Reach 654K+ engaged fitness and entrepreneurship followers. Real audience, real engagement, real results for your brand.
          </p>
        </div>

        <div className="collab-grid">
          <div className="reveal-left" ref={leftRef}>
            <span className="section-label">Audience Overview</span>
            <div className="audience-stats">
              {audienceStats.map((s, i) => (
                <div key={i} className="aud-stat">
                  <div className="aud-stat-num">{s.num}</div>
                  <div className="aud-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <a href="mailto:rohitfitwork@gmail.com" className="btn-mediakit">
              ⬇ Download Media Kit
            </a>
          </div>

          <div className="reveal-right" ref={rightRef}>
            <span className="section-label">Types of Collaborations</span>
            <div className="collab-types" style={{ marginTop: '0.75rem' }}>
              {collabTypes.map((c, i) => (
                <div key={i} className="collab-type">
                  <span className="collab-type-icon">{c.icon}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--gray)', marginTop: '1.25rem' }}>
              For collaboration enquiries:{' '}
              <a href="mailto:rohitfitwork@gmail.com" style={{ color: 'var(--blue)', textDecoration: 'none' }}>
                rohitfitwork@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCollab;
