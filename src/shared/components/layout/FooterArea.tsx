'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';
import { PreFooterCta } from './PreFooterCta';
import { StudioSection } from './StudioSection';

const HIDE_MARKETING_CTAS = new Set(['/privacy-policy', '/terms-of-service', '/contact', '/services']);

/** Practice pages that keep the sitewide Next-step CTA instead of a slim detail banner. */
const SHOW_PRE_FOOTER = new Set(['/services/software-development']);

export function FooterArea() {
  const pathname = usePathname();
  const hideMarketing =
    HIDE_MARKETING_CTAS.has(pathname) ||
    pathname.startsWith('/services/') ||
    pathname.startsWith('/projects');
  const showPreFooter = !hideMarketing || SHOW_PRE_FOOTER.has(pathname);

  return (
    <>
      {!hideMarketing && <StudioSection />}
      {showPreFooter && <PreFooterCta />}
      <Footer />
    </>
  );
}
