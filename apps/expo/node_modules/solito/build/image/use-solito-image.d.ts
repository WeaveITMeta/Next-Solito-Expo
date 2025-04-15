import { ImageStyle } from 'expo-image';
import { ImageProps } from 'react-native';
import { SolitoImageProps } from './image.types';
export type UseSolitoImage = Pick<ImageProps, Extract<keyof ImageProps, keyof SolitoImageProps> | 'progressiveRenderingEnabled' | 'source' | 'accessible' | 'onLayout'> & {
    onLoadingComplete?: (info: {
        height: number;
        width: number;
    }) => void;
    onError?: () => void;
    style: Array<ImageStyle | undefined>;
};
export declare function useSolitoImage({ src, loader, width, height, quality, crossOrigin, referrerPolicy, alt, fill, onLoadingComplete, onError, loading, priority, placeholder, blurDataURL, sizes, style, onLayout, unoptimized, ...props }: SolitoImageProps): UseSolitoImage;
//# sourceMappingURL=use-solito-image.d.ts.map