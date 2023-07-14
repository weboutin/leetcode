/**
 * 1603. 设计停车系统
 * https://leetcode.cn/problems/design-parking-system/
 */





/**
 * 120ms  84.44%
 * 48MB  82.22%
 */
var ParkingSystem = function (big, medium, small) {


    this.park = [0, big, medium, small]

};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (this.park[carType] > 0) {
        this.park[carType]--
        return true
    } else {
        return false
    }
};
