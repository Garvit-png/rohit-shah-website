import { type MouseEvent } from 'react';

const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">
              ROHIT <span>SAH</span>
            </div>
            <p className="footer-brand-desc">
              Fitpreneur. Founder of The Mard Show. Helping young Indian men build the body,
              the business, and the mind — with no filter and zero shortcuts.
            </p>
            <p className="footer-email">
              <a href="mailto:rohitfitwork@gmail.com">rohitfitwork@gmail.com</a>
            </p>
          </div>

          {/* Nav */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a></li>
              <li><a href="#work-with-me" onClick={(e) => scrollTo(e, 'work-with-me')}>Work With Me</a></li>
              <li><a href="#ebooks" onClick={(e) => scrollTo(e, 'ebooks')}>eBooks</a></li>
              <li><a href="#mard-show" onClick={(e) => scrollTo(e, 'mard-show')}>The Mard Show</a></li>
              <li><a href="#transformations" onClick={(e) => scrollTo(e, 'transformations')}>Results</a></li>
            </ul>
          </div>

          {/* Instagram Links */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-insta-links">
              <a 
                href="https://www.instagram.com/rohitfitpreneur/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-insta-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <span className="insta-label">Rohit Sah</span>
                  <span className="insta-handle">@rohitfitpreneur</span>
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/sellixa._hq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-insta-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <span className="insta-label">Sellixa (Branding Partner)</span>
                  <span className="insta-handle">@sellixa._hq</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © 2025 <span>Rohit Sah</span>. All rights reserved.
          </p>
          <div className="footer-legal">
            <span>Branding by <a href="https://www.instagram.com/sellixa._hq/" target="_blank" rel="noopener noreferrer">Sellixa</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
