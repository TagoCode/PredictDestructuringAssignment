const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// Problem 1
// Output: Tesla
// Output: Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); <--I removed this line of the example problem because it couses the code to break. It has to be otherName to work.
console.log(otherName);
// Problem 2
// Output: Elon

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);
// Problem 3
// The 'Person' is does not have a password attribute. 
// It will output:
// 12345
// undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// Problem 4
// Here we are doing a comparison, the first will result FALSE, the second TRUE.

console.log(" ")

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// Problem 5
// Output:
// value
// [ 1, 5, 1, 8, 3, 3 ]
// 1
// 5