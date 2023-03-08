/**
 * 605. 种花问题
 * https://leetcode.cn/problems/can-place-flowers/
 */

/**
 * 68ms  53.74%
 * 44.9MB  9.77%
 */
var canPlaceFlowers = function (flowerbed, n) {
    let canPlace = 0
    flowerbed = [0, ...flowerbed, 0]
    for (let i = 0; i < flowerbed.length; i++) {
        if (canPlace == n) {
            return true
        }
        if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0 && flowerbed[i] != 1) {
            flowerbed[i] = 1
            canPlace++
        }

    }
    return false
};


flowerbed = [1, 0, 0, 0, 1], n = 1

flowerbed = [1, 0, 0, 0, 1], n = 2

canPlaceFlowers(flowerbed, n)