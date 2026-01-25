var twoSum = function (nums, target) {

    const arr = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr.push(i);
                arr.push(j);
            }
        }
    }
    return arr;
};


const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
