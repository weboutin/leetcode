



/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {

    let result = []

    let idx1 = 0
    let idx2 = 0

    while (idx1 < arr1.length && idx2 < arr2.length) {

        if (arr1[idx1].id == arr2[idx2].id) {
            let newMap = arr1[idx1]

            for (let key in arr2[idx2]) {
                newMap[key] = arr2[idx2]
            }
            result.push(newMap)
            idx1++
            idx2++
        } else if (arr1[idx1].id > arr2[idx2].id) {
            result.push(arr2[idx2])
            idx2++
        } else {
            result.push(arr1[idx1])
            idx1++
        }
    }

    result = result.concat(arr1.slice(idx1))
    result = result.concat(arr2.slice(idx2))


    return result

};