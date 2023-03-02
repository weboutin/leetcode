/**
 * 冒泡排序
 * 从小到大排序
 */
// var sort = function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let tmp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = tmp
//             }
//         }
//     }
//     return arr
// }

var sort = function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}


console.log(sort([2, 1, 3, 14, 51, 6, 7]))