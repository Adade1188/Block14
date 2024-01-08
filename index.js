//Use indexes to access a
let MyArray = ['Apple', 'Banana', 'Cherry']
console.log(MyArray);
console.log(MyArray[0]);
console.log(MyArray[1]);
console.log(MyArray[2]);

//Uses a loop to iterate through an array 
let fruits = ['Apple', 'Banana', 'Cherry'];
for(let i = 0; i<fruits.length; i++) {
  console.log(fruits[i]);
}

//Update a variable as they iterate through an array
let arr = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[1];
}

console.log(sum);

//Update variable depending on the result of a conditional as they iterate through an array
let array = [1,2,3,4,5,6,7,8,9,10];
let evenCount = 0;

for (let i = 0; i < arr.length; i++) {
  if(array[1] % 2 == 0) {
    evenCount++;
  }
}
console.log(evenCount);
