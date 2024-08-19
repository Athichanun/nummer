let xr = 2.0;
let xl = 1.5;
let error = 1;
let i = 1;
let xn,point,xo;
function nextx(fr,fl,xr,xl){
    let re = ((xl*fr)-(xr*fl))/(fr-fl);
    return re;
}
function cal(x){
    let re = Math.pow(x, 4) - 13;
    return re;
}

while(error > 0.000001){
    console.log(xl,xr,cal(xl),cal(xr));
    xn = nextx(cal(xr),cal(xl),xr,xl);
    console.log(`${xn.toFixed(8)}`);
    if(cal(xn) == 0){
        console.log("can't find");
        break;
    }
    point = cal(xn)* cal(xr);
    if(point < 0){
        xo = xl;
        xl = xn;
        // error = Math.abs(xn-xr);
    }else{
        xo = xr;
        xr = xn;
        // error = Math.abs(xn-xl);
    }
    error = Math.abs(xn-xo);
    console.log(cal(xn),cal(xr));
    console.log(i,"point =", point);
    console.log(i,`error = ${error.toFixed(8)}`);
    i++;
}