/** 
 Author : Build Rise Shine 

  Created : 2023 

  Script : Reverse String

  Description : write an algorithm for reversing a string

    Reversing a string involves changing the order of characters in a given string, effectively flipping 
    it backward. It is achieved by iterating through the string from the last character to the first and 
    appending each character to a new string or array. The resulting reversed string will have the 
    characters in the opposite order, allowing for a backward representation of the original input string.
      
  (c) Copyright by BRS Studio. 
**/

/**
 * For the given string, returns the reversed string
 * @param String
 * @return String
 */

// Reverse String Algorithm
let reverseString = function (str) {
  // Step 1: Convert the string to an array of characters
  const charArray = str.split("");
  console.log(charArray);
  // Step 2: Initialize two pointers
  let left = 0;
  let right = str.length - 1;

  // Step 3: Swap characters using the two-pointer approach
  while (left < right) {
    // Swap characters
    [charArray[left], charArray[right]] = [charArray[right], charArray[left]];

    // Move the pointers
    left++;
    right--;
  }

  // Step 4: Convert the array back to a string
  const reversedStr = charArray.join("");

  // Step 5: Return the reversed string
  return reversedStr;
};

// Implementation
const str = "hello world";
const reversed = reverseString(str);
console.log(`The reversed string for the given string '${str}' is ${reversed}`);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(n)
