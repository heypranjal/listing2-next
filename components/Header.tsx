export default function Header() {
  return (
    <>
      <header className="cp-header" id="cp-header">
        <div className="cp-container">
          <div className="cp-header__inner">
            <a href="/" className="cp-logo" aria-label="CAASAA PAANDORA Home">
              <svg className="cp-logo__emblem" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="22" cy="22" r="20" stroke="#C9A15C" strokeWidth="1.2" opacity="0.4"/>
                <polygon points="22,4 24.5,19.5 40,22 24.5,24.5 22,40 19.5,24.5 4,22 19.5,19.5" fill="none" stroke="#C9A15C" strokeWidth="1.2"/>
                <circle cx="22" cy="22" r="3" fill="#C9A15C"/>
                <line x1="22" y1="4" x2="22" y2="9" stroke="#C9A15C" strokeWidth="2"/>
                <line x1="22" y1="35" x2="22" y2="40" stroke="#C9A15C" strokeWidth="2"/>
                <line x1="4" y1="22" x2="9" y2="22" stroke="#C9A15C" strokeWidth="2"/>
                <line x1="35" y1="22" x2="40" y2="22" stroke="#C9A15C" strokeWidth="2"/>
                <text x="22" y="26" textAnchor="middle" fill="#C9A15C" fontSize="5" fontFamily="serif" fontWeight="bold">N</text>
              </svg>
              <div className="cp-logo__text">
                <span className="cp-logo__wordmark">CAASAA PAANDORA</span>
                <span className="cp-logo__sub">Luxury Real Estate</span>
              </div>
            </a>
            <div className="cp-header__right">
              <button className="cp-qr-btn" aria-label="Scan QR Code" title="Scan QR Code">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                  <rect x="14" y="14" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/>
                  <rect x="14" y="18" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/>
                </svg>
              </button>
              <button className="cp-menu-btn" aria-label="Open Navigation Menu" aria-expanded="false" aria-controls="cp-nav-overlay">
                <span aria-hidden="true">&#9776;</span>
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="cp-nav-overlay" id="cp-nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation Menu">
        <button className="cp-nav-close" aria-label="Close Navigation">&#10005;</button>
        <div className="cp-nav-overlay__inner">
          <nav aria-label="Primary Navigation">
            <ul>
              <li><a href="/#hero">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#listings">Listings</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#gallery">Gallery</a></li>
              <li><a href="/#insights">Insights</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
