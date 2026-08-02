import { Reveal } from '@/shared/components/ui/Reveal';
import { ABOUT_LEADERSHIP, type LeadershipMember } from '../about.data';

function MemberCard({ member, delay }: { member: LeadershipMember; delay: number }) {
  const displayName = member.name.trim() || member.shortRole;

  return (
    <Reveal delay={delay}>
      <article className="about-leadership__card">
        <div className="about-leadership__media">
          {member.image ? (
            <img src={member.image} alt={displayName} loading="lazy" />
          ) : (
            <span className="about-leadership__monogram" aria-hidden="true">
              {member.shortRole}
            </span>
          )}
        </div>
        <div className="about-leadership__copy">
          <h3 className="about-leadership__name">{displayName}</h3>
          <p className="about-leadership__role">{member.role}</p>
          <p className="about-leadership__bio">{member.bio}</p>
          {member.linkedin ? (
            <a
              href={member.linkedin}
              className="about-leadership__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function AboutLeadership() {
  return (
    <section className="about-leadership section-x" aria-labelledby="about-leadership-heading">
      <div className="container">
        <Reveal>
          <div className="about-leadership__eyebrow-row">
            <span className="about-leadership__bar" aria-hidden="true" />
            <span className="about-leadership__eyebrow">Leadership</span>
          </div>
          <h2 id="about-leadership-heading" className="about-leadership__title">
            The people accountable for how we deliver.
          </h2>
          <p className="about-leadership__lead">
            Strategy, engineering, and operations sit with named owners—so clients always know who
            carries the decision.
          </p>
        </Reveal>

        <div className="about-leadership__grid">
          {ABOUT_LEADERSHIP.map((member, index) => (
            <MemberCard key={member.id} member={member} delay={index * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
