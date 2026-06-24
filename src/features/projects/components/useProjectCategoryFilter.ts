import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ServiceCategorySlug } from '@/shared/constants/categories';
import { isServiceCategorySlug } from '@/shared/constants/categories';

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
