/**
 * 1370. 上升下降字符串
 * https://leetcode.cn/problems/increasing-decreasing-string/?envType=list&envId=bxbmnec
 */


/**
 * 68ms  89.09%
 * 44.2MB  80.00%
 */
var sortString = function (s) {

  let arr = []

  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt() - 97
    if (arr[idx] == undefined) {
      arr[idx] = 1
    } else {
      arr[idx]++
    }
  }


  let n = s.length

  let result = ''

  while (n > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != undefined && arr[i] > 0) {
        arr[i]--
        result += String.fromCharCode(i + 97)
        n--
      }

    }
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] != undefined && arr[i] > 0) {
        arr[i]--
        result += String.fromCharCode(i + 97)
        n--
      }
    }
  }

  return result

};


s = "aaaabbbbcccc"


ans = sortString(s)
console.log(ans)