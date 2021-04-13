/**
 * https://leetcode-cn.com/problems/climbing-stairs/submissions/
 */

/**
 * @param {number} n
 * @return {number}
 */
//  var climbStairs = function(n) {
//   if (n == 1) {
//       return 1;
//   }
//   if (n == 2) {
//       return 2;
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

let rs = climbStairs(45)
console.log(rs)
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    let tmp = b;
    b = a + b;
    a = tmp;
  }
  return b;
};