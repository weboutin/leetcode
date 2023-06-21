/**
 * 1431. 拥有最多糖果的孩子
 * https://leetcode.cn/problems/kids-with-the-greatest-number-of-candies/
 */


/**
 * 64ms  66.25%
 * 41.6MB  14.61%
 */
var kidsWithCandies = function (candies, extraCandies) {

    let max = candies[0]

    let ans = []

    for (let i = 0; i < candies.length; i++) {
        max = Math.max(max, candies[i])
    }
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            ans.push(true)
        } else {
            ans.push(false)
        }
    }

    return ans

};

candies = [4, 2, 1, 1, 2], extraCandies = 1
// [true, false, false, false, false] 

candies = [12,1,12], extraCandies = 10
candies = [2,3,5,1,3], extraCandies = 3
ans = kidsWithCandies(candies, extraCandies)
console.log(ans)