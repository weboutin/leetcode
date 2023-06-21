/**
 * 2032. 至少在两个数组中出现的值
 * https://leetcode.cn/problems/two-out-of-three/
 */




/**
 * 48ms  100.00%
 * 43.4MB  82.00%
 */
var twoOutOfThree = function (nums1, nums2, nums3) {

    let resultSet = new Set()

    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let set3 = new Set(nums3)

    set1.forEach(e => {
        if (set2.has(e)) {
            resultSet.add(e)
        }
        if (set3.has(e)) {
            resultSet.add(e)
        }
    })

    set2.forEach(e => {
        if (set3.has(e)) {
            resultSet.add(e)
        }
    })

    let result = []

    resultSet.forEach(e => result.push(e))

    return result

};


nums1 = [3, 1], nums2 = [2, 3], nums3 = [1, 2]


ans = twoOutOfThree(nums1, nums2, nums3)
console.log(ans)