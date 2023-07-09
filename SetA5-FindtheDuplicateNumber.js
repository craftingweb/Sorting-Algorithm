
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

// Constraints:
// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n

function FindDuplicateNum(nums){
    for(let currentIndex = 0; currentIndex < nums.length; currentIndex++)
    {
        const value = nums[i]; 
        const correctIndex = value - 1; 

        //if current val is not in correct index
        if(currentIndex != correctIndex)
        {
            //if the number already at the correct index m
            //matches the one that needs to be swapped,,
            // there is a duplicate
            if(nums[currentIndex] === nums[correctIndex])
            {
                return  nums[currentIndex];
            }

        }
    }
}