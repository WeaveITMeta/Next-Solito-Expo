import { GestureResponderEvent } from 'react-native';
import { useRouter } from './use-router';
export declare function useLink({ href, replace, experimental, }: {
    href: string;
    replace?: boolean;
} & Parameters<ReturnType<typeof useRouter>['replace']>[1]): {
    accessibilityRole: "link";
    onPress: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
    href: string;
};
//# sourceMappingURL=use-link.d.ts.map