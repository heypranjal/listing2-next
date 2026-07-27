import type { Property } from './types';

const WP_BASE = process.env.WORDPRESS_API_URL ?? 'https://cms.caasaapaandora.com/wp-json';
const WP_API = `${WP_BASE}/wp/v2`;

export async function getAllProperties(): Promise<Property[]> {
  try {
    const res = await fetch(
      `${WP_API}/properties?per_page=100&_embed=wp:featuredmedia`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getProperty(slug: string): Promise<Property | null> {
  try {
    const res = await fetch(
      `${WP_API}/properties?slug=${slug}&_embed=wp:featuredmedia`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data: Property[] = await res.json();
    return data[0] ?? null;
  } catch {
    return null;
  }
}

export async function getAllPropertySlugs(): Promise<{ slug: string }[]> {
  const properties = await getAllProperties();
  return properties.map(p => ({ slug: p.slug }));
}
