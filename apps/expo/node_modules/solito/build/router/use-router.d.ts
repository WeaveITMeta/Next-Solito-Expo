import type { NextRouter as NextRouterType } from 'next/router';
interface TransitionOptions {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
}
export declare function useRouter(): {
    push: (url: Parameters<NextRouterType['push']>[0], as?: Parameters<NextRouterType['push']>[1], transitionOptions?: TransitionOptions) => void;
    replace: (url: Parameters<NextRouterType['replace']>[0], as?: Parameters<NextRouterType['replace']>[1], transitionOptions?: TransitionOptions & {
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