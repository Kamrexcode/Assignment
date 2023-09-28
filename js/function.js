function greet(){
    console.log("Hello World")
}
greet()

function sayName(name){
    return "Hello my name is " + name
}
const intro = sayName("Joshua")
console.log(intro)

const name ="John"
const statement = "My name is "

console.log(statement + name)

function sum(a,b){
    return a + b
}
let numSum =sum(1,2)

function sumArr(numbers){
    let total = 0;
    for  (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
const myArray = [1,2,3,5];
const result = sumArr(myArray);
console.log(result);

