/**
 * 1791. 找出星型图的中心节点
 * https://leetcode.cn/problems/find-center-of-star-graph/?envType=list&envId=bxbmnec
 */


/**
 * 88ms  91.07%
 * 55.9MB  71.43%
 */
var findCenter = function (edges) {

  let map = {}

  map[edges[0][0]] = 1
  map[edges[0][1]] = 1

  if (map[edges[1][0]]) {
    return edges[1][0]
  } else {
    return edges[1][1]
  }

};