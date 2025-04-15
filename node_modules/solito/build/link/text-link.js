'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from 'react-native';
import { LinkCore } from './core';
function TextLink({ textProps, ...props }) {
    return (_jsx(LinkCore, { ...props, Component: Text, componentProps: { selectable: false, ...textProps } }));
}
export { TextLink };
//# sourceMappingURL=text-link.js.map