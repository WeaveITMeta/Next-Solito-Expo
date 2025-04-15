import { jsx as _jsx } from "react/jsx-runtime";
import { Image } from 'expo-image';
import { forwardRef } from 'react';
import { useSolitoImage } from '../use-solito-image';
const SolitoImage = forwardRef(function Img(props, ref) {
    const { onLoadingComplete, onError, resizeMode = 'contain', ...imageProps } = useSolitoImage(props);
    return (_jsx(Image, { ...imageProps, placeholder: props.placeholder === 'blur' ? props.blurDataURL : undefined, resizeMode: resizeMode, onLoad: onLoadingComplete && ((e) => onLoadingComplete(e.source)), onError: onError, ref: ref, style: imageProps.style, contentPosition: props.contentPosition }));
});
export default SolitoImage;
//# sourceMappingURL=image.js.map