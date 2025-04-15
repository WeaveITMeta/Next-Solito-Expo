import { ViewProps } from 'react-native';
import { LinkCoreProps } from './LinkCoreProps';
type LinkProps = LinkCoreProps & {
    viewProps?: ViewProps;
};
declare function Link({ viewProps, ...props }: LinkProps): import("react/jsx-runtime").JSX.Element;
export { Link };
export type { LinkProps };
//# sourceMappingURL=link.d.ts.map