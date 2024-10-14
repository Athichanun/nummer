
let x = [2, 4, 6, 8, 10];
function func(c){
    let re;
    switch(c){
        case x[0]: re =9.5; break;
        case x[1]: re = 8.0; break;
        case x[2]: re = 10.5; break;
        case x[3]: re = 39.5; break;
        case x[4]: re = 72.5; break;
    }
    return re;
}
function fx(c0, c1){
    let m;
    m = (func(c1) - func(c0)) / (c1 - c0);
    return m;
}
let find = 4.5;
for(let i = 0; i < (x.length - 1); i++){
    if(find >= x[i] && find <= x[i + 1]){
        let ans;
        ans = fx(x[i] , x[i+1]) * (find - x[i]);
        ans += func(x[i]);
        console.log(ans);
        break;
    }
}