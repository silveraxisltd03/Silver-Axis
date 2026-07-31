export const SERVICE_CATEGORY_SLUGS = [
  'ai-automation',
  'web-mobile',
  'custom-systems',
] as const;

export type ServiceCategorySlug = (typeof SERVICE_CATEGORY_SLUGS)[number];

export interface ServiceCategory {
  slug: ServiceCategorySlug;
  label: string;
  navLabel: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { slug: 'ai-automation', label: 'AI Automation', navLabel: 'AI Automation' },
  { slug: 'web-mobile', label: 'Web & Mobile', navLabel: 'Web & Mobile' },
  { slug: 'custom-systems', label: 'Custom Systems', navLabel: 'CRM, ERP & internal tools' },
];
