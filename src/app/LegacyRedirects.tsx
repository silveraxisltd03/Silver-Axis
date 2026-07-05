import { Navigate, useParams } from 'react-router-dom';
import { projectDetailPath } from '@/shared/constants/routes';

const LEGACY_CASE_STUDY_REDIRECTS: Record<string, string> = {
  'blackcat-marketing-website': 'blackcat-marketing-agency',
  'eod-report-automation': 'blackcat-marketing-agency',
  'ai-lead-intake-crm-automation': 'blackcat-marketing-agency',
  'whatsapp-automation-platform': 'trade-with-allah',
};

export function LegacyProjectSlugRedirect() {
  const { slug } = useParams<{ slug: string }>();
  const target = (slug && LEGACY_CASE_STUDY_REDIRECTS[slug]) || slug;
  return <Navigate to={projectDetailPath(target ?? '')} replace />;
}
