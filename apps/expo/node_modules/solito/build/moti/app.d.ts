/// <reference types="react" />
import { MotiPressableProps } from 'moti/interactions';
import type { View } from 'react-native';
import { useLink } from '../app/navigation/use-link';
type UseLinkProps = Parameters<typeof useLink>[0];
export type MotiLinkProps = UseLinkProps & Omit<MotiPressableProps, keyof UseLinkProps | keyof Pick<ReturnType<typeof useLink>, 'href' | 'accessibilityRole'>>;
export declare const MotiLink: import("react").ForwardRefExoticComponent<{
    href: string;
    replace?: boolean | undefined;
} & import("next/dist/shared/lib/app-router-context.shared-runtime").NavigateOptions & {
    experimental?: {
        nativeBehavior?: undefined;
    } | {
        nativeBehavior: "stack-replace";
        isNestedNavigator: boolean;
    } | undefined;
} & Omit<MotiPressableProps, "replace" | "href" | "experimental" | "accessibilityRole" | "scroll"> & import("react").RefAttributes<View>>;
export {};
//# sourceMappingURL=app.d.ts.map