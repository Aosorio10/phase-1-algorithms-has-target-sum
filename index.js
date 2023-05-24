function hasTargetSum(array, target) {
  let numSet = new Set();

  for (let num of array) {
    let complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

*/

/* 
  * base on the function giving that takes in two arguments ( array, target)
   then calculate the number by substracting the target
   if number is found return "true"
   else no numbers where fund return "false"
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
