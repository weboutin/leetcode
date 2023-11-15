/**
 * 1299. 将每个元素替换为右侧最大元素
 * https://leetcode.cn/problems/replace-elements-with-greatest-element-on-right-side/description/
 */



/**
 * 156ms  81.18%
 * 49.10mb  25.88%
 */
var replaceElements = function (arr) {

    let max = -1

    for (let i = arr.length - 1; i >= 0; i--) {

        let tmp = arr[i]

        arr[i] = max

        max = Math.max(tmp, max)

    }

    return arr

};