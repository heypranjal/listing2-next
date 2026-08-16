'use client';

export default function HeroSlideshow() {
  return (
    <>
      <div className="cp-hero__slides" aria-hidden="true">
        <div
          className="cp-hero__slide cp-hero__slide--active"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0d0f1c 0%, #1a1d2e 100%)',
          }}
        >
          <div style={{
            textAlign: 'center',
            opacity: 0.35,
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C9A15C" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <p style={{ color: '#C9A15C', fontFamily: 'serif', fontSize: '0.85rem', marginTop: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Images Coming Soon
            </p>
          </div>
        </div>
      </div>
      <div className="cp-hero__slide-overlay" aria-hidden="true" />
    </>
  );
}
