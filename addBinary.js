/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aArr = a.split("");
  let bArr = b.split("");
  if (a.length > b.length) {
    longArr = aArr;
    shortArr = bArr;
  } else {
    longArr = bArr;
    shortArr = aArr;
  }
  let needPlus = 0;
  let longkey;
  for (let j = shortArr.length - 1; j >= 0; j--) {
    longkey = j + (longArr.length - shortArr.length);
    if (Number(longArr[longkey]) + Number(shortArr[j]) + needPlus > 1) {
      longArr[longkey] = (Number(longArr[longkey]) + Number(shortArr[j])) == 3 ? 1 : 0;
      needPlus = 1;
    } else {
      longArr[longkey] = (Number(longArr[longkey]) + Number(shortArr[j]) + needPlus) > 0 ? 1 : 0;
      needPlus = 0;
    }
  }
  if (needPlus > 0) {
    for (let i = longkey; i >= 0; i--) {
      if (Number(longArr[i]) + needPlus > 0) {
        longArr[i] = 0;
      } else {
        longArr[i] = 1;
        return longArr.join('');
      }
    }
    return ["1"].concat(longArr).join('')
  }

  return longArr.join('');
};

rs = addBinary("1010", "1011")
console.log(rs)