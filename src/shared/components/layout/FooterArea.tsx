'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';
import { PreFooterCta } from './PreFooterCta';
import { StudioSection } from './StudioSection';

const LEGAL_PATHS = new Set(['/privacy-policy', '/terms-of-service']);

export function FooterArea() {
  const pathname = usePathname();
  const isLegalPage = LEGAL_PATHS.has(pathname);

  return (
    <>
      {!isLegalPage && <StudioSection />}
      {!isLegalPage && <PreFooterCta />}
      <Footer />
    </>
  );
}
