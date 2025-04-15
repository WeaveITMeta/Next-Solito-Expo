import { ComponentProps } from 'react';
import FastImage from 'react-native-fast-image';
import { SolitoImageProps } from '../image.types';
export default function SolitoFastImage(props: Omit<SolitoImageProps, 'resizeMode' | 'style'> & Pick<ComponentProps<typeof FastImage>, 'style' | 'resizeMode' | 'testID'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=fast.d.ts.map