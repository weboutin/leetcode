/**
 * 888. 公平的糖果交换
 * https://leetcode.cn/problems/fair-candy-swap/
 */

/**
 * 464ms  29.82%
 * 46.44mb  53.51%
 */
var fairCandySwap = function (aliceSizes, bobSizes) {

    aliceSizes.sort((a, b) => a - b)
    bobSizes.sort((a, b) => a - b)


    const aliceSum = aliceSizes.reduce((a, b) => a + b)
    const bobSum = bobSizes.reduce((a, b) => a + b)

    const final = (aliceSum + bobSum) / 2

    for (let i = 0; i < aliceSizes.length; i++) {

        for (let j = 0; j < bobSizes.length; j++) {

            if ((aliceSum - aliceSizes[i] + bobSizes[j]) == final) {
                return [aliceSizes[i], bobSizes[j]]
            }

        }

    }

};

/**
 * 96ms  71.05%
 * 48.56mb  46.49%
 */
var fairCandySwap = function (aliceSizes, bobSizes) {

    const aliceSum = aliceSizes.reduce((a, b) => a + b)
    const bobSum = bobSizes.reduce((a, b) => a + b)

    const final = (aliceSum + bobSum) / 2

    const map = {}

    for (let i = 0; i < bobSizes.length; i++) {
        map[bobSizes[i]] = bobSizes[i]
    }

    for (let i = 0; i < aliceSizes.length; i++) {

        if (map[final - aliceSum + aliceSizes[i]] != undefined) {

            return [aliceSizes[i], map[final - aliceSum + aliceSizes[i]]]
        }

    }

};

aliceSizes = [1, 2, 5], bobSizes = [2, 4]
// aliceSizes = [1,1], bobSizes = [2,2]

ans = fairCandySwap(aliceSizes, bobSizes)
console.log(ans)