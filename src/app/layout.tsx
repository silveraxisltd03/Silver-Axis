import type { Metadata } from 'next';
import Script from 'next/script';
import { Footer } from '@/shared/components/layout/Footer';
import { Nav } from '@/shared/components/layout/Nav';
import { PageLoader } from '@/shared/components/layout/PageLoader';
import { PreFooterCta } from '@/shared/components/layout/PreFooterCta';
import { ScrollProgress } from '@/shared/components/layout/ScrollProgress';
import { ScrollToTop } from '@/shared/components/layout/ScrollToTop';
import { StudioSection } from '@/shared/components/layout/StudioSection';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Silver Axis',
    template: '%s, Silver Axis',
  },
  description: 'Silver Axis.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=clash-display@400,500,600&display=swap"
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body style={{ background: '#ffffff', color: '#0b1020', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <PageLoader />
        <ScrollProgress />
        <ScrollToTop />
        <Nav />
        <main id="main">{children}</main>
        <StudioSection />
        <PreFooterCta />
        <Footer />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
