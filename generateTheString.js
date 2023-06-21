/**
 * 1374. 生成每种字符都是奇数个的字符串
 * https://leetcode.cn/problems/generate-a-string-with-characters-that-have-odd-counts/?envType=list&envId=bxbmnec
 */




/**
 * 68ms  37.70%
 * 41.3MB  47.54%
 */
var generateTheString = function (n) {
  return n % 2 == 0 ? new Array(n - 1).fill('a', 0, n - 1).join('') + 'b' : new Array(n).fill('a', 0, n).join('')
};



ans = generateTheString(5)
console.log(ans)

// console.log([].fill('a', 0, 1))
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
console.log(fruits)