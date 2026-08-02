import type { ServiceDetailContent } from './types';
import { PRACTICE_DETAILS } from './content';
import { DetailFaq } from './components/DetailFaq';
import { DetailHero } from './components/DetailHero';
import {
  AudienceSection,
  CapabilitiesSection,
  DetailBanner,
  ExcellenceSection,
  InsightsSection,
  InvolvesSection,
  OwnershipSection,
  RelatedPractices,
} from './components/DetailSections';
import { ProjectsSlider } from './components/ProjectsSlider';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ProcessSection } from './components/ProcessSection';
import { SolutionsSection } from './components/SolutionsSection';
import { StackSection } from './components/StackSection';
import { FeatureBand, UniqueModule } from './components/UniqueSections';

function relatedPractices(current: ServiceDetailContent, count = 3): ServiceDetailContent[] {
  const others = PRACTICE_DETAILS.filter((p) => p.slug !== current.slug);
  const idx = PRACTICE_DETAILS.findIndex((p) => p.slug === current.slug);
  const start = idx < 0 ? 0 : idx;
  const rotated = [...others.slice(start), ...others.slice(0, start)];
  return rotated.slice(0, count);
}

interface ServiceDetailPageProps {
  content: ServiceDetailContent;
}

export function ServiceDetailPage({ content }: ServiceDetailPageProps) {
  const theme = content.visual.theme;

  return (
    <div className="svc-detail-page" data-theme={theme}>
      <DetailHero content={content} />
      <InvolvesSection content={content} />
      <FeatureBand content={content} />
      <UniqueModule content={content} />
      {content.projectsCategory && (
        <ProjectsSlider category={content.projectsCategory} />
      )}
      <OwnershipSection content={content} />
      <AudienceSection content={content} />
      <PrinciplesSection content={content} />
      <ProcessSection content={content} />
      <StackSection content={content} />
      <CapabilitiesSection content={content} />
      <SolutionsSection content={content} />
      <ExcellenceSection content={content} />
      <DetailFaq items={content.faq} />
      {content.insights && <InsightsSection content={content} />}
      {!content.hideRelated && <RelatedPractices related={relatedPractices(content)} />}
      <DetailBanner content={content} />
    </div>
  );
}
