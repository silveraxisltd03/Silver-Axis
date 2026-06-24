import { Link } from 'react-router-dom';
import { PageMeta } from '@/shared/components/seo/PageMeta';
import { HeroBand } from '@/shared/components/ui/HeroBand';
import { ArrowUR } from '@/shared/components/ui/icons';
import { Reveal } from '@/shared/components/ui/Reveal';
import { projectsFilteredPath, serviceDetailPath } from '@/shared/constants/routes';
import { SERVICE_ITEMS } from '@/shared/content/services';
import { css } from '@/shared/lib/css';
import { BulletList } from './components/BulletList';

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services"
        description="AI automation, web and mobile apps, and custom systems. The right blend of AI and engineering from Silver Axis."
      />

      <HeroBand
        title="Automation, software, and systems. Under one roof."
        subtitle="The right blend of AI and engineering. We automate what should be automated, build the rest by hand, and make it scale."
      />

      {SERVICE_ITEMS.map((service, index) => {
        const imageTile = (
          <div className="tile" style={css('border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:rgb(212,227,251);box-shadow:0 14px 40px rgba(28,50,110,.08);height:380px;')}>
            <img
              src={service.image}
              alt={service.imageAlt}
              style={css(`width:100%;height:100%;object-fit:${service.imageFit};display:block;`)}
            />
          </div>
        );

        const textBlock = (
          <div>
            <span style={css('font-size:13px;font-weight:600;color:#2a6bff;letter-spacing:.02em;')}>{service.number} · {service.label}</span>
            <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(28px,3.4vw,44px);line-height:1.08;letter-spacing:-.02em;font-weight:500;margin:14px 0 16px;color:#0b1020;")}>{service.title}</h2>
            <p style={css('font-size:16.5px;line-height:1.6;color:#6b7488;margin:0 0 26px;')}>{service.description}</p>
            <BulletList items={service.bullets} />
            <div style={css('display:flex;align-items:center;gap:24px;margin-top:24px;flex-wrap:wrap;')}>
              <Link
                to={serviceDetailPath(service.slug)}
                className="caseLink"
                style={css('display:inline-flex;align-items:center;gap:7px;font-size:15px;font-weight:600;color:#2a6bff;')}
              >
                View more<ArrowUR />
              </Link>
              <Link
                to={projectsFilteredPath(service.slug)}
                className="caseLink"
                style={css('display:inline-flex;align-items:center;gap:7px;font-size:15px;font-weight:600;color:#2a6bff;')}
              >
                View case studies<ArrowUR />
              </Link>
            </div>
          </div>
        );

        const altLayout = index % 2 === 1;

        return (
          <section key={service.slug} className="section-x container" style={css(`padding:${index === 0 ? '110px' : '90px'} 0 ${index === SERVICE_ITEMS.length - 1 ? '100px' : '0'};`)}>
            <Reveal>
              <div className={`grid-2 grid-2--wide${altLayout ? ' grid-2-alt' : ''}`}>
                {altLayout ? (
                  <>
                    <div style={css('order:2;')}>{textBlock}</div>
                    <div style={css('order:1;')}>{imageTile}</div>
                  </>
                ) : (
                  <>
                    {imageTile}
                    {textBlock}
                  </>
                )}
              </div>
            </Reveal>
          </section>
        );
      })}

    </>
  );
}
