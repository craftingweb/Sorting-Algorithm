// Problem Description: Given a sorted array nums, 
// remove the duplicates in-place such that each element appears only once and returns the new length


//sorted in non decreasing order
// sorting in place,, same relative order
//directly changing array nums 
//returning number of unique elements
//large dataset, starts at -100


//using pointers cause you cant use cyclic search with negative integers 

class Node {
    constructor(value, next=null) {
      this.value = value;
      this.next = next;
    }
  }

  function RemoveDuplicates(nums)
  {
    //setting our pointers to the start of array 
    let fast = head;
    let slow = head; 

    //while not at the end, or 1 cycle has completed
    while(fast !== null && fast.next !== null)
    {

        //fast should be equal to slow + 2 ,, if its not then there is a duplicate
        if(fast.value != (slow.value + 2))
        {
            //we want to remove the duplicate
            //remove inbetween fast and slow and move on 
            nums = nums.splice((slow.value), 1);
            
        }

    //updating pointers
    slow = slow.next;
    fast = fast.next.next;
    }

    return nums; 
  }