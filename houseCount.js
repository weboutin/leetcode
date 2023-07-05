/**
 * 2728. 计算一个环形街道上的房屋数量
 * https://leetcode.cn/problems/count-houses-in-a-circular-street/
 */



/**
 * Definition for a street.
 * class Street {
 *     @param {number[]} doors
 *     constructor(doors);
 * 
 *     @return {void}
 *     openDoor();
 * 
 *     @return {void}
 *     closeDoor();
 * 
 *     @return {boolean}
 *     isDoorOpen();
 * 
 *     @return {void}
 *     moveRight();
 * 
 *     @return {void}
 *     moveLeft();
 * }
 */
/**
 * 80ms  100.00%
 * 44.6MB  50.00%
 */
var houseCount = function (street, k) {
  for (let i = 0; i < k; i++) {
    street.closeDoor()
    street.moveRight()
  }

  let count = 0

  for (let i = 0; i < k; i++) {
    if (street.isDoorOpen() == false) {
      count++
    } else {
      break
    }
    street.openDoor()
    street.moveRight()
  }

  return count
};