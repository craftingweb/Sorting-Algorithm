// Problem Description: Given a sorted array nums, 
// remove the duplicates in-place such that each element appears only once and returns the new length


//sorted in non decreasing order
// sorting in place,, same relative order
//directly changing array nums 
//returning number of unique elements
//large dataset, starts at -100


//using pointers cause you cant use cyclic search with negative integers 

// class Node {
//     constructor(value, next=null) {
//       this.value = value;
//       this.next = next;
//     }
//   }


  function RemoveDuplicates(nums)
  {
    //setting our pointers to the start of array 
    let fast = 0;
    let slow = 0; 

    //while not at the end of array 
    while(fast < nums.length)
    {
        //updating pointers
        slow ++;
        fast += 2;

        //fast should be equal to slow * 2 ,, if its not then there is a duplicate
        if(nums[fast] != (nums[slow] * 2))
        {
            //we want to remove the duplicate 
            nums = nums.splice((fast+ 1), 1);
            
        }

    
    }

    return nums.length; 
  }

  module.exports = {
    RemoveDuplicates,
  };