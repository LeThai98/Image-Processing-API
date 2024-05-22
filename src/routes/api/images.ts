import express from 'express';
import path from 'path';
import fs from 'fs';
import promises from 'fs/promises';
import { resizeImage, resizedImageThumpPath } from '../../../utils/image.service';

const image = express.Router();

image.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const imageName = (req.query?.name ?? '') as string;
        const width = req.query?.width as string;
        const height = req.query?.height as string;
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
    } catch (error: any) {
        console.log(error);
        res.render('Error', { message: 'The error from Server!!!.' });
    }
});

const isNumeric = (value: string): boolean => {
    return !isNaN(Number(value));
};

export default image;
