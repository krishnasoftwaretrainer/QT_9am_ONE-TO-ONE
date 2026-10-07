"use strict";
// //Global Variable Declaration and Initialization
// // var m1:number=10;
// // console.log('m1:',m1);
// // var m1:number=20;
// // m1=30;
// // console.log('m1:',m1);
// // let m1:number=10;
// // m1=30;
// // console.log('m1:',m1);
// // let m1:number=10;
// // console.log('m1:',m1);
// // const m1:number=111;
// // m1=222; // Error: Cannot assign to 'm1' because it is a constant.
// // console.log('m1:',m1);
// // const m1:number=111;
// //Function Scope
// function scopeTest() {
//     var m1:number=10;
//     console.log('m1:',m1);
//     var m1:number=20;
//     console.log('m1:',m1);
// }
// scopeTest();
function scope() {
    //var num1:number=22;
    if (true) {
        //var num1:number=33;
        let num1 = 33;
        console.log('num1:', num1);
    }
    console.log('num1:', num1); //inside function and outside block
}
scope();
