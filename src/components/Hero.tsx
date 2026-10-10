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

  useEffect(() => {
    let accumulatedScroll = 0;
    const MAX_PHOTO_SCROLL = 1500; // Amount of scroll needed to fully reveal photo
    let isPhotoComplete = false;
    
    const updatePhotoPosition = () => {
      const wrap = photoWrapRef.current;
      if (!wrap) return;

      // Progress: 0 (small/hidden) → 1 (fully enlarged)
      const progress = Math.min(accumulatedScroll / MAX_PHOTO_SCROLL, 1);
      
      // Photo translateY: starts WAY below (150vh), rises to final position (0)
      const translateY = (1 - progress) * 150;
      
      // Scale: starts tiny at 0.2 and grows to 1.3
      const scale = 0.2 + (progress * 1.1);
      
      // z-index increases as photo grows
      const zIndex = Math.floor(progress * 50) + 10;
      
      // Opacity: always 1, no fade effect
      const opacity = 1;
      
      // Always absolute - photo is part of hero section
      wrap.style.position = 'absolute';
      wrap.style.bottom = '0';
      wrap.style.left = '50%';
      wrap.style.transform = `translate(-50%, ${translateY}vh) scale(${scale})`;
      wrap.style.zIndex = zIndex.toString();
      wrap.style.opacity = opacity.toString();
    };

    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInHeroView = rect.top <= 0 && rect.bottom > window.innerHeight * 0.5;
      
      // Only hijack scroll when in hero section and photo not at final size
      if (isInHeroView && !isPhotoComplete) {
        e.preventDefault();
        
        // Accumulate scroll for photo animation (bidirectional)
        accumulatedScroll += e.deltaY;
        accumulatedScroll = Math.max(0, Math.min(MAX_PHOTO_SCROLL, accumulatedScroll));
        
        updatePhotoPosition();
        
        // Release scroll lock when photo reaches perfect size
        if (accumulatedScroll >= MAX_PHOTO_SCROLL) {
          isPhotoComplete = true;
        } else {
          isPhotoComplete = false;
        }
      }
    };

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      
      // If coming back into hero view from below, allow photo to reverse
      if (rect.top > -100 && rect.top < window.innerHeight) {
        if (accumulatedScroll > 0 && window.scrollY < 100) {
          isPhotoComplete = false;
        }
      }
      
      // If at very top, reset everything
      if (window.scrollY === 0) {
        accumulatedScroll = 0;
        isPhotoComplete = false;
        updatePhotoPosition();
      }
    };
    
    // Initial state
    updatePhotoPosition();
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
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
