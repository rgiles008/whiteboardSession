// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  
  // Using regular expressions to filter array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);


  // If multiple words put in array
  const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

  // Check if more than one array val
  if(longestWordArr.length === 1){
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // Init chunked array
  // const chunkedArr = [];
  // // Set the index
  // let i = 0;

  // // Loop while index is less than length
  // while(i < arr.length){
  //   // Slice out from the index to the index + the chunk and push
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;

  // }
  // return chunkedArr;

  //////////////////////////////////////////

  // Another way

  const chunkedArr = [];

  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1]; 

    if(!last || last.length === len){
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // Solution 1
  // return arrays.reduce((a, b) => a.concat(b));
  

  //Solution 2
  // return [].concat.apply([], arrays);

  // Solution 3
  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}
// Helper
function formatStr(){
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = longestWord('Hello, my name is Brad');

console.log(output);