import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProperty, getAllPropertySlugs } from '@/lib/wordpress';
import { getFeaturedImage } from '@/lib/types';
import PropertyPage from '@/components/PropertyPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPropertySlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = await getProperty(slug);
  if (!property) return {};
  const name = property.title.rendered;
  const image = getFeaturedImage(property);
  return {
    title: `${name} — ${property.meta.property_type || 'Property'}, ${property.meta.location} | Caasaa Paandora`,
    description: property.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 155),
    openGraph: image ? { images: [image] } : undefined,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = await getProperty(slug);
  if (!property) notFound();
  return <PropertyPage property={property} />;
}
