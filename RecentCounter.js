/**
 * 933. 最近的请求次数
 * https://leetcode.cn/problems/number-of-recent-calls/
 * 
 * LCR 042. 最近的请求次数
 * https://leetcode.cn/problems/H8086Q/description/
 */



var RecentCounter = function () {
    this.counter = []
};

/**
 * 252ms  16.11%
 * 54.6MB  5.15%
 */
RecentCounter.prototype.ping = function (t) {
    let needRemove = false
    let removeIndex = null

    this.counter.push(t)

    for (let i = 0; i < this.counter.length; i++) {
        if (this.counter[i] + 3000 >= t) {
            removeIndex = i
            break
        } else {
            needRemove = true
        }
    }

    if (needRemove) {
        this.counter = this.counter.slice(removeIndex)
    }

    return this.counter.length;

};


/**
 * 184ms  58.64%
 * 50.1MB  93.36%
 */
RecentCounter.prototype.ping = function (t) {

    this.counter.push(t)
    while (this.counter[0] + 3000 < t) {
        this.counter.shift()
    }
    return this.counter.length;

};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


let recentCounter = new RecentCounter();
ans = recentCounter.ping(642);     // requests = [1]，范围是 [-2999,1]，返回 1
console.log(ans)
ans = recentCounter.ping(1849);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
console.log(ans)
ans = recentCounter.ping(4921);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
console.log(ans)
// ans = recentCounter.ping(5936);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
// console.log(ans)
// ans = recentCounter.ping(5957);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
// console.log(ans)