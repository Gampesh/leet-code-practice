/**
 * @param {number[]} nums
 * @return {number}
 */
/*
var removeDuplicates = function(nums) {
    let i = 0;
    for (j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i])
            nums[++i] = nums[j];
    }
    console.log(nums);
    return ++i;
};
*/

var removeDuplicates = function(nums) {
    const len = nums.length;
    if (len <= 1) return len;

    let s = 0, f = 1;
    for (; f < len; f++) {
        if (nums[f] !== nums[s]) nums[++s] = nums[f];
    }

    return s + 1;
};

removeDuplicates([1,1,2,2,3,3,3,5]);
