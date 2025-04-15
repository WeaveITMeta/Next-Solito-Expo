import { useSearchParams } from 'next/navigation';
export default () => {
    // need to cast this type to appease TS, idk why
    return useSearchParams();
};
//# sourceMappingURL=use-next-search-params.js.map