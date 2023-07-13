/**
 * 2600. K 件物品的最大和
 * https://leetcode.cn/problems/k-items-with-the-maximum-sum/
 */


/**
 * 72ms  80.39%
 * 43MB  71.57%
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  if (numOnes + numZeros >= k) {
    return k > numOnes ? numOnes : k
  } else {
    return (k > numOnes ? numOnes : k) - (k - numOnes - numZeros)
  }
};


numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4

numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2

numOnes = 3, numZeros = 2, numNegOnes = 1, k = 6

ans = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k)

console.log(ans)