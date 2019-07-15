// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
var twoSum = function(nums, target) {
    let len = nums.length;
    let map = new Map();
    for(let i=0;i<len;i++){
        let complement = target - nums[i];
        if (map.has(complement)) {
            // return new int[] { map.get(complement), i };
            return [map.get(complement),i]
        }
        map.set(nums[i], i)
    }
};