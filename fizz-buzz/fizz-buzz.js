/*
Write a program that console log the numbers from 1 to n. But for multiples of 
three print "fizz" instead of the number and for the multiples of five print "buzz".
For number which are multiples of both three and five print "fizzbuzz"

fizzBuzz(6)
1
2
fizz
4
buzz
fizz
*/
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      continue;
    }
    if (i % 3 === 0) {
      console.log("fizz");
      continue;
    }
    if (i % 5 === 0) {
      console.log("buzz");
      continue;
    }
    console.log(i);
  }
}
