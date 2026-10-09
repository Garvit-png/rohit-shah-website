import { type MouseEvent } from 'react';

const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: 'smooth' });
};

const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <a
        href="#work-with-me"
        className="btn-floating"
        onClick={(e) => scrollTo(e, 'work-with-me')}
      >
        📞 Book a 1:1 Call
      </a>
    </div>
  );
};

export default FloatingCTA;
