/**
 * 2621. 睡眠函数
 * https://leetcode.cn/problems/sleep/
 */



/**
 * 48ms  99.9%
 * 40.7MB  85.53%
 */
async function sleep(millis) {

    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    })

}

let t = Date.now()
sleep(1000).then(() => console.log(Date.now() - t)) // 100