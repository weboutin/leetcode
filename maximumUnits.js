/**
 * 1710. 卡车上的最大单元数
 * https://leetcode.cn/problems/maximum-units-on-a-truck/
 */




/**
 * 72ms  80.25%
 * 43.2MB  61.73%
 */
var maximumUnits = function (boxTypes, truckSize) {

    boxTypes.sort((a, b) => b[1] - a[1])


    let counter = 0

    for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
        if (truckSize >= boxTypes[i][0]) {
            counter += boxTypes[i][0] * boxTypes[i][1]
            truckSize = truckSize - boxTypes[i][0]
        } else {
            counter += truckSize * boxTypes[i][1]
            truckSize = 0
        }
    }

    return counter;

};



boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]], truckSize = 10
boxTypes = [[1, 3], [2, 2], [3, 1]], truckSize = 4

ans = maximumUnits(boxTypes, truckSize)
console.log(ans)