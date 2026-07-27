export default function Footer() {
  return (
    <footer className="cp-footer" aria-label="Site Footer">
      <div className="cp-container">
        <div className="cp-footer__main">
          <div className="cp-footer__brand sr-fade">
            <a href="/" className="cp-footer__logo" aria-label="CAASAA PAANDORA">
              <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="22" cy="22" r="20" stroke="#C9A15C" strokeWidth="1.2" opacity="0.4"/>
                <polygon points="22,4 24.5,19.5 40,22 24.5,24.5 22,40 19.5,24.5 4,22 19.5,19.5" fill="none" stroke="#C9A15C" strokeWidth="1.2"/>
                <circle cx="22" cy="22" r="3" fill="#C9A15C"/>
              </svg>
              <span className="cp-footer__logo-wordmark">CAASAA PAANDORA</span>
            </a>
            <p className="cp-footer__tagline">&ldquo;A New Address for Living Well&rdquo;</p>
            <p style={{fontSize:'0.82rem',color:'rgba(13,15,28,0.55)',lineHeight:'1.7',maxWidth:'260px'}}>
              Redefining luxury living through thoughtfully crafted residences that blend elegance with purpose.
            </p>
          </div>

          <div className="sr-fade sr-delay-1">
            <h4 className="cp-footer__col-title">Corporate Office</h4>
            <address className="cp-footer__address" style={{fontStyle:'normal'}}>
              Tower Plaza, 14th Floor<br/>
              Business District, Sector 62<br/>
              Noida, Uttar Pradesh — 201309<br/>
              India
            </address>
          </div>

          <div className="sr-fade sr-delay-2">
            <h4 className="cp-footer__col-title">Say Hello</h4>
            <div className="cp-footer__contact-item">
              <span className="cp-footer__contact-label">Email</span>
              <a href="mailto:info@caasaapaandora.com" className="cp-footer__contact-value">info@caasaapaandora.com</a>
            </div>
            <div className="cp-footer__contact-item">
              <span className="cp-footer__contact-label">Phone</span>
              <a href="tel:+911800000000" className="cp-footer__contact-value">+91 1800 000 000</a>
            </div>
            <div className="cp-footer__contact-item">
              <span className="cp-footer__contact-label">Sales Enquiry</span>
              <a href="tel:+911800000001" className="cp-footer__contact-value">+91 1800 000 001</a>
            </div>
          </div>

          <div className="sr-fade sr-delay-3">
            <h4 className="cp-footer__col-title">Quick Links</h4>
            <ul className="cp-footer__links">
              <li><a href="/#hero">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#listings">Listings</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div className="sr-fade sr-delay-4">
            <h4 className="cp-footer__col-title">Typology</h4>
            <ul className="cp-footer__links">
              <li><a href="/#listings">Luxury Apartments</a></li>
              <li><a href="/#listings">4 BHK Residences</a></li>
              <li><a href="/#listings">5 BHK Penthouses</a></li>
              <li><a href="/#listings">Premium Villas</a></li>
              <li><a href="/#listings">Commercial Suites</a></li>
            </ul>
          </div>
        </div>

        <div className="cp-footer__bottom">
          <p className="cp-footer__copy">
            &copy; 2026 CAASAA PAANDORA. All rights reserved. &nbsp;|&nbsp;
            <a href="/privacy-policy" style={{color:'rgba(13,15,28,0.5)',fontSize:'0.8rem'}}>Privacy Policy</a>
          </p>
          <div className="cp-footer__socials">
            <a href="#" className="cp-footer__social" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="cp-footer__social" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a href="#" className="cp-footer__social" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="cp-footer__social" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.88 23 12 23 12s0-3.88-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
