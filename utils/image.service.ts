import path from 'path';
import sharp from 'sharp';

const resizeImage = (
    name: string,
    width: number,
    height: number
): Promise<Buffer> => {
    return sharp(path.resolve(`src/Public/Image/full/${name}.jpg`))
        .resize({ width: width, height: height, fit: sharp.fit.cover })
        .toBuffer();
};

const resizedImageThumpPath = (
    name: string,
    width: number,
    height: number
): string => {
    return `src/Public/Image/thumbWithResize/${name}${height}x${width}.jpg`;
};

export { resizeImage, resizedImageThumpPath };