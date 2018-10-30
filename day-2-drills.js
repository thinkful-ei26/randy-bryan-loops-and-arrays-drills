// Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop

// To complete this drill, you need to implement 2 functions, max and min. Both functions should take a single argument: an array of numbers called numbers. max(numbers) should return the 
// largest number in the array, while min(numbers) should return the smallest.

// Assume that the numbers input only contains numbers (that is, you don't have to inspect your inputs to confirm they only contain numbers).

// If the numbers array is empty, then both max and min should return null or undefined, whichever is more convenient.

max(1,2,3,4,5,6,7,8);
min(1,2,3,4,5,6,7,8);

function max(...numbers) {
    let currentMax = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > currentMax) {
            currentMax = numbers[i];
        } i++;
    } console.log(currentMax);
}

function min(...numbers) {
    let currentMin = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] < currentMin) {
            currentMin = numbers[i];
        } i++;
    } console.log(currentMin);
}

// Redo "Compute the average" exercise but use the Array.forEach() method instead of a for loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// Write a function called average that takes an array of numbers as its input and returns the average generated from the array of numbers.

// Recall that to compute the average of a set of numbers, you add together all of the numbers, and then divide the resulting value by the number of items in the array.  
  
random(5,5,5,5,5,5);

function random(...numbers) {
    let total = 0;
    numbers.forEach(function(num) {
        total += num;
        }); console.log(total / numbers.length);
} 