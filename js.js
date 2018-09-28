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
  str.split('').forEach(char => revString = char + revString);
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
function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');
  // for(let i = 0; i < strArr.length; i++){
  //   strArr[i] = strArr[i]
  //                 .subString(0, 1)
  //                 .toUpperCase() + strArr[i]
  //                 .subString(1);
  // }
  // return strArr.join(' ');

  // Refactored option with es6
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1)) 
  //   .join(' ');

  // Using regular expressions
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
} 



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char){
    if(charMap[char]){
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap){
    if(charMap[char] > maxNum){
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i = 0; i <= 100; i++){
    if(i % 15 === 0){
      console.log('fizzBuzz');
    } else if(i % 3 === 0){
      console.log('fizz');
    } else if(i % 5 === 0){
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}



// Call Function
const output = fizzBuzz();

console.log(output);