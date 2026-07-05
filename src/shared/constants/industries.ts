export const INDUSTRY_SLUGS = [
  'marketing-agencies',
  'transport-travel-hospitality',
  'on-demand-matching-platforms',
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export interface Industry {
  slug: IndustrySlug;
  label: string;
  navLabel: string;
  pitch: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'marketing-agencies',
    label: 'Marketing & Creative Agencies',
    navLabel: 'Marketing Agencies',
    pitch: 'A client-facing site built to convert, and the internal automations that keep reporting and lead intake running without extra headcount.',
    metaTitle: 'Web Design & Automation for Marketing Agencies | Silver Axis',
    metaDescription: 'Silver Axis builds conversion-focused websites and back-office automations for marketing agencies, from lead intake to daily reporting.',
    icon: 'bullhorn',
  },
  {
    slug: 'transport-travel-hospitality',
    label: 'Transport, Travel & Hospitality',
    navLabel: 'Transport & Hospitality',
    pitch: 'Booking, fleet, freight and dealership operations, replacing spreadsheets with systems built around how the business actually runs.',
    metaTitle: 'Software for Transport, Travel & Hospitality Businesses | Silver Axis',
    metaDescription: 'Silver Axis builds custom CRMs, booking platforms and freight marketplaces for transport, travel and hospitality operators.',
    icon: 'truck-fast',
  },
  {
    slug: 'on-demand-matching-platforms',
    label: 'On-Demand & Location-Matching Platforms',
    navLabel: 'Matching Platforms',
    pitch: 'Real-time, location-aware matching between two user groups, the same core engine behind delivery, services and community-response platforms.',
    metaTitle: 'On-Demand & Location-Matching Platform Development | Silver Axis',
    metaDescription: 'Silver Axis designs and builds real-time, location-based matching platforms connecting two user groups, from mobile app to automation backend.',
    icon: 'location-dot',
  },
];

export function isIndustrySlug(value: string | null | undefined): value is IndustrySlug {
  return INDUSTRY_SLUGS.includes(value as IndustrySlug);
}

export function getIndustryBySlug(slug: IndustrySlug): Industry {
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) throw new Error(`Unknown industry: ${slug}`);
  return industry;
}
