import { useNextAppDirRouter } from './use-next-router';
type NextRouterType = NonNullable<ReturnType<typeof useNextAppDirRouter>>;
export declare function useRouter(): {
    push: (url: Parameters<NextRouterType['push']>[0], navigateOptions?: Parameters<NextRouterType['push']>[1]) => void;
    replace: (url: Parameters<NextRouterType['replace']>[0], navigateOptions?: Parameters<NextRouterType['replace']>[1] & {
        experimental?: {
            nativeBehavior?: undefined;
        } | {
            nativeBehavior: 'stack-replace';
            isNestedNavigator: boolean;
        };
    }) => void;
    back: () => void;
    parseNextPath: (from: import("next/dist/shared/lib/router/router").Url) => string;
};
export {};
//# sourceMappingURL=use-router.d.ts.map