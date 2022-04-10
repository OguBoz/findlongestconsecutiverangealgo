function findLongestConsecutiveRange(array) {

    /******************* VARIABLE DECLARATIONS ***************************************************/
        let prevMax = 0;
        let maxLength = 0;             // Stores length of longest consecutive range
        let index = 0;                 // Stores the index for the longest consecutive range
        let numberSet = new Set();     // Stores all unique numbers in input array
    /******************* END VARIABLE DECLARATIONS ***********************************************/
    
    
    /******************* POPULATE SET WITH (UNIQUE) NUMBERS **************************************/
        for (let x = 0; x < array.length; x++) {
            numberSet.add(array[x]);
        }
    /************************** END POPULATING SET ***********************************************/
    
        
    /**************************** FUNCTION LOGIC ************************************************/
        // loop throught input array
        for (let i = 0; i < array.length; i++)
        {
            // checking if the current number is starting point in a consecutive range
            if (!numberSet.has(array[i] - 1))
            {
                let j = array[i];
    
                while (numberSet.has(j)) {
                    j++;
                }
     
                // set values of index & maxLength for the current range   
                maxLength = Math.max(maxLength, j - array[i]);
              
                if(prevMax != maxLength || (array[i] == array[i+1] || array[i] == array[i-1])){
                  index = i;
                }
               prevMax = maxLength;
    
            }
        }
    /************************** END FUNCTION LOGIC ********************************************/
        
        // Return index and length
        index = index > maxLength ? (index + 1) - maxLength : maxLength == array.length ? 0 : index;
        return [index, maxLength];
    }

    // TEST CASES
    console.log(findLongestConsecutiveRange([]));                                   // Expected [0, 0]
    console.log(findLongestConsecutiveRange([1]));                                  // Expected [0, 1]
    console.log(findLongestConsecutiveRange([1, 2]));                               // Expected [0, 2]
    console.log(findLongestConsecutiveRange([1, 1, 2]));                            // Expected [1, 2]
    console.log(findLongestConsecutiveRange([1, 2, 3, 1, 2, 3]));                   // Expected [0, 3]
    console.log(findLongestConsecutiveRange([1, 2, 3, -10, -9, -8, -7, 0, 1, 2]));  // Expected [3, 4]
    console.log(findLongestConsecutiveRange([1, 1, 2, 3, 1, 2, 3]));                // Expected [1, 3]
    console.log(findLongestConsecutiveRange([1, 2, 3, 4, 3, 2, 1, 0, -2]));         // Expected [3, 5]


    module.exports = findLongestConsecutiveRange;
