import type { IndustrySlug } from '@/shared/constants/industries';
import { INDUSTRIES } from '@/shared/constants/industries';

interface IndustryFiltersProps {
  active: IndustrySlug | null;
  onChange: (industry: IndustrySlug | null) => void;
}

export function IndustryFilters({ active, onChange }: IndustryFiltersProps) {
  return (
    <div className="filter-chips" role="tablist" aria-label="Filter case studies by sector">
      <button
        type="button"
        role="tab"
        aria-selected={active === null}
        className={`filter-chip${active === null ? ' filter-chip--active' : ''}`}
        onClick={() => onChange(null)}
      >
        All sectors
      </button>
      {INDUSTRIES.map((industry) => (
        <button
          key={industry.slug}
          type="button"
          role="tab"
          aria-selected={active === industry.slug}
          className={`filter-chip${active === industry.slug ? ' filter-chip--active' : ''}`}
          onClick={() => onChange(industry.slug)}
        >
          {industry.navLabel}
        </button>
      ))}
    </div>
  );
}
