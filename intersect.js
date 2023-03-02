/**
 * 350. 两个数组的交集 II
 * https://leetcode.cn/problems/intersection-of-two-arrays-ii/
 */
/**
 * hash表
 * 使用map做累加
 *  60ms
 *  42.4mb
 */
var intersect = function (nums1, nums2) {
    const map = new Map()
    const result = []
    nums1.forEach(e => {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1)
        } else {
            map.set(e, 1)
        }
    });

    nums2.forEach(e => {
        if (map.has(e)) {
            const k = map.get(e)
            if (k == 1) {
                map.delete(e)
            } else {
                map.set(e, k - 1)
            }
            result.push(e)
        }
    })
    return result
};


/**
 * 双指针 - for
 *  - 64ms
 *  - 41.8mb
 */
var intersect = function (nums1, nums2) {
    nums1 = nums1.sort()
    nums2 = nums2.sort()
    largthNums = []
    minNums = []
    if (nums1.length > nums2.length) {
        largthNums = nums1
        minNums = nums2
    } else {
        largthNums = nums2
        minNums = nums1
    }
    const result = []
    let k = 0
    for (let i = 0; i < minNums.length; i++) {
        for (let j = k; j < largthNums.length; j++) {
            if (minNums[i] == largthNums[j]) {
                result.push(minNums[i])
                k = j + 1
                break
            }
        }
    }
    return result
}

const nums1 = [4, 5, 9], nums2 = [9, 4, 9, 8, 4]
// 459
// 44899
// ->49
console.log(intersect(nums1, nums2))