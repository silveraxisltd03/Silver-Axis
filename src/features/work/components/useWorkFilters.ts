import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { IndustrySlug } from '@/shared/constants/industries';
import { isIndustrySlug } from '@/shared/constants/industries';
import type { ServiceCategorySlug } from '@/shared/constants/categories';
import { isServiceCategorySlug } from '@/shared/constants/categories';

export function useWorkIndustryFilter(): [IndustrySlug | null, (industry: IndustrySlug | null) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const raw = searchParams.get('industry');
  const active = isIndustrySlug(raw) ? raw : null;

  const setIndustry = useCallback(
    (industry: IndustrySlug | null) => {
      setSearchParams(industry ? { industry } : {}, { replace: true });
    },
    [setSearchParams],
  );

  return [active, setIndustry];
}

/** Read-only: supports the `?service=` cross-link from Service detail pages. */
export function useWorkServiceFilter(): ServiceCategorySlug | null {
  const [searchParams] = useSearchParams();
  const raw = searchParams.get('service');
  return isServiceCategorySlug(raw) ? raw : null;
}
