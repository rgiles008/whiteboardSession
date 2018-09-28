// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // Long way of solution for explaining.
  // const myArr = str.split('');
  // myArr.reverse();
  // return myArr.join('');

  // Refactored with reverse() method
  //return str.split('').reverse().join('');

  // No reverse() method
  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--){
  //   revString = revString + str[i];
  // }
  // return revString;

  // Using char
  // let revString = '';
  // for(let char of str){
  //   revString = char + revString;
  // }
  // return revString;

  let revString = '';
  str.split('').forEach(char =>revString = char + revString);
  return revString;
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');
  return revString === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// Call Function
const output = isPalindrome('racecar');

console.log(output);