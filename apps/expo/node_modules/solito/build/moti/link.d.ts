/// <reference types="react" />
import { MotiPressableProps } from 'moti/interactions';
import type { View } from 'react-native';
import { useLink, UseLinkProps } from '../link/use-custom-link';
export type MotiLinkProps = UseLinkProps & Omit<MotiPressableProps, keyof UseLinkProps | keyof Pick<ReturnType<typeof useLink>, 'href' | 'accessibilityRole'>>;
export declare const MotiLink: import("react").ForwardRefExoticComponent<UseLinkProps & Omit<MotiPressableProps, "replace" | "href" | "shallow" | "experimental" | "accessibilityRole" | "scroll" | "as"> & import("react").RefAttributes<View>>;
//# sourceMappingURL=link.d.ts.map