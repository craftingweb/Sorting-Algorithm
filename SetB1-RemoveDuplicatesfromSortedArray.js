// Problem Description: Given a sorted array nums, 
// remove the duplicates in-place such that each element appears only once and returns the new length


//sorted in non decreasing order
// sorting in place,, same relative order
//directly changing array nums 
//returning number of unique elements
//large dataset, starts at -100


//using pointers cause you cant use cyclic search with negative integers 

function RemoveDuplicates(nums)
{
  //if the array is empty return null
  if(nums.length === 0)
  {
    return null; 
  }

  //updating pointers
  unique= 1;


  //going through the size of the whole array 
  for(let currentIndex =0 ; currentIndex < nums.length - 1; currentIndex++)
  {
    //if the current index val is not equal to the next val , then there is not a duplicate and you can move on
    if(nums[currentIndex] !== nums[currentIndex+1])
    {
      //adding the new val to the "unique array" by setting the index of the next unique place to the new unique character
      nums[unique] = nums[currentIndex+1]

      //moving up the spot where the next unique index will go 
      unique++
    }
  }

  //after going through the whole array, this is the num of all unique indexed we counted and tracked 
  return unique; 
}

module.exports = RemoveDuplicates; 