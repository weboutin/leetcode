/**
 * LCP 72. 补给马车
 * https://leetcode.cn/problems/hqCnmP/
 */



/**
 * 96ms  37.50%
 * 46.20mb  37.50%
 */
var supplyWagon = function (supplies) {
    const targetLen = Math.floor(supplies.length / 2)


    while (supplies.length > targetLen) {

        let sumMax = Number.MAX_VALUE

        let firstIdx = 0

        for (let i = 0; i < supplies.length - 1; i++) {
            if (supplies[i] + supplies[i + 1] < sumMax) {
                sumMax = supplies[i] + supplies[i + 1]
                firstIdx = i
            }
        }

        supplies = supplies.slice(0, firstIdx).concat([sumMax]).concat(supplies.slice(firstIdx + 2, supplies.length))
    }



    return supplies

};

supplies = [7, 3, 6, 1, 8]

ans = supplyWagon(supplies)

console.log(ans)