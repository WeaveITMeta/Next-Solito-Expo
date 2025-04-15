import { ReadonlyURLSearchParams } from 'next/navigation';
export declare function useSearchParams<Type extends Record<string, string>>(): ((ReadonlyURLSearchParams & {
    get: (key: keyof Type) => string | null;
    getAll: (key: keyof Type) => string[];
    has: (key: keyof Type) => boolean;
}) | undefined) | URLSearchParams;
//# sourceMappingURL=use-search-params.d.ts.map