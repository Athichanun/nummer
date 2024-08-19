const Math = require('mathjs');
function diff(num){
    return Math.derivative('x^2-7', 'x').evaluate({x : num});
}
function calculate(x){
    return  Math.pow(x, 2) - 7;
}
let x0 = 2.0;
let x_old = 0;
let x_new = 0;
let i = 1;
let check = 1;

// console.log(funcd);
while(check > 0.000001){
    x_old = x0;
    funcx = calculate(x0);
    funcd = diff(x0);
    x0 = x0 -  (funcx / funcd);
    x_new = x0;
    check = Math.abs(x_new - x_old);
    console.log("round", i, ":", x_new);
    console.log(`error = ${check.toFixed(8)}`);
    i++;
}
// for( i = 0 ; i < 10; i++){
//     x_old = x0;
//     funcx = calculate(x0);
//     funcd = diff(x0);
//     x0 = x0 -  (funcx / funcd);
//     x_new = x0;
//     check = Math.abs(x_new - x_old);
//     console.log(check);
//     // i++;
// }