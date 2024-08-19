function fact(x){
    return Math.pow(x, 3) - 7 + x;
}

let x = 1;
let xo = 0;
let check = 1;
let i = 1;
while(check > 0.000001){
    xo = x;
    x = fact(x);
    check = Math.abs(x - xo);
    if(x == Infinity || x == -Infinity){
        console.log("can't find answer");
        break;
    }
    console.log("x" + i,"=", x);
    console.log("error" + i,"=", check);
    i++;
}