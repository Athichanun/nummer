// console.log("Hello");
let xl = 1.5;
let xr = 2.0;
let xm, xo, point;
let i  = 1;
let error = 1;
function cal(x){
	return Math.pow(x, 4) - 13;
}
while(error > 0.000001){
	xm = (xl + xr) /2;
	console.log(xm);
	if(cal(xm) * cal(xr) < 0){
		point = cal(xm) * cal(xr);
		xo = xl;
		xl = xm;
		console.log(i,"point = ",point);
	}else{
		point = cal(xm) * cal(xr);
		xo = xr;
		xr = xm;
		console.log(i,"point = ",point);
	}
	error = Math.abs(xm - xo);
	console.log(i,`error = ${error.toFixed(8)}`);
	i++;
}
console.log(`Root found at x = ${xm.toFixed(6)}`)
