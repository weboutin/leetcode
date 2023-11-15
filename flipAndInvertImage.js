/**
 * 832. 翻转图像
 * https://leetcode.cn/problems/flipping-an-image/
 */


/**
 * 64ms  79.41%
 * 41.87mb  62.74%
 */
var flipAndInvertImage = function (image) {

    for (let i = 0; i < image.length; i++) {

        for (let j = 0; j < Math.ceil(image[i].length / 2); j++) {
            let tmp = image[i][j] == 0 ? 1 : 0

            image[i][j] = image[i][image[i].length - 1 - j] == 0 ? 1 : 0

            image[i][image[i].length - 1 - j] = tmp

        }

    }
    return image
};