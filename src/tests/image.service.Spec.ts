import { resizeImage } from '../../utils/image.service';

describe('Testing image service', () => {
    it('Return the correct image if provide the correct name of image', async () => {
        await expectAsync(resizeImage('HoChiMinh', 200, 200)).toBeResolved();
    });

    // it('Throws an error if provided a wrong image name', async () => {
    //     await expectAsync(resizeImage('HaNoi', 400, 400)).toBeRejectedWith(
    //         new Error(
    //             'Input file is missing: D:LearningJavascript FullstackProjectImage-Processing-APIsrcPublicImage\fullHaNoi.jpg'
    //         )
    //     );
    // });

    //   it('Throws an error if provided a wrong image name', async () => {
    //     await expectAsync(resizeImage('HaNoi', 400, 400)).toBeRejectedWithError(
    //       Error,
    //       'Input file is missing: D:\Learning\Javascript Fullstack\Project\Image-Processing-API\src\Public\Image\full\HaNoi.jpg'
    //     );
    //   });
});
