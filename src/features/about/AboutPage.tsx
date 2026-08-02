import { AboutBannerCta } from './components/AboutBannerCta';
import { AboutFaq } from './components/AboutFaq';
import { AboutHero } from './components/AboutHero';
import { AboutIntro } from './components/AboutIntro';
import { AboutLeadership } from './components/AboutLeadership';
import { AboutMission } from './components/AboutMission';
import { AboutPrinciples } from './components/AboutPrinciples';
import { AboutStandards } from './components/AboutStandards';

export function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutIntro />
      <AboutMission />
      <AboutPrinciples />
      <AboutLeadership />
      <AboutStandards />
      <AboutFaq />
      <AboutBannerCta />
    </div>
  );
}
