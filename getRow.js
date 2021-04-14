/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex == 0) {
    return [1];
  }
  if (rowIndex == 1) {
    return [1, 1];
  }
  let result = [[1], [1, 1]];
  for (let i = 2; i < rowIndex + 1; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j] + result[i - 1][j - 1];
    }
    row.push(1);
    result[i] = row;
  }
  return result[rowIndex];
};

