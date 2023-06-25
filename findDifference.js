/**
 * 2215. 找出两数组的不同
 * https://leetcode.cn/problems/find-the-difference-of-two-arrays/?envType=list&envId=bxbmnec
 */


/**
 * 76ms  98.59%
 * 47.7MB  37.56%
 */
var findDifference = function (nums1, nums2) {

  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  let result1Set = new Set()
  let result2Set = new Set()

  for (let i = 0; i < nums1.length; i++) {
    if (!set2.has(nums1[i])) {
      result1Set.add(nums1[i])
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!set1.has(nums2[i])) {
      result2Set.add(nums2[i])
    }
  }


  return [Array.from(result1Set), Array.from(result2Set)]



};