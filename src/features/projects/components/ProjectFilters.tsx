import type { ServiceCategorySlug } from '@/shared/constants/categories';
import { SERVICE_CATEGORIES } from '@/shared/constants/categories';

interface ProjectFiltersProps {
  active: ServiceCategorySlug | null;
  onChange: (category: ServiceCategorySlug | null) => void;
}

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div className="filter-chips" role="tablist" aria-label="Filter projects by category">
      <button
        type="button"
        role="tab"
        aria-selected={active === null}
        className={`filter-chip${active === null ? ' filter-chip--active' : ''}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {SERVICE_CATEGORIES.map((cat) => (
        <button
          key={cat.slug}
          type="button"
          role="tab"
          aria-selected={active === cat.slug}
          className={`filter-chip${active === cat.slug ? ' filter-chip--active' : ''}`}
          onClick={() => onChange(cat.slug)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

