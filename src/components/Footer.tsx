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
            <div className="social-row">
              <a href="https://instagram.com/rohitfitpreneur" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="https://youtube.com" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
              <a href="https://threads.net/rohitfitpreneur" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Threads">TH</a>
              <a href="https://twitter.com" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">𝕏</a>
            </div>
          </div>

          {/* Nav */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a></li>
              <li><a href="#work-with-me" onClick={(e) => scrollTo(e, 'work-with-me')}>Work With Me</a></li>
              <li><a href="#mard-show" onClick={(e) => scrollTo(e, 'mard-show')}>The Mard Show</a></li>
              <li><a href="#transformations" onClick={(e) => scrollTo(e, 'transformations')}>Results</a></li>
              <li><a href="#collab" onClick={(e) => scrollTo(e, 'collab')}>Brand Collabs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://instagram.com/rohitfitpreneur" target="_blank" rel="noopener noreferrer">@rohitfitpreneur</a></li>
              <li><a href="https://instagram.com/themardshow" target="_blank" rel="noopener noreferrer">@themardshow</a></li>
              <li><a href="mailto:rohitfitwork@gmail.com">rohitfitwork@gmail.com</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact Form</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © 2025 <span>Rohit Sah</span>. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
