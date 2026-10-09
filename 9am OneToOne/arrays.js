"use strict";
/*
declare var process: any;
let a:number[] = [101, 102, 103, 104, 105];
console.log(a);

console.log(a[1]);

for(let i=0;i<a.length;i++)
{
process.stdout.write(a[i] +"\n   ");
}
*/
//Two or Double Dimension Array
let a = [[101, 102, 103], [201, 202, 203], [301, 302, 303], [401, 402, 403]]; //4x3
//console.log(a);
for (let i = 0; i < a.length; i++) //Rows
 {
    for (let j = 0; j < a[i].length; j++) //Columns
     {
        process.stdout.write(a[i][j] + "\t");
    }
    process.stdout.write("\n");
}
/*
for(let i=0;i<4;i++)  //Rows
{
    for(let j=0;j<3;j++) //Columns
    {
        process.stdout.write(a[i][j] +"\t");
    }
    process.stdout.write("\n");
} */ 
