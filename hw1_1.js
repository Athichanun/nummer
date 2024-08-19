function cal(x){
    return (43 * x) - 180;
}
function check(x){
    if(x < 0){
        return -1;
    }else{
        return 1;
    }
}

let x1 = 0;
let x2 = 0;
let xans = 0;
let ch = check(cal(0))
for(let i = 0; i < 10; i++){
    let result = cal(i);

    if(ch != check(result)){
        break;
    }
    x1 = i;
    x2 = x1+1;
    // console.log(x1, x2);
    i++;
}
console.log(x1, x2);
ch = check(cal(x1));
let j = x1;
do{
    result = cal(j);
    xans = j;
    j += 0.000001;
}while (ch == check(result));
console.log(xans);
