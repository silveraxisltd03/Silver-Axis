'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';
import { PreFooterCta } from './PreFooterCta';
import { StudioSection } from './StudioSection';

const HIDE_MARKETING_CTAS = new Set(['/privacy-policy', '/terms-of-service', '/contact', '/services']);

export function FooterArea() {
  const pathname = usePathname();
  const hideMarketing =
    HIDE_MARKETING_CTAS.has(pathname) ||
    pathname.startsWith('/services/') ||
    pathname.startsWith('/projects');

  return (
    <>
      {!hideMarketing && <StudioSection />}
      {!hideMarketing && <PreFooterCta />}
      <Footer />
    </>
  );
}
