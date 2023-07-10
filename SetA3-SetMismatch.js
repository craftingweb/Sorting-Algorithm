// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Constraints:
// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

//using cyclic sort
function SetMismatch(nums)
{
    for(let currentIndex = 0; currentIndex < nums.length; currentIndex++)
    {
        const value = nums[currentIndex]; 
        const correctIndex = value - 1; 

        //if current val is not in correct index
        if(currentIndex != correctIndex)
        {
            //if the number already at the correct index 
            //matches the one that needs to be swapped,,
            // there is a duplicate
            if(nums[currentIndex] === nums[correctIndex])
            {
                return  [nums[currentIndex], nums[currentIndex]+1];
            }

        }
  
    }

    //if there is no mismatch because we have gone through the whole array
    return null;
}

module.exports = SetMismatch; 
