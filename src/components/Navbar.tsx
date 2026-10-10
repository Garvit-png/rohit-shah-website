import { useState, useEffect, type MouseEvent } from 'react';

const NAV_HEIGHT = 64;

const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={(e) => scrollTo(e, 'home')}>
          ROHIT <span>SHAH</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a></li>
          <li><a href="#work-with-me" onClick={(e) => scrollTo(e, 'work-with-me')}>Work With Me</a></li>
          <li><a href="#ebooks" onClick={(e) => scrollTo(e, 'ebooks')}>eBooks</a></li>
          <li><a href="#mard-show" onClick={(e) => scrollTo(e, 'mard-show')}>The Mard Show</a></li>
          <li><a href="#transformations" onClick={(e) => scrollTo(e, 'transformations')}>Results</a></li>
          <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a></li>
        </ul>

        <a
          href="#work-with-me"
          className="btn-book-nav"
          onClick={(e) => scrollTo(e, 'work-with-me')}
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
