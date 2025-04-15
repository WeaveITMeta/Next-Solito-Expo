'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { MotiPressable } from 'moti/interactions';
import { forwardRef } from 'react';
import { useLink } from '../app/navigation/use-link';
export const MotiLink = forwardRef((props, ref) => {
    const { onPress, ...linkProps } = useLink(props);
    return (_jsx(MotiPressable, { ...props, ...linkProps, onPress: (e) => {
            // @ts-expect-error no event argument
            // we let users pass an onPress prop, in case they want to preventDefault()
            props.onPress?.(e);
            onPress(e);
        }, ref: ref }));
});
MotiLink.displayName = 'MotiLink';
//# sourceMappingURL=app.js.map