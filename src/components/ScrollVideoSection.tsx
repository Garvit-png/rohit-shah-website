import { useEffect, useRef } from 'react';

const stats = [
  { num: '654K+',    label: 'Instagram Followers' },
  { num: '2,700+',   label: 'Posts Created' },
  { num: '7 Years+', label: 'Fitness Journey' },
  { num: '100+',     label: 'Clients Coached' },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const ScrollVideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef     = useRef<number>(0);
  const targetP    = useRef(0);
  const currentP   = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect    = section.getBoundingClientRect();
      const total   = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      targetP.current = Math.min(Math.max(scrolled / total, 0), 1);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      currentP.current = lerp(currentP.current, targetP.current, 0.09);
      const p = currentP.current;

      // ── stats: staggered fade-in ──────────────
      statsRefs.current.forEach((el, i) => {
        if (!el) return;
        const threshold = 0.2 + i * 0.12;
        const fade = Math.min(Math.max((p - threshold) / 0.15, 0), 1);
        el.style.opacity   = String(fade);
        el.style.transform = `translateY(${lerp(30, 0, fade)}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={sectionRef} style={{ height: '200vh', position: 'relative' }}>
      {/* sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'var(--black)',
        }}
      >
        {/* stats grid — no video */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '4rem',
            padding: '0 3rem',
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              ref={(el) => { statsRefs.current[i] = el; }}
              style={{
                textAlign: 'center',
                opacity: 0,
                transform: 'translateY(30px)',
                willChange: 'opacity, transform',
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  letterSpacing: '3px',
                  color: 'var(--blue)',
                  lineHeight: 1,
                  marginBottom: '0.8rem',
                  textShadow: '0 0 30px rgba(244,63,94,0.8)',
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'rgba(255,255,255,0.9)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollVideoSection;
