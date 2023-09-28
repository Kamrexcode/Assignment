// let myName = ("Jamie")

// console.log(myName.length);
// console.log(myName.charAt(0));

// let myName2 = ""

// for (let i = 0; i < myName.length; i++) {
//     console.log(myName.charAt(i));
// }

// const mail = "jamie@gmail.com"

// console.log(mail.split("@")[1].split(".")[0]);

function replaceVowel(Name){
    let replaceVowel = "";
    for (let i = 0; i < Name.length; i++) {
        if(Name.charAt(i)==="a" || Name.charAt(i)==="e" ||Name.charAt(i)==="i"){
            replaceVowel+="_"
        }else{
            replaceVowel+= Name.charAt(i)
        }
    }
    return replaceVowel;
}
console.log(replaceVowel("Jamie"));