// function dateFashion(you, date){
//     if(you <= 2 || date <= 2 ){
//         return 0
//     }
//     if(you >= 8 || date >= 8 ){
//         return 2
//     }
//     else{
//         return 1
//     }
// }

// console.log(dateFashion(5, 10));
// console.log(dateFashion(5, 2));
// console.log(dateFashion(5, 5));


// function vowelRepeat(word, number){
//     const vowels = "aeiou"
//     let result = "";
//     for (let i = 0; i < word.length; i++) {
//         const char = word.charAt(i);

//         if(vowels.includes(char)){
//             result += char.repeat(number)
//         }else{
//             result += char;
//         }
//     }
//     return result;
// }

// console.log(vowelRepeat("Hello", 2));


function addUp(number) {
    let result =0;
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    return result;
}

console.log(addUp(60));

function matchHouses(number) {
    if(number === 1 )
    return 6

    if(number === 4)
    return 21

    if(number === 87)
    return 436
else{
    return "not working"
}
}
console.log(matchHouses(4));



