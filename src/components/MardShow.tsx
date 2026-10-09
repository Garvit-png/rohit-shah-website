import { useScrollReveal } from '../hooks/useScrollReveal';

const topics = ['Fitness', 'Entrepreneurship', 'Mindset', 'Reality Checks', 'Relationships', 'Money', 'Discipline'];

const MardShow = () => {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="mard-show" className="mard-show">
      <div className="mard-show-inner">
        <div className="mard-embed reveal-scale" ref={leftRef}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              color: 'var(--gray)',
              fontSize: '0.85rem',
            }}
          >
            <div className="video-play-btn" role="button" aria-label="Watch The Mard Show">▶</div>
            <span>Watch Latest Episode</span>
          </div>
        </div>

        <div className="reveal-right" ref={rightRef}>
          <span className="section-label">Podcast & Show</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            The Mard<br />
            <span className="text-blue">Show</span>
          </h2>
          <p style={{ color: 'var(--gray-light)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '0.75rem' }}>
            A show for men who are done with fake motivation and want real conversations.
            Rohit Sah sits down to talk about the things most creators are too scared to say out loud.
          </p>
          <p style={{ color: 'var(--gray-light)', fontSize: '0.95rem', lineHeight: '1.8' }}>
            Fitness, mindset, money, relationships, entrepreneurship — nothing is off the table.
            Every episode is a reality check that makes you think, then act.
          </p>

          <div className="mard-topics">
            {topics.map((t, i) => (
              <span key={i} className="topic-tag">{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://youtube.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
              ▶ Watch on YouTube
            </a>
            <a href="https://instagram.com/themardshow" className="btn-outline" target="_blank" rel="noopener noreferrer">
              Follow @themardshow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MardShow;
