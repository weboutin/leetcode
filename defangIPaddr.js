/**
 * 1108. IP 地址无效化
 * https://leetcode.cn/problems/defanging-an-ip-address/
 */



/**
 * 64ms  42.86%
 * 40.9MB  29.08%
 */
var defangIPaddr = function (address) {
    return address.replace(/\./g, '[.]')
};