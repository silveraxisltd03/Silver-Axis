'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ServiceCategorySlug } from '@/shared/constants/categories';
import { isServiceCategorySlug } from '@/shared/constants/categories';

export function useProjectCategoryFilter(): [
  ServiceCategorySlug | null,
  (category: ServiceCategorySlug | null) => void,
] {
  const router = useRouter();
  const searchParams = useSearchParams();

  const raw = searchParams.get('category');
  const active = isServiceCategorySlug(raw) ? raw : null;

  const setCategory = useCallback(
    (category: ServiceCategorySlug | null) => {
      const href = category ? `/projects?category=${category}` : '/projects';
      router.replace(href, { scroll: false });
    },
    [router],
  );

  return [active, setCategory];
}
