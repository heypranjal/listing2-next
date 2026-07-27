import type { Property } from '@/lib/types';
import { getFeaturedImage } from '@/lib/types';

interface Props {
  property: Property;
}

const HIGHLIGHT_ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
];

export default function PropertyPage({ property }: Props) {
  const { meta } = property;
  const name = property.title.rendered;
  const heroImage = getFeaturedImage(property);
  const priceStart = meta.price_range?.split('–')[0]?.trim() ?? 'Contact';
  const phone = meta.contact_phone || '+91 97216 63366';
  const email = meta.contact_email || 'info@caasaapaandora.com';

  return (
    <div className="ctp-wrap">
      {/* ── Sticky Nav ── */}
      <nav className="ctp-sticky-nav" id="ctp-sticky-nav" aria-label="Property Page Navigation">
        <div className="cp-container">
          <div className="ctp-sticky-nav__inner">
            <div className="ctp-sticky-nav__brand">
              <span className="ctp-sticky-nav__name">{name}</span>
              {meta.price_range && (
                <span className="ctp-sticky-nav__price">₹{meta.price_range} · {meta.location}</span>
              )}
            </div>
            <div className="ctp-sticky-nav__links">
              <a href="#ct-about">About</a>
              {meta.highlights?.length > 0 && <a href="#ct-highlights">Highlights</a>}
              <a href="#ct-pricing">Pricing</a>
              <a href="#ct-location">Location</a>
              {meta.gallery_images?.length > 0 && <a href="#ct-gallery">Gallery</a>}
              <a href="#ct-contact" className="ctp-sticky-nav__cta">Enquire Now</a>
            </div>
            <button
              className="ctp-sticky-nav__mobile-cta"
              onClick={() => document.getElementById('ct-contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Enquire
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="ctp-hero" id="ct-hero">
        {heroImage && (
          <div
            className="ctp-hero__bg-img"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
        )}
        <div className="ctp-hero__overlay--full" aria-hidden="true" />
        <div className="ctp-hero__overlay" aria-hidden="true" />
        <div className="cp-container ctp-hero__container">
          <a href="/#listings" className="ctp-back-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            All Listings
          </a>
          <div className="ctp-hero__content">
            <div className="ctp-hero__tags">
              {(meta.hero_tags ?? [meta.property_type, meta.status].filter(Boolean)).map((tag, i) => (
                <span key={i} className={`ctp-tag ${i === 0 ? 'ctp-tag--plots' : 'ctp-tag--avail'}`}>
                  {i === 0 ? '■' : '●'} {tag}
                </span>
              ))}
              {meta.rera_lda && <span className="ctp-tag ctp-tag--lda">✓ {meta.rera_lda}</span>}
            </div>
            <h1 className="ctp-hero__title">{name}</h1>
            <p className="ctp-hero__sub">
              {meta.location}
              {meta.developer && <> &nbsp;·&nbsp; By {meta.developer}</>}
            </p>
            <div className="ctp-hero__bsp-row">
              <div className="ctp-hero__bsp-block">
                <span className="ctp-hero__bsp-lbl">Starting Price</span>
                <span className="ctp-hero__bsp-val" style={{ fontSize: '1rem' }}>
                  ₹{priceStart}<span className="ctp-hero__bsp-unit">/ sq.ft.</span>
                </span>
              </div>
              <div className="ctp-hero__divider-v" aria-hidden="true" />
              <div className="ctp-hero__bsp-block">
                <span className="ctp-hero__bsp-lbl">Type</span>
                <span className="ctp-hero__bsp-val" style={{ fontSize: '0.95rem' }}>{meta.property_type}</span>
              </div>
              <div className="ctp-hero__divider-v" aria-hidden="true" />
              <div className="ctp-hero__bsp-block">
                <span className="ctp-hero__bsp-lbl">Status</span>
                <span className="ctp-hero__bsp-val" style={{ fontSize: '0.95rem' }}>{meta.status}</span>
              </div>
            </div>
            <div className="ctp-hero__btns">
              <a href="#ct-contact" className="ctp-btn-primary">
                Enquire Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              {meta.brochure_url && (
                <a href={meta.brochure_url} className="ctp-btn-outline" target="_blank" rel="noopener noreferrer">
                  Download Brochure
                </a>
              )}
              {!meta.brochure_url && <a href="#ct-highlights" className="ctp-btn-outline">See Highlights</a>}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="ctp-section" id="ct-about">
        <div className="cp-container">
          <div className="ctp-section-head">
            <span className="cp-section-label">About the Project</span>
            <h2 className="ctp-section-title">{name}</h2>
            <div className="cp-divider" aria-hidden="true" />
          </div>
          <div className="ctp-about-grid">
            <div
              className="ctp-about-text"
              dangerouslySetInnerHTML={{ __html: property.excerpt.rendered || `<p>${name} is a premier residential project by ${meta.developer || 'a leading developer'}, located at ${meta.location}.</p>` }}
            />
            <div className="ctp-about-facts">
              {meta.property_type && (
                <div className="ctp-fact">
                  <span className="ctp-fact__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </span>
                  <div><p className="ctp-fact__label">Project Type</p><p className="ctp-fact__val">{meta.property_type}</p></div>
                </div>
              )}
              {meta.location && (
                <div className="ctp-fact">
                  <span className="ctp-fact__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <div><p className="ctp-fact__label">Location</p><p className="ctp-fact__val">{meta.location}</p></div>
                </div>
              )}
              {meta.phase_info && (
                <div className="ctp-fact">
                  <span className="ctp-fact__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                  </span>
                  <div><p className="ctp-fact__label">Phase / Availability</p><p className="ctp-fact__val">{meta.phase_info}</p></div>
                </div>
              )}
              {meta.price_range && (
                <div className="ctp-fact">
                  <span className="ctp-fact__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <div><p className="ctp-fact__label">Price Range</p><p className="ctp-fact__val">₹{meta.price_range} per Sq. Ft.</p></div>
                </div>
              )}
              {meta.status && (
                <div className="ctp-fact">
                  <span className="ctp-fact__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                  </span>
                  <div><p className="ctp-fact__label">Status</p><p className="ctp-fact__val">{meta.status}</p></div>
                </div>
              )}
              {meta.developer && (
                <div className="ctp-fact">
                  <span className="ctp-fact__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <div><p className="ctp-fact__label">Developer</p><p className="ctp-fact__val">{meta.developer}</p></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      {meta.highlights?.length > 0 && (
        <section className="ctp-section ctp-section--alt" id="ct-highlights">
          <div className="cp-container">
            <div className="ctp-section-head">
              <span className="cp-section-label">Why Choose This Project</span>
              <h2 className="ctp-section-title">Key Highlights</h2>
              <div className="cp-divider" aria-hidden="true" />
            </div>
            <div className="ctp-highlights-grid">
              {meta.highlights.map((h, i) => (
                <div key={i} className="ctp-highlight">
                  <div className="ctp-highlight__icon" aria-hidden="true">
                    {HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length]}
                  </div>
                  <h3 className="ctp-highlight__title">{h}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Pricing ── */}
      <section className="ctp-section" id="ct-pricing">
        <div className="cp-container">
          <div className="ctp-section-head">
            <span className="cp-section-label">Investment Details</span>
            <h2 className="ctp-section-title">Pricing</h2>
            <div className="cp-divider" aria-hidden="true" />
          </div>
          <div className="ctp-pricing-grid">
            <div className="ctp-price-card--main">
              <p className="ctp-price-card__label">Starting Price</p>
              <p className="ctp-price-card__val">₹{priceStart}</p>
              <p className="ctp-price-card__unit">per sq. ft.</p>
            </div>
            <div className="ctp-plc-card">
              <p className="ctp-plc-card__title">Pricing Overview</p>
              <table className="ctp-table">
                <tbody>
                  <tr><td>Price Range</td><td className="ctp-table__amt">₹{meta.price_range} / sq.ft.</td></tr>
                  <tr><td>Property Type</td><td className="ctp-table__amt">{meta.property_type}</td></tr>
                  {meta.area_range && <tr><td>Area Range</td><td className="ctp-table__amt">{meta.area_range}</td></tr>}
                  {meta.total_area && <tr><td>Total Area</td><td className="ctp-table__amt">{meta.total_area}</td></tr>}
                  {meta.phase_info && <tr><td>Availability</td><td className="ctp-table__amt">{meta.phase_info}</td></tr>}
                  <tr><td>Status</td><td className="ctp-table__amt">{meta.status}</td></tr>
                </tbody>
              </table>
              <p className="ctp-note">* Prices are indicative and subject to change. Contact us for the latest rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {meta.gallery_images?.length > 0 && (
        <section className="ctp-section ctp-section--alt" id="ct-gallery">
          <div className="cp-container">
            <div className="ctp-section-head">
              <span className="cp-section-label">Visual Tour</span>
              <h2 className="ctp-section-title">Gallery</h2>
              <div className="cp-divider" aria-hidden="true" />
            </div>
            <div className="ctp-gallery-grid">
              {meta.gallery_images.slice(0, 3).map((src, i) => (
                <div key={i} className={`ctp-gallery-item${i === 0 ? ' ctp-gallery-item--main' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${name} gallery ${i + 1}`} style={{ width: '100%', height: i === 0 ? '460px' : '220px', objectFit: 'cover', borderRadius: '14px' }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Location ── */}
      <section className={`ctp-section${meta.gallery_images?.length ? '' : ' ctp-section--alt'}`} id="ct-location">
        <div className="cp-container">
          <div className="ctp-section-head">
            <span className="cp-section-label">Where to Find Us</span>
            <h2 className="ctp-section-title">Location &amp; Connectivity</h2>
            <div className="cp-divider" aria-hidden="true" />
          </div>
          <div className="ctp-location-grid">
            <div>
              {meta.location && (
                <div className="ctp-location-item">
                  <span className="ctp-location-item__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <div>
                    <p className="ctp-location-item__label">Address</p>
                    <p className="ctp-location-item__val">{meta.location}</p>
                  </div>
                </div>
              )}
              {meta.developer && (
                <div className="ctp-location-item">
                  <span className="ctp-location-item__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  </span>
                  <div>
                    <p className="ctp-location-item__label">Developer</p>
                    <p className="ctp-location-item__val">{meta.developer}</p>
                  </div>
                </div>
              )}
              <div className="ctp-location-item">
                <span className="ctp-location-item__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                </span>
                <div>
                  <p className="ctp-location-item__label">Site Visit</p>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="ctp-btn-primary" style={{ marginTop: '0.5rem', display: 'inline-flex' }}>
                    Schedule a Visit
                  </a>
                </div>
              </div>
            </div>
            {meta.nearby_schools?.length > 0 && (
              <div>
                <h3 className="ctp-nearby-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  Nearby Educational Institutes
                </h3>
                <div className="ctp-tanya-schools">
                  {meta.nearby_schools.map((school, i) => (
                    <div key={i} className="ctp-tanya-school">
                      <span className="ctp-tanya-school__icon" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>
                      </span>
                      <div className="ctp-tanya-school__info">
                        <p className="ctp-tanya-school__name">{school.name}</p>
                      </div>
                      <span className="ctp-tanya-school__dist">{school.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="ctp-section ctp-section--dark" id="ct-contact">
        <div className="cp-container">
          <div className="ctp-contact-grid">
            <div className="ctp-contact-info">
              <span className="cp-section-label">Get in Touch</span>
              <h2 className="ctp-section-title">Enquire About {name}</h2>
              <div className="cp-divider" aria-hidden="true" />
              <div className="ctp-contact-item">
                <span className="ctp-contact-item__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                </span>
                <div>
                  <p className="ctp-contact-item__label">Phone</p>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="ctp-contact-item__val">{phone}</a>
                </div>
              </div>
              {email && (
                <div className="ctp-contact-item">
                  <span className="ctp-contact-item__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <div>
                    <p className="ctp-contact-item__label">Email</p>
                    <a href={`mailto:${email}`} className="ctp-contact-item__val">{email}</a>
                  </div>
                </div>
              )}
            </div>
            <div className="ctp-form-card">
              <form className="cp-contact__form" noValidate aria-label={`Enquire about ${name}`}>
                <div className="ctp-form__row">
                  <div className="ctp-form__group">
                    <label className="ctp-form__label">Full Name <span>*</span></label>
                    <input type="text" className="ctp-form__input" placeholder="Your full name" required />
                  </div>
                  <div className="ctp-form__group">
                    <label className="ctp-form__label">Phone <span>*</span></label>
                    <input type="tel" className="ctp-form__input" placeholder="+91 00000 00000" required />
                  </div>
                </div>
                <div className="ctp-form__group">
                  <label className="ctp-form__label">Email</label>
                  <input type="email" className="ctp-form__input" placeholder="your@email.com" />
                </div>
                <div className="ctp-form__group">
                  <label className="ctp-form__label">Property of Interest</label>
                  <select className="ctp-form__input ctp-form__select">
                    <option value={name} selected>{name}</option>
                    <option value="">Other Property</option>
                  </select>
                </div>
                <div className="ctp-form__group">
                  <label className="ctp-form__label">Message</label>
                  <textarea className="ctp-form__input ctp-form__textarea" placeholder={`I'm interested in ${name}...`} />
                </div>
                <button type="submit" className="ctp-form__submit">
                  Send Enquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                <p className="ctp-form__privacy">Your details are safe with us. No spam, ever.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
