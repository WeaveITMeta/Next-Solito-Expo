import { useCallback } from 'react';
import { useRouter } from './use-router';
import { usePathname } from './use-pathname';
import { useSearchParams } from 'next/navigation';
export default function () {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    return useCallback((params, options) => {
        const next = new URLSearchParams(searchParams?.toString());
        let shouldReplace = false;
        Object.entries(params).forEach(([key, value]) => {
            if (next.has(key)) {
                shouldReplace = true;
            }
            if (value == null) {
                next.delete(key);
            }
            else {
                next.set(key, value);
            }
        });
        const action = router[options?.webBehavior ?? (shouldReplace ? 'replace' : 'push')];
        const stringifiedNext = next.toString();
        action(`${pathname}${stringifiedNext ? `?${stringifiedNext}` : ''}`);
    }, [router]);
}
//# sourceMappingURL=use-update-search-params.js.map