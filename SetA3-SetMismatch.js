// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Constraints:
// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

//using cyclic sort
function SetMismatch(nums)
{
    //setting duplicate and missing to -1,, representing not there yet 
    let duplicate =-1;
    let missing = -1; 

    // going through the array values
    for(let currentIndex = 0; currentIndex < nums.length; currentIndex++)
    {

        const value = nums[currentIndex];  //the value at the current index
        const correctIndex = value - 1; // the correct index for this val should be 1 less than this value

        //if current val is not in correct index
        if(currentIndex != correctIndex)
        {
            //if the number already at the correct index 
            //matches the one that needs to be swapped,,
            // there is a duplicate
            if(nums[currentIndex] === nums[correctIndex])
            {
                //not at the start
                if(currentIndex !== 0 )
                {
                duplicate = nums[currentIndex];
                }
                else // if the cuplicate is at the begining,, and not 1 
                {
                    duplicate = 1 ; 
                }
                // return  [nums[currentIndex], nums[currentIndex]+1];

            }

        }

        // if the current value is not inline with the index +1 
        if ((nums[currentIndex] !== currentIndex + 1) ) {


            //checking if the val is at the start,, 
            if(currentIndex === 0 )
            {missing = duplicate + 1}
            else
            {missing = currentIndex + 1;}
            
          }

          //if there is a duplicate and a missing
          if (duplicate !== -1 && missing !== -1) {
            return [duplicate, missing];
          }  
    }

    //if there is no mismatch because we have gone through the whole array
    return null;
}

module.exports = SetMismatch; 
