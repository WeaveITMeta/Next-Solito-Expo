import { GestureResponderEvent } from 'react-native';
import { LinkCoreProps } from './LinkCoreProps';
export type UseLinkProps = Pick<LinkCoreProps, 'as' | 'shallow' | 'href' | 'scroll' | 'replace' | 'experimental'>;
export declare function useLink({ href, as, shallow, scroll, replace, experimental, }: UseLinkProps): {
    accessibilityRole: "link";
    onPress: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
    href: string;
};
//# sourceMappingURL=use-custom-link.d.ts.map