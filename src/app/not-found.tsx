import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export default function NotFound() {
  return (
    <section className="section-x container page-section--lg" style={{ textAlign: 'center' }}>
      <h1 className="section-heading">Page not found.</h1>
      <p style={{ fontSize: '16px', lineHeight: 1.55, color: 'var(--color-muted)', margin: '16px 0 32px' }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href={ROUTES.home} className="btn-hero-primary btnW" style={{ display: 'inline-flex' }}>
        Back to home
      </Link>
    </section>
  );
}
