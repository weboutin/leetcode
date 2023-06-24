/**
 * 2418. 按身高排序
 * https://leetcode.cn/problems/sort-the-people/?envType=list&envId=bxbmnec
 */



/**
 * 76ms  85.96%
 * 46.4MB  13.75%
 */
var sortPeople = function (names, heights) {
    let map = {}
    for (let i = 0; i < names.length; i++) {
        map[heights[i]] = names[i]
    }

    heights.sort((a, b) => b - a)

    return heights.map(e => map[e])

};