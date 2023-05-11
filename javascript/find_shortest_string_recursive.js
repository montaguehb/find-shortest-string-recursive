const words = require("an-array-of-english-words")

function findShortestStringRecursive(arr) {
  // type your code here
  if(arr.length === 1) {
    return arr[0]
  }
  const str = findShortestStringRecursive(arr.slice(1))
  return arr[0].length < str.length?arr[0]:str
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log(findShortestStringRecursive(words))
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
