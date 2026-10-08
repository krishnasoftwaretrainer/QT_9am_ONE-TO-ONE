//Calculatoe Program + - * / 

let num1: number = 20, num2: number = 10;

console.log('CALCULATOR');
console.log('1.Addition');
console.log('2.Subtraction');
console.log('3.Multiplication');
console.log('4.Division');

let choice: number = 5;
console.log(`My Choice is: ${choice}`);

switch (choice) {

    case 1:
        {
            let sum: number = num1 + num2;
            console.log(`Addition is: ${sum}`);
            break;
        }

        case 2:
            {
                let sub: number = num1 - num2;
                console.log(`Subtraction is: ${sub}`);
                break;
            }
            case 3:
                {
                    let mul: number = num1 * num2;
                    console.log(`Multiplication is: ${mul}`);
                    break;
                }

                default :
                {
                    console.log('Only choose b/w 1 to 3')
                }
}