import { ImageConfigComplete } from './types';
export type ImageLoaderProps = {
    src: string;
    width: number;
    quality?: number;
};
export type ImageLoaderPropsWithConfig = ImageLoaderProps & {
    config: Readonly<ImageConfigComplete>;
};
export declare function defaultLoader({ config, src, width, quality, }: ImageLoaderPropsWithConfig): string;
//# sourceMappingURL=default-loader.d.ts.map