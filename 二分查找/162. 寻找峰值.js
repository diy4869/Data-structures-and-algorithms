/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    if (nums.length === 1) return 0

    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        let middle = (low + high) >> 1

        // if (nums[middle - 1] > middle && middle < nums[middle + 1]) {
        //     return low
        // } else if (nums[middle] < nums[middle + 1] ) {
        //     low = middle + 1
        // } else if (nums[middle] > nums[middle - 1]) {
        //     high = middle - 1
        // } else if (nums[middle - 1] > nums[middle]) {
        //     high = middle - 1
        // } else {
        //     return low
        // }
        if (low === high) {
            return middle
        }
        if (nums[middle] > nums[middle + 1]) {
            high = middle
        } else if (nums[middle + 1] > nums[middle]) {
            low = middle + 1
        } else {
            return middle
        }
    }

    return  low
};
console.log(findPeakElement([3,5,4,3,4,5,7]))
console.log(findPeakElement([2, 1, 3]))
console.log(findPeakElement([3, 4, 3, 2, 1]))
console.log(findPeakElement([1,2,1,3,5,6,4,5, 6, 7, 8, 9,10, 9, 8]))
console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))