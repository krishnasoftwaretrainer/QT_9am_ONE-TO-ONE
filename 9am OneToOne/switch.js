"use strict";
//Calculatoe Program + - * / 
let num1 = 20, num2 = 10;
console.log('CALCULATOR');
console.log('1.Addition');
console.log('2.Subtraction');
console.log('3.Multiplication');
console.log('4.Division');
let choice = 5;
console.log(`My Choice is: ${choice}`);
switch (choice) {
    case 1:
        {
            let sum = num1 + num2;
            console.log(`Addition is: ${sum}`);
            break;
        }
    case 2:
        {
            let sub = num1 - num2;
            console.log(`Subtraction is: ${sub}`);
            break;
        }
    case 3:
        {
            let mul = num1 * num2;
            console.log(`Multiplication is: ${mul}`);
            break;
        }
    default:
        {
            console.log('Only choose b/w 1 to 3');
        }
}
