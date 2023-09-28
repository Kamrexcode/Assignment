let person = {
    firstName:"Okoro",
    lastName:"Johnson",
    age:20,
    hobbies: ["football","music","dance"],
    isMarried:false,
    sayName: function(){
        return "my name is"+this.firstName
    }
}


console.log(person.age);
console.log(person["firstName"]);
// console.log(person);
console.log(person.sayName());

// const container = document.querySelector(".container")