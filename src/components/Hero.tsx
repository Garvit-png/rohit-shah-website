import { type MouseEvent } from 'react';
import Plasma from './Plasma';

const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* ── Plasma background ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: 0.18,       /* subtle — won't overpower text */
        pointerEvents: 'none',
      }}>
        <Plasma
          color="#216ade"
          speed={0.6}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
          renderScale={0.45}
          maxDpr={1.5}
          targetFps={30}
          iterations={50}
        />
      </div>

      {/* ── extra vignette so edges stay dark ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'radial-gradient(ellipse at center, transparent 30%, var(--black) 90%)',
        pointerEvents: 'none',
      }} />

      {/* Left */}
      <div className="hero-left" style={{ position: 'relative', zIndex: 2 }}>
        <h1
          className="hero-title"
          style={{ animation: 'heroSlideUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
        >
          Build the Body.<br />
          Build the Business.<br />
          <span className="line-blue">Build the Mind.</span>
        </h1>

        <p
          className="hero-sub"
          style={{ animation: 'heroSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both' }}
        >
          I'm Rohit Sah — the fitpreneur behind 654K+ followers and The Mard Show.
          Fitness. Reality. Entrepreneurship. No filters, only results.
        </p>

        <div
          className="hero-buttons"
          style={{ animation: 'heroSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both' }}
        >
          <a
            href="#work-with-me"
            className="btn-primary"
            onClick={(e) => scrollTo(e, 'work-with-me')}
          >
            Book a 1:1 Call
          </a>
          <a
            href="https://youtube.com"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
        </div>
      </div>

      {/* Right */}
      <div
        className="hero-image-wrap"
        style={{
          position: 'relative',
          zIndex: 2,
          animation: 'heroSlideRight 0.85s cubic-bezier(0.22,1,0.36,1) 0.3s both',
        }}
      >
        <div className="hero-glow" />
        <div className="hero-img-box">
          <img
            src="/rohit_front.png"
            alt="Rohit Sah"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              animation: 'float 5s ease-in-out infinite 1.2s',
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
