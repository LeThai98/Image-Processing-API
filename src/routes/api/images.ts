import express from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
import promises from 'fs/promises';

const image = express.Router();

image.get('/', async (req: express.Request, res: express.Response) => {
    try {
        let imageName = (req.query?.name ?? '') as string;
        let width = req.query?.width as string;
        let height = req.query?.height as string;
        console.log(imageName, width, height);

        if (isNumeric(width) && isNumeric(height)) {
            const imageWidth = parseInt(width);
            const imageHeight = parseInt(height);
            const thumpPath: string = resizedImageThumpPath(
                imageName,
                imageWidth,
                imageHeight
            );

            if (!fs.existsSync(thumpPath)) {
                const buffer = await resizeImage(
                    imageName,
                    imageWidth,
                    imageHeight
                );
                await promises.writeFile(thumpPath, buffer);
            }
            res.sendFile(path.resolve(thumpPath));
        } else {
            res.render('Error', {
                message: 'The inputed URL is not correct !!!.',
            });
        }
    } catch (error) {
        console.log(error);
        res.render('Error', { message: 'The error from Server!!!.' });
    }
});

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

let isNumeric = (value: string): boolean => {
    return !isNaN(Number(value));
};

export default image;
