import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ServiceCategorySlug } from '@/shared/constants/categories';
import { isServiceCategorySlug, SERVICE_CATEGORIES } from '@/shared/constants/categories';

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

export function useProjectCategoryFilter(): [ServiceCategorySlug | null, (category: ServiceCategorySlug | null) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const raw = searchParams.get('category');
  const active = isServiceCategorySlug(raw) ? raw : null;

  const setCategory = useCallback(
    (category: ServiceCategorySlug | null) => {
      setSearchParams(category ? { category } : {}, { replace: true });
    },
    [setSearchParams],
  );

  return [active, setCategory];
}
