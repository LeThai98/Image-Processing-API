import express  from 'express';
import fs from 'fs';
import path from 'path';
import images from './api/images';

const router = express.Router();

router.get('/', (req : express.Request, res: express.Response) => {

    const imageNames : string[] = fs.readdirSync(path.resolve('src/Public/Image/full')).map((filename) => 
        filename.substring(0, filename.length - 4));
    
    // render a view template and send the resulting HTML to the client. =>Express will look for ./Template/index.ejs
    res.render('index', {imageNames: imageNames});
});

router.use('/image', images);

export default router;

