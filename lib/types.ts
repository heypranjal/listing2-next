export interface NearbySchool {
  name: string;
  distance: string;
}

export interface PropertyMeta {
  price_range: string;
  location: string;
  property_type: string;
  status: string;
  developer: string;
  hero_tags: string[];
  highlights: string[];
  amenities: string[];
  phase_info: string;
  rera_lda: string;
  area_range: string;
  total_area: string;
  nearby_schools: NearbySchool[];
  gallery_images: string[];
  contact_phone: string;
  contact_email: string;
  brochure_url: string;
}

export interface Property {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  meta: PropertyMeta;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
  };
}

export function getFeaturedImage(property: Property): string {
  return property._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '';
}

export function getFilterType(propertyType: string): string {
  const t = propertyType.toLowerCase();
  if (t.includes('plot')) return 'plots';
  if (t.includes('villa') || t.includes('duplex')) return 'duplex';
  if (t.includes('commercial') || t.includes('office') || t.includes('shop')) return 'commercial';
  return 'residential';
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}
