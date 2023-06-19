
/**
 * 2363. 合并相似的物品
 * https://leetcode.cn/problems/merge-similar-items/
 */



/**
 * 96ms  62.50%
 * 46.2MB  95.83%
 */
var mergeSimilarItems = function (items1, items2) {

    let result = []

    for (let i = 0; i < items1.length; i++) {
        result[items1[i][0]] = items1[i][1]
    }

    for (let i = 0; i < items2.length; i++) {
        if (result[items2[i][0]] == undefined) {
            result[items2[i][0]] = items2[i][1]
        } else {
            result[items2[i][0]] = items2[i][1] + result[items2[i][0]]
        }
    }

    let ans = []
    for (let i = 0; i < result.length; i++) {

        if (result[i] != undefined) {
            ans.push([i, result[i]])
        }
    }

    return ans

};


items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]

ans = mergeSimilarItems(items1, items2)

console.log(ans)