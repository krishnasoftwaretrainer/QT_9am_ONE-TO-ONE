let str1:string = "Hello World";

//String Lower Case
console.log(str1.toLowerCase());  //hello 

//String Upper Case
console.log(str1.toUpperCase()); //HELLO

//Replace String
console.log(str1.replace("World", "TypeScript")); //Hello TypeScript

//Trim String
let str2:string = "   Hello TypeScript   ";
console.log(str2.trim()); //Hello TypeScript

//Length of String
let str3:string = "  He  llo";
console.log(str3.length); //11

//Concat String

console.log(str1.concat(str2)); //Hello World    Hello TypeScript

console.log(str1+str2); //Hello World   Hello TypeScript
console.log(str1,str2);

//isEmpty String
let str4:string ="";
console.log(str4.length == 0); //true

//== ===

