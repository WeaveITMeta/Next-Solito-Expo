import { TextProps } from 'react-native';
import { LinkCoreProps } from './LinkCoreProps';
type TextLinkProps = LinkCoreProps & {
    textProps?: TextProps;
};
declare function TextLink({ textProps, ...props }: TextLinkProps): import("react/jsx-runtime").JSX.Element;
export { TextLink };
export type { TextLinkProps };
//# sourceMappingURL=text-link.d.ts.map