import { type MouseEvent, useEffect, useRef } from 'react';
import CRTWarp from './CRTWarp';

const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const isCompleteRef = useRef(false);

  useEffect(() => {
    const SCROLL_NEEDED = 2000; // Total scroll distance needed
    let rafId: number | null = null;
    
    const updatePhoto = () => {
      const wrap = photoWrapRef.current;
      if (!wrap) return;

      const progress = progressRef.current;
      
      // Photo rises from below (150vh to 0)
      const translateY = (1 - progress) * 150;
      
      // Photo scales up (0.2 to 1.3)
      const scale = 0.2 + (progress * 1.1);
      
      // Z-index
      const zIndex = Math.floor(progress * 50) + 10;
      
      wrap.style.position = 'absolute';
      wrap.style.bottom = '0';
      wrap.style.left = '50%';
      wrap.style.transform = `translate(-50%, ${translateY}vh) scale(${scale})`;
      wrap.style.zIndex = zIndex.toString();
      wrap.style.opacity = '1';
    };

    const handleWheel = (e: WheelEvent) => {
      // If animation already complete, allow natural scroll
      if (isCompleteRef.current) return;
      
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      
      // Only work when hero is visible
      if (rect.top > 0 || rect.bottom < 0) return;

      // Prevent default scroll
      e.preventDefault();
      
      // Update progress
      progressRef.current += e.deltaY / SCROLL_NEEDED;
      progressRef.current = Math.max(0, Math.min(1, progressRef.current));
      
      // Update visual
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePhoto);
      
      // Check if complete
      if (progressRef.current >= 1) {
        isCompleteRef.current = true;
        progressRef.current = 1;
        
        // Allow page to scroll after small delay
        setTimeout(() => {
          document.body.style.overflow = '';
        }, 100);
      }
    };

    const handleScroll = () => {
      // Reset when back at top
      if (window.scrollY === 0) {
        progressRef.current = 0;
        isCompleteRef.current = false;
        document.body.style.overflow = '';
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updatePhoto);
      }
    };
    
    // Initialize
    updatePhoto();
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="hero-v2">

      {/* ── CRTWarp full-screen background ── */}
      <div className="hero-v2__bg">
        <CRTWarp
          color="#F43F5E"
          backgroundColor="#0a0005"
          speed={0.5}
          curvature={0.2}
          scanlineStrength={0.15}
          scanlineFrequency={200}
          waveAmplitude={0.3}
          waveFrequency={2.5}
          bloom={1.6}
          bloomRadius={1.3}
          noise={0.04}
          vignette={0.5}
          brightness={1.1}
          pixelation={1}
          rgbShift={0.012}
          mouseReact={false}
          dpr={1}
          fps={30}
        />
      </div>

      {/* ── dark vignette overlay ── */}
      <div className="hero-v2__vignette" />

      {/* ── Sticky content wrapper ── */}
      <div className="hero-v2__sticky">
        {/* ── Centered text content ── */}
        <div className="hero-v2__content">
          <p
            className="hero-v2__label"
            style={{ animation: 'heroSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both' }}
          >
            Fitpreneur · Creator · Coach
          </p>

          <h1
            className="hero-v2__title"
            style={{ animation: 'heroSlideUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.25s both' }}
          >
            Build the Body.<br />
            Build the Business.<br />
            <span className="hero-v2__title-red">Build the Mind.</span>
          </h1>

          <p
            className="hero-v2__sub"
            style={{ animation: 'heroSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both' }}
          >
            654K+ followers. No filters. Only reality.
          </p>

          <div
            className="hero-v2__buttons"
            style={{ animation: 'heroSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both' }}
          >
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => scrollTo(e, 'contact')}
            >
              Book a 1:1 Call
            </a>
          </div>
        </div>

        {/* ── Bottom-center: Rohit photo (scroll-driven) ── */}
        <div
          ref={photoWrapRef}
          className="hero-v2__photo-wrap"
          style={{ willChange: 'transform, opacity' }}
        >
          <img
            src="/bg-photo-rohit.png"
            alt="Rohit Sah"
            className="hero-v2__photo"
          />
          {/* red glow under the photo */}
          <div className="hero-v2__photo-glow" />
        </div>

        {/* ── scroll hint ── */}
        <div
          className="hero-v2__scroll-hint"
          style={{ animation: 'heroSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) 1s both' }}
        >
          <span>Scroll</span>
          <div className="hero-v2__scroll-line" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
