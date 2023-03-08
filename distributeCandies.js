/**
 * 575. 分糖果
 * https://leetcode.cn/problems/distribute-candies/
 */


/**
 * 92ms  96.32%
 * 54.9MB 72.58%
 */

var distributeCandies = function (candyType) {

    const s = new Set(candyType)


    let eat = 0
    let type = 0

    for (let i = 0; i < s.size; i++) {
        if (eat >= candyType.length / 2) {
            break
        }
        type++
        eat++

    }

    return type

};



/**
 * 104ms  75.25%
 * 54.8MB  80.60%
 */
var distributeCandies = function (candyType) {

    const s = new Set(candyType)

    return Math.min(s.size, candyType.length / 2)

};


candyType = [1, 1, 2, 2, 3, 3]
// candyType = [6, 6, 6, 6]
// candyType = [1, 1, 2, 3]


s = distributeCandies(candyType)
console.log(s)