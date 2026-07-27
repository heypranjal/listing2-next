import type { Property } from '@/lib/types';
import { getFeaturedImage, getFilterType, getInitials } from '@/lib/types';

interface Props {
  property: Property;
}

export default function ListingCard({ property }: Props) {
  const name = property.title.rendered;
  const slug = property.slug;
  const type = property.meta.property_type || 'Residential';
  const status = property.meta.status || 'Available';
  const image = getFeaturedImage(property);
  const filterType = getFilterType(type);
  const initials = getInitials(name);

  return (
    <a href={`/${slug}/`} className="cp-listing-card cp-listing-card--linked" data-type={filterType}>
      <div className="cp-listing-card__img">
        <div className="cp-listing-card__img-border" />
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
        ) : (
          <>
            <div className="cp-listing-card__img-watermark" aria-hidden="true">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="38" stroke="#C9A15C" strokeWidth="1"/>
                <polygon points="40,4 42,38 76,40 42,42 40,76 38,42 4,40 38,38" fill="none" stroke="#C9A15C" strokeWidth="1"/>
                <circle cx="40" cy="40" r="4" fill="#C9A15C"/>
              </svg>
            </div>
            <div className="cp-listing-card__img-icon">
              <span className="cp-listing-card__img-initials">{initials}</span>
              <span className="cp-listing-card__img-label">Image Coming Soon</span>
            </div>
          </>
        )}
      </div>
      <div className="cp-listing-card__body">
        <span className="cp-listing-card__type">&#9632; {type}</span>
        <h3 className="cp-listing-card__name">{name}</h3>
        <div className="cp-listing-card__footer">
          <span className="cp-listing-card__enquire">
            View Details{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
          <span className="cp-listing-card__status">{status}</span>
        </div>
      </div>
    </a>
  );
}
