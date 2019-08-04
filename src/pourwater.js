'use strict';

/**
 * @param {number[]} heights
 * @param {number} V
 * @param {number} K
 * @return {number[]}
 */
var pourWater = function (heights, V, K) {
  for (let i = 0; i < V; i++) {
    let lowestHeightIndexLeft = tryLeft(heights, K);
    let lowestHeightIndexRight = tryRight(heights, K);
    if (heights[K] > heights[lowestHeightIndexLeft]) {
      heights[lowestHeightIndexLeft]++;
    } else {

      if (heights[lowestHeightIndexLeft] <= heights[lowestHeightIndexRight]) {
        heights[lowestHeightIndexLeft]++;
      }
      else {
        heights[lowestHeightIndexRight]++;
      }
    }
  }

  return heights;

};

function tryLeft(heights, K) {
  let index = K;
  let lowestHeightIndex = K;
  while (index >= 0) {
    if (heights[index] < heights[lowestHeightIndex]) {
      lowestHeightIndex = index;
    }
    else if (heights[index] > heights[lowestHeightIndex]) {
      break;
    }
    index--;
  }

  return lowestHeightIndex;
}

function tryRight(heights, K) {
  let index = K;
  let lowestHeightIndex = K;
  while (index < heights.length) {
    if (heights[index] < heights[lowestHeightIndex]) {
      lowestHeightIndex = index;
    }
    else if (heights[index] > heights[lowestHeightIndex]) {
      break;
    }
    index++;
  }
  return lowestHeightIndex;
}

module.exports ={ pourWater}