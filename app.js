// console.log('I am Connected 1')

// Demo - 1 - Pseudocode
/*
// *** Fizz Buzz App ***
// --- Problem ---
// Write a program that prints each number from 1-20 on a new line
    // IF multiple of 3, print “Fizz” INSTEAD of the number
    // IF multiple of 5, print “Buzz” INSTEAD of the number
    // ELSE numbers that are multiples of BOTH 3 and 5 print “FizzBuzz” INSTEAD of the number

// --- Solution ---
// Write a program that prints each number from 1-20 on a new line
// The modulus operator (%) returns the division remainder which will be helpful to resolve this task
    // If needed for modulus of 15 || 3 || 5 and else to catch everything else
        // will need to think of the order of the if statements to catch correctly.

// --- Code ---
*/

// Demo - 2 - Arrays
/*
// --------- arrays
console.log([]);
console.log([1,2,3,4]);
console.log([1,'2',true,1234]);
console.log(typeof []);

// --------- Zero Based
// const varArray = [1,'2',true,1234]
// console.log(varArray);
// console.log(varArray[2]);
// console.log(varArray.length);

// --------- Update 
// const arr1 = [1, 2, 3, 4]
// arr1[2] = 'rabbit';
// // arr1[arr1.length] = 5;
// // arr1[10] = 9

// console.log(arr1);
// console.log(arr1.length);

// --------- Method push & unshift
// const arr1 = [1, 2, 3, 4]
// arr1.push(5);
// // arr1.pop();
// // arr1.shift();
// // arr1.unshift(0);

// console.log(arr1);

// --------- Helpful Methods
// const varArray = [1, 2, 'element', 'smith', 'element', 10]
// console.log(varArray.includes('element'));
// console.log(varArray.indexOf('element'));
// console.log(varArray.find((a)=> a > 5)); // This is a little complicated as it has a callback

// --------- Nested Arrays
// let arr2 = [
// 	[1, 2],
// 	['a', 'b'],
// 	[100, 200],
// ];

// console.log(arr2[1][1]);

// --------- Set with const
// const arr1 = [1, 2, 3, 4]
// arr1[2] = 'Hello';
// console.log(arr1.length);

// // arr1 = 'text';
*/

// Demo - 3 - Objects
/*
// --------- Object
const obj1 = {
	fistName: 'Foo',
	lastName: 'Bar',
};

// Selector Brackets
console.log(obj1['lastName']);
// Selector Dot Notation
console.log(obj1.lastName);

// --------- Working with objects
// const obj1 = {
// 	fistName: 'Foo',
// 	lastName: 'Bar',
//   age: 21
// };

// // select
// console.log(obj1.fistName);

// // Update
// obj1.age = 31
// console.log(obj1)

// // Insert
// obj1.email = 'a@a.com'
// console.log(obj1)

// // Delete
// delete obj1.age;
// console.log(obj1)

// --------- Array of Objects
// const arr = [];

// arr.push(
// 	{
// 		fistName: 'Foo',
// 		lastName: 'Bar',
// 	},
// 	{
// 		fistName: 'Julie',
// 		lastName: 'Jones',
// 	},
// 	[1, 2]
// );

// console.log(arr[1].fistName);

// --------- Objects of arrays
// const obj = {}

// obj.arr1 = [1,'2',3]
// obj.arr2 = ['Hello','every','one']
// obj.arr3 = [4,5,'6']
// obj.objInside = {key1: 'first', key2: 'second'}

// console.log(obj);
// console.log(obj.arr2[1]);
*/

// Demo - 4 - Loops
/*
// ==== basic loop ==== \\
for (let i = 0; i <= 10; i++) {
    console.log(`this is i = ${i}`);
}

// ==== infinate loop -- VERY BAD!!! ==== \\
// for (let i = 11; i > 10; i++) {
//     console.log(`this is i = ${i}`);
// }

// ==== Iterate through an array ==== \\
// Iterate over Array Loop (Remember to use array length - 1)
// const array1 = [1, 2, 3, 4, 5];
// for (let i = 0; i < array1.length; i++) {
//     console.log(`array position = ${i} contains ${array1[i]}`);
// }

// ==== Nest Loops ==== \\
// const array1 = [1, 2, 3, 4, 5];
// for (let i = 0; i < array1.length; i++) {
//     console.log(`array position = ${i} contains ${array1[i]}`);
//     for (let j = 0; j <= 3; j++) {
//         console.log(`this is j = ${j}`);
//     }
// }

// ==== while loop ==== \\
// while loop + Break Key word
// // Example 1
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// // Example 2
// const guessWord = 'hello';
// let guess = prompt('Please enter your guess');
// while (guess != guessWord) {
//     guess = prompt('Please enter your guess');
// }
// console.log('you have guessed correctly');

// ==== Array Loop 'For Of' ==== \\
// Example using for loop
// let exampleArray = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [true, false, null],
// ];

// // console.log(exampleArray);
// for (let i = 0; i < exampleArray.length; i++) {
//     const row = exampleArray[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// // same but written with for of loop
// for (let i of exampleArray) {
//     for (let j of i) {
//         console.log(j);
//     }
// }

// ==== object loop using 'for in' ==== \\
// Iterate over object literal (for in loop or Object.values or Object.keys)
// const classHairColour = {
//     Justin: 'Used to be brown',
//     Ben: 'unconfirmed',
//     Vicky: 'Chestnut',
//     Tish: 'Black',
//     Robyn: 'Blonde',
// };

// for (let i in classHairColour) {
//     console.log(`${i} hair colour = ${classHairColour[i]}`);
// }

// if have time could come array 'map' & 'forEach' though this is not common now
*/