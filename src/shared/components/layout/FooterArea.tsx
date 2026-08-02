'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';
import { PreFooterCta } from './PreFooterCta';
import { StudioSection } from './StudioSection';

const HIDE_MARKETING_CTAS = new Set([
  '/privacy-policy',
  '/terms-of-service',
  '/contact',
  '/services',
  '/about',
]);

export function FooterArea() {
  const pathname = usePathname();
  const isServiceDetail = pathname.startsWith('/services/');
  const hideMarketing =
    HIDE_MARKETING_CTAS.has(pathname) || isServiceDetail || pathname.startsWith('/projects');
  const showPreFooter = !hideMarketing || isServiceDetail;

  return (
    <>
      {!hideMarketing && <StudioSection />}
      {showPreFooter && <PreFooterCta />}
      <Footer />
    </>
  );
}
