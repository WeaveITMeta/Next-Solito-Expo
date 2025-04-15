import { jsx as _jsx } from "react/jsx-runtime";
import { MiddlewareContext } from './context';
export function SolitoProvider({ children, middleware, }) {
    return (_jsx(MiddlewareContext.Provider, { value: middleware, children: children }));
}
//# sourceMappingURL=provider.js.map