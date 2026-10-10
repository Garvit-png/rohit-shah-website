import { useEffect, useRef } from 'react';
import LightTunnel from './LightTunnel';

const stats = [
  { num: '654K+',    label: 'Instagram Followers' },
  { num: '2,700+',   label: 'Posts Created' },
  { num: '7 Years+', label: 'Fitness Journey' },
  { num: '100+',     label: 'Clients Coached' },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const ScrollVideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
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
      // higher lerp = more responsive but less smooth; 0.09 is the sweet spot
      currentP.current = lerp(currentP.current, targetP.current, 0.09);
      const p = currentP.current;

      // ── video wrapper: 42vw → 62vw ────────────────────────────
      const wrapper = wrapperRef.current;
      if (wrapper) {
        const width  = lerp(42, 62, p);
        const radius = lerp(16, 6, p);
        wrapper.style.width        = `${width}vw`;
        wrapper.style.borderRadius = `${radius}px`;
        wrapper.style.boxShadow    = `0 ${lerp(8, 40, p)}px ${lerp(30, 80, p)}px rgba(0,0,0,${lerp(0.4, 0.75, p)})`;
      }

      // ── dark overlay on video fades in so stats are readable ──
      const overlay = overlayRef.current;
      if (overlay) {
        // overlay becomes visible from progress 0.3 onwards
        const overlayFade = Math.min(Math.max((p - 0.25) / 0.35, 0), 1);
        overlay.style.opacity = String(overlayFade * 0.55);
      }

      // ── stats: staggered fade-in on top of video ──────────────
      statsRefs.current.forEach((el, i) => {
        if (!el) return;
        const threshold = 0.35 + i * 0.12;
        const fade = Math.min(Math.max((p - threshold) / 0.12, 0), 1);
        el.style.opacity   = String(fade);
        el.style.transform = `translateY(${lerp(14, 0, fade)}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={sectionRef} style={{ height: '300vh', position: 'relative' }}>
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
        {/* LightTunnel wrapper */}
        <div
          ref={wrapperRef}
          style={{
            position: 'relative',
            width: '42vw',
            borderRadius: '16px',
            overflow: 'hidden',
            aspectRatio: '16 / 9',
            flexShrink: 0,
            willChange: 'width, border-radius, box-shadow',
          }}
        >
          {/* LightTunnel background */}
          <LightTunnel
            cableColor="#F43F5E"
            pulseColor="#FF0040"
            tunnelColor="#8B0000"
            tunnelOpacity={0.3}
            speed={0.15}
            flowDirection="outward"
            pulseSpeed={2.5}
            pulseLength={0.3}
            pulseBlend={1}
            pulseWidth={1}
            cableCount={24}
            thickness={0.4}
            rimWidth={0.2}
            waviness={0.4}
            sway={0.6}
            size={1.0}
            centerX={0}
            centerY={0}
            glow={1.5}
            fadeNear={0.5}
            fadeFar={2}
            brightness={1.2}
            colorVariance
            grain
            grainIntensity={0.05}
            opacity={1}
            mouseInteraction={false}
            mouseStrength={0.1}
          />

          {/* dark overlay so stats text is legible */}
          <div
            ref={overlayRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.55)',
              opacity: 0,
              pointerEvents: 'none',
              willChange: 'opacity',
            }}
          />

          {/* stats overlay — centred on the video */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '0 2.5rem',
              zIndex: 2,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                ref={(el) => { statsRefs.current[i] = el; }}
                style={{
                  textAlign: 'center',
                  opacity: 0,
                  transform: 'translateY(14px)',
                  willChange: 'opacity, transform',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                    letterSpacing: '2px',
                    color: 'var(--blue)',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                    textShadow: '0 0 24px rgba(244,63,94,0.7), 0 2px 8px rgba(0,0,0,0.8)',
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2.5px',
                    color: 'rgba(255,255,255,0.85)',
                    textShadow: '0 1px 6px rgba(0,0,0,0.9)',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollVideoSection;
