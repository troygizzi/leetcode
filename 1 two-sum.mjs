import { TestRunner } from "./TestRunner.mjs";

// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashtable = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const winner = target - val;
    if (hashtable[winner] !== undefined) {
      return [ hashtable[winner], i ];
    }
    hashtable[val] = i;
  }
};

TestRunner.runTests({
  testFunction: twoSum,
  spreadInput: true, // true to spread (...) the inputs as separate parameters, false to leave them as an array
  testScenarios: [
    { input: [ [2,7,11,15], 9 ], expectedOutput: [0,1] },
    { input: [ [3,2,4], 6 ], expectedOutput: [1,2] },
    { input: [ [3,3], 6 ], expectedOutput: [0,1] },
  ],
});