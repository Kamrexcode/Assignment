let fruits = ["apple"]
let fruits2 = ["tomato"]

fruits.push("banana")

console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.unshift("cucumber")

console.log(fruits);

fruits.shift()
console.log(fruits);


console.log(fruits.includes("apple"));
console.log(fruits.includes("kiwi"));

fruits.push("kiwi")
fruits.push("watermelon")
fruits.push("orange")
fruits.push("paw-paw")
fruits.push("apple")

console.log(fruits);

console.log(fruits.indexOf("apple"));

console.log(fruits.lastIndexOf("apple"))

console.log(fruits.concat(fruits2))

const sortedFruits = fruits.sort((a,b) => a + b)