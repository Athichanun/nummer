let x1 = [10,15,20,30,40,50,60,70,80];
let y  = [5,9,15,18,22,30,35,38,43];
let n = 3 ;
let matrix = [];
let b = [];
let find = 65; 
function cal(x1, p){
    let sum = 0;
    for(let i = 0; i < x1.length; i++){
        sum += Math.pow(x1[i], p);
    }
    return sum;
}
function cal2(x1, y, p){
    let sum = 0;
    for(let i = 0; i < x1.length; i++){
        sum += Math.pow(x1[i], p) * y[i];
    }
    return sum;
}
function det(x){
    let up,down;
    let ups = 0;
    let downs = 0;
    let re; 
    for(let i = 0; i < x.length; i++){
        up = 1;
        down = 1;
        for(let j = 0; j < x.length; j++){
            up *= x[j][(j + i) % x.length];
            down *= x[x.length - 1 -j][(j + i) % x.length];
        }

        ups += up;
        downs += down;
        if(x.length >= 2){
            break;
        }
    }
    re = ups - downs;
    return re;
}
function mul(x,y,n){
    let re = [];
    for(let i = 0; i < x.length; i++){
        re[i] = [];
        for(let j = 0; j < x.length; j++){
            if(j == n){
                re[i][j] = y[i];
            }else{
                re[i][j] = x[i][j];
            }
        }
    }
    return re;
}
for(let i = 0; i < n; i++){
    matrix[i] = [];
    for(let j = 0; j < n; j++){
        if(i == 0 && j == 0){
            matrix[i][j] = x1.length;
        }else{
            matrix[i][j] = cal(x1, (i + j));
        }
    }
}
for(let i = 0; i < n; i++){
    if(i == 0){
        b[i] = cal(y, 1);
    }else{
        b[i] = cal2(x1, y, i);
    }
}
det(matrix);
let a = [];
for(let i = 0; i < b.length ;i++){
    a[i] = det(mul(matrix,b,i)) / det(matrix);
}
let ans = 0;
for(let i = 0; i < a.length ; i++){
    if(i == 0){
        ans += a[i];
    }else{
        ans += a[i] * Math.pow(find, i);
    }
}
console.log(a);
console.log(mul(matrix, b, 0));