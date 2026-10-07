// const a=20,b=0;
// console.log('a/b:',a/b); //2
// console.log('a%b:',a%b); //0

// let a=20,b=0,c=10,d=50;
// console.log(a>b && c>d); //false
// console.log(a>b || c>d); //true

/*
let a:number=10;

console.log(a+=5); //15 a=15
console.log(a-=5); //10 a=10
console.log(a*=5); //50 a=50
console.log(a/=5); //10 a=10
*/

//Unary Operators[Increment and Decrement]
/*
let a:number=10,b:number=10,c:number=10,d:number=10;

console.log(++a); //Print:11
console.log('a=',a); //a=11
console.log(b++); //Print:10
console.log('b=',b); //b=11

console.log(--c);  //Print:9
console.log('c=',c); //c=9
console.log(d--);  //Print:10
console.log('d=',d); //d=9
*/
/*
let a:number=10;

console.log(++a); //Print:11
console.log('a=',a); //a=11
console.log(a++); //Print:11
console.log('a=',a); //a=12

console.log(--a);  //Print:11
console.log('a=',a); //a=11
console.log(a--);  //Print:11
console.log('a=',a); //a=10
*/

//Ternary Operators
let obtainedmarks:number=95;

// let result:boolean=obtainedmarks>=35?true:false; //55>=35T
let result:string=obtainedmarks>=35?'Pass':'Fail'; //25>=35F
console.log('Result:',result); 