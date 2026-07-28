import HeroSlideshow from '@/components/HeroSlideshow';
import ListingCard from '@/components/ListingCard';
import { getAllProperties } from '@/lib/wordpress';

export default async function HomePage() {
  const properties = await getAllProperties();

  return (
    <>
      {/* ── Hero ── */}
      <section className="cp-hero" id="hero" aria-label="Hero">
        <HeroSlideshow />

        <div className="cp-hero__content">
          <div className="cp-container">
            <p className="cp-section-label sr-fade">Luxury Residential &amp; Commercial</p>
            <h1 className="cp-hero__brand sr-fade sr-delay-1">CAASAA PAANDORA</h1>
            <p className="cp-hero__tagline sr-fade sr-delay-2">A New Address for Living Well</p>
            <div className="cp-hero__ornament sr-fade sr-delay-3" aria-hidden="true">
              <div className="cp-hero__ornament-line" />
              <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'rotateSlow 8s linear infinite' }}>
                <polygon points="22,2 24,20 42,22 24,24 22,42 20,24 2,22 20,20" fill="none" stroke="#C9A15C" strokeWidth="1.5"/>
                <circle cx="22" cy="22" r="3" fill="#C9A15C"/>
              </svg>
              <div className="cp-hero__ornament-line" />
            </div>
          </div>
        </div>

        <div className="cp-hero__info-strip">
          <div className="cp-container">
            <div className="cp-hero__info-inner">
              <div className="cp-hero__info-block">
                <span className="label">Corporate Office</span>
                <span className="value">Tower Plaza, Sector 62, Noida — 201309</span>
              </div>
              <div className="cp-hero__info-block">
                <span className="label">Contact</span>
                <span className="value">+91 1800 000 000 &nbsp;|&nbsp; info@caasaapaandora.com</span>
              </div>
              <nav className="cp-hero__info-nav" aria-label="Quick Links">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </nav>
              <div className="cp-hero__typology" aria-label="Property Types">
                <span>Luxury Apartments</span>
                <span>4 &amp; 5 BHK</span>
                <span>Penthouses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="cp-stats" id="about" aria-label="Our Achievements">
        <div className="cp-stats__bg" aria-hidden="true" />
        <div className="cp-container">
          <div className="cp-stats__inner">
            <div className="cp-stats__item sr-fade">
              <div className="cp-stats__number" data-count="600" data-suffix="+">600+</div>
              <p className="cp-stats__label">Families Trust Us</p>
            </div>
            <div className="cp-stats__divider" aria-hidden="true" />
            <div className="cp-stats__item sr-fade sr-delay-1">
              <div className="cp-stats__number" data-count="2" data-suffix="+">2+</div>
              <p className="cp-stats__label">Landmark Projects Completed</p>
            </div>
            <div style={{ textAlign: 'center' }} aria-hidden="true">
              <svg className="cp-stats__emblem" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38" stroke="#C9A15C" strokeWidth="1" opacity="0.3"/>
                <circle cx="40" cy="40" r="28" stroke="#C9A15C" strokeWidth="0.8" opacity="0.2"/>
                <polygon points="40,4 42,38 76,40 42,42 40,76 38,42 4,40 38,38" fill="none" stroke="#C9A15C" strokeWidth="1.2"/>
                <circle cx="40" cy="40" r="5" fill="#C9A15C"/>
                <line x1="40" y1="4" x2="40" y2="14" stroke="#C9A15C" strokeWidth="2.5"/>
                <line x1="40" y1="66" x2="40" y2="76" stroke="#C9A15C" strokeWidth="2.5"/>
                <line x1="4" y1="40" x2="14" y2="40" stroke="#C9A15C" strokeWidth="2.5"/>
                <line x1="66" y1="40" x2="76" y2="40" stroke="#C9A15C" strokeWidth="2.5"/>
                <text x="40" y="45" textAnchor="middle" fill="#C9A15C" fontSize="10" fontFamily="serif" fontWeight="bold">N</text>
              </svg>
            </div>
            <div className="cp-stats__item sr-fade sr-delay-2">
              <div className="cp-stats__number" data-count="1" data-suffix="+">1+</div>
              <p className="cp-stats__label">Iconic Project in the City</p>
            </div>
            <div className="cp-stats__divider" aria-hidden="true" />
            <div className="cp-stats__item sr-fade sr-delay-3">
              <div className="cp-stats__number" data-count="3" data-suffix="+">3+</div>
              <p className="cp-stats__label">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Listings Grid (dynamic from WordPress) ── */}
      <section className="cp-listings" id="listings" aria-label="Property Listings">
        <div className="cp-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="cp-section-label sr-fade">Our Portfolio</span>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 className="cp-section-title sr-fade sr-delay-1">Property Listings</h2>
                <div className="cp-divider sr-fade sr-delay-2" aria-hidden="true" />
                <p style={{ color: 'var(--cp-white-70)', fontSize: '0.9rem', maxWidth: '520px', marginTop: '0.5rem' }} className="sr-fade sr-delay-3">
                  Explore our curated collection of residential, plot, commercial, and villa developments — each one a statement of design and enduring value.
                </p>
              </div>
            </div>
          </div>

          <div className="cp-listings__tabs" role="tablist" aria-label="Property Category Filter">
            <button className="cp-listings__tab active" data-filter="all" role="tab" aria-selected="true">
              All <span className="cp-listings__tab-count">{properties.length}</span>
            </button>
            <button className="cp-listings__tab" data-filter="residential" role="tab" aria-selected="false">Residential</button>
            <button className="cp-listings__tab" data-filter="plots" role="tab" aria-selected="false">Plots</button>
            <button className="cp-listings__tab" data-filter="commercial" role="tab" aria-selected="false">Commercial</button>
            <button className="cp-listings__tab" data-filter="duplex" role="tab" aria-selected="false">Duplex &amp; Villas</button>
          </div>

          <div className="cp-listings__grid" id="listings-grid">
            {properties.length > 0 ? (
              properties.map(property => (
                <ListingCard key={property.id} property={property} />
              ))
            ) : (
              <p style={{ color: 'var(--cp-white-70)', gridColumn: '1/-1', textAlign: 'center', padding: '3rem 0' }}>
                Properties loading — check back soon or <a href="#contact" style={{ color: 'var(--cp-gold)' }}>contact us</a>.
              </p>
            )}
          </div>

          <div id="listings-more-wrap" style={{ display: 'none', textAlign: 'center', marginTop: '2.5rem' }}>
            <button id="listings-more-btn" className="cp-pill-btn cp-pill-btn--outline">
              View More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="cp-testimonials" id="testimonials" aria-label="Client Testimonials">
        <div className="cp-container">
          <div className="cp-testimonials__inner">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="cp-section-label sr-fade">What Our Clients Say</span>
              <h2 className="cp-section-title sr-fade sr-delay-1">Words of Trust</h2>
              <div className="cp-divider cp-divider--center sr-fade sr-delay-2" aria-hidden="true" />
            </div>
            <span className="cp-testimonials__quote-icon" aria-hidden="true">&ldquo;</span>
            <div className="cp-testimonials__slides" aria-live="polite">
              {[
                { text: '"The entire buying and registration process was remarkably smooth and completely transparent. CAASAA PAANDORA\'s team walked us through every step with patience and professionalism we had never experienced before."', author: '— Rajiv & Sunita Mehta', city: 'New Delhi' },
                { text: '"From the very first site visit, we knew this was different. The quality of construction, the attention to detail in every corner — it truly lives up to the word \'luxury.\' We couldn\'t be happier with our home."', author: '— Arjun Kapoor', city: 'Mumbai' },
                { text: '"As an investor, I\'ve seen many projects, but CAASAA PAANDORA stands apart. The value appreciation has exceeded my expectations, and the management\'s integrity gives me complete confidence."', author: '— Priya Nair', city: 'Bengaluru' },
                { text: '"Living here has redefined what home means for us. The views, the amenities, the community — every morning feels like a privilege."', author: '— Vikram & Deepa Sharma', city: 'Noida' },
              ].map((t, i) => (
                <div key={i} className={`cp-testimonials__slide${i === 0 ? ' active' : ''}`} role="group" aria-label={`Testimonial ${i + 1}`}>
                  <blockquote><p className="cp-testimonials__text">{t.text}</p></blockquote>
                  <p className="cp-testimonials__author">{t.author}</p>
                  <p className="cp-testimonials__city">{t.city}</p>
                </div>
              ))}
            </div>
            <div className="cp-testimonials__nav" aria-label="Testimonial Navigation">
              <button className="cp-test-prev" aria-label="Previous Testimonial">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className="cp-test-next" aria-label="Next Testimonial">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="cp-contact" id="contact" aria-label="Contact Us">
        <div className="cp-container">
          <div className="cp-contact__inner">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="cp-section-label sr-fade">Reach Out</span>
              <h2 className="cp-contact__title sr-fade sr-delay-1">Get in Touch</h2>
              <div className="cp-divider cp-divider--center sr-fade sr-delay-2" aria-hidden="true" />
              <p className="cp-contact__subtitle sr-fade sr-delay-3">
                Whether you have a question about a listing, want to schedule a site visit, or need expert guidance — our team is here to help.
              </p>
            </div>
            <form className="cp-contact__form sr-fade" noValidate aria-label="Contact Form">
              <div className="cp-contact__form-grid">
                <div className="cp-contact__field">
                  <label className="cp-contact__label">Full Name <span aria-hidden="true">*</span></label>
                  <input type="text" className="cp-contact__input" placeholder="Your full name" required aria-required="true" />
                </div>
                <div className="cp-contact__field">
                  <label className="cp-contact__label">Phone Number <span aria-hidden="true">*</span></label>
                  <input type="tel" className="cp-contact__input" placeholder="+91 00000 00000" required aria-required="true" />
                </div>
                <div className="cp-contact__field">
                  <label className="cp-contact__label">Email Address</label>
                  <input type="email" className="cp-contact__input" placeholder="your@email.com" />
                </div>
                <div className="cp-contact__field">
                  <label className="cp-contact__label">Enquiry Type</label>
                  <select className="cp-contact__input cp-contact__select">
                    <option value="">— Select enquiry type —</option>
                    <option value="site-visit">Schedule a Site Visit</option>
                    <option value="price">Price &amp; Payment Plan</option>
                    <option value="brochure">Request Brochure</option>
                    <option value="investment">Investment Enquiry</option>
                    <option value="callback">Request a Callback</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div className="cp-contact__field cp-contact__field--full">
                  <label className="cp-contact__label">Select Property / Project</label>
                  <select className="cp-contact__input cp-contact__select">
                    <option value="">— Choose a property —</option>
                    <optgroup label="— Residential —">
                      {properties.filter(p => p.meta.property_type?.toLowerCase() === 'residential').map(p => (
                        <option key={p.id} value={p.title.rendered}>{p.title.rendered}</option>
                      ))}
                    </optgroup>
                    <optgroup label="— Plots —">
                      {properties.filter(p => p.meta.property_type?.toLowerCase().includes('plot')).map(p => (
                        <option key={p.id} value={p.title.rendered}>{p.title.rendered}</option>
                      ))}
                    </optgroup>
                    <optgroup label="— Commercial —">
                      {properties.filter(p => p.meta.property_type?.toLowerCase() === 'commercial').map(p => (
                        <option key={p.id} value={p.title.rendered}>{p.title.rendered}</option>
                      ))}
                    </optgroup>
                    <optgroup label="— Duplex &amp; Villas —">
                      {properties.filter(p => p.meta.property_type?.toLowerCase() === 'duplex').map(p => (
                        <option key={p.id} value={p.title.rendered}>{p.title.rendered}</option>
                      ))}
                    </optgroup>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div className="cp-contact__field cp-contact__field--full">
                  <label className="cp-contact__label">Message</label>
                  <textarea className="cp-contact__input cp-contact__textarea" placeholder="Tell us what you're looking for..." />
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <button type="submit" className="cp-pill-btn">
                  Submit Enquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
