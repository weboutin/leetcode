/**
 * https://leetcode-cn.com/problems/pascals-triangle/submissions/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 1) {
    return [[1]];
  }
  if (numRows == 2) {
    return [[1], [1, 1]];
  }
  let result = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j] + result[i - 1][j - 1];
    }
    row.push(1);
    result[i] = row;
  }
  return result;
};
