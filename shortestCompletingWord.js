/**
 * 748. 最短补全词
 * https://leetcode.cn/problems/shortest-completing-word/
 */


/**
 * 84ms  50.00%
 * 48.3MB  25.51%
 */
var shortestCompletingWord = function (licensePlate, words) {
    licensePlate = licensePlate.replace(/( )|([0-9])/g, '').toLowerCase()

    let map = new Map()


    for (let i = 0; i < licensePlate.length; i++) {
        if (map.has(licensePlate[i])) {
            map.set(licensePlate[i], map.get(licensePlate[i]) + 1)
        } else {
            map.set(licensePlate[i], 1)
        }
    }

    let match = null

    for (let i = 0; i < words.length; i++) {
        let mapClone = new Map()
        map.forEach((value, key) => {
            mapClone.set(key, value)
        })
        for (let j = 0; j < words[i].length; j++) {
            if (mapClone.get(words[i][j]) >= 1) {
                let tmp = mapClone.get(words[i][j]) - 1
                if (tmp == 0) {
                    mapClone.delete(words[i][j])
                } else {
                    mapClone.set(words[i][j], tmp)
                }
                if (mapClone.size == 0) {
                    if (match == null) {
                        match = words[i]
                    } else {
                        match = match.length > words[i].length ? words[i]: match
                    }
                }
            }
        }

    }

    return match
};

licensePlate = "1s3 PSt",
    words = ["steps"]
// words = ["step", "steps", "stripe", "stepple"]

licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]

shortestCompletingWord(licensePlate, words)