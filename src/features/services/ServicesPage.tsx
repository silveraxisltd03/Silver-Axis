import { EngagementCta } from './components/EngagementCta';
import { FeaturedPractices } from './components/FeaturedPractices';
import { HowWeDeliver } from './components/HowWeDeliver';
import { ServicesBannerCta } from './components/ServicesBannerCta';
import { ServicesFaq } from './components/ServicesFaq';
import { ServicesHero } from './components/ServicesHero';
import { ServicesList } from './components/ServicesList';

export function ServicesPage() {
  return (
    <div className="services-page">
      <ServicesHero />
      <FeaturedPractices />
      <HowWeDeliver />
      <ServicesList />
      <EngagementCta />
      <ServicesFaq />
      <ServicesBannerCta />
    </div>
  );
}
