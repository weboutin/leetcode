/**
 * 2389. 和有限的最长子序列
 * https://leetcode.cn/problems/longest-subsequence-with-limited-sum/
 */




/**
 * 76ms  92.31%
 * 42.9MB  100.00%
 */
var answerQueries = function (nums, queries) {

    const ans = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < queries.length; i++) {


        let tmp = 0
        let count = 0;

        for (let j = 0; j < nums.length; j++) {

            tmp += nums[j]
            if (tmp <= queries[i]) {
                count++
            } else {
                break
            }
        }

        ans.push(count)


    }

    return ans

};


nums = [4,5,2,1], queries = [3,10,21]
nums = [2,3,4,5], queries = [1]

ans = answerQueries(nums, queries)

console.log(ans)