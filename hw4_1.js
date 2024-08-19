const data = [[-2,3,1,-2,3],[3,4,-5,3,4],[1,-2,1,1,-2]];
let b = [9,0,-4];

function cal(x){
    let up,down;
    let ups = 0;
    let downs = 0;
    let re; 
    for(let i = 0; i < 3; i++){
        up = 1;
        down = 1;
        for(let j = 0; j < 3; j++){
            up *= x[j][j + i];
            down *= x[2-j][j+i];
            // console.log(x[j][j + i],x[2-j][j+i]);
        }
        ups += up;
        downs += down;
        
        console.log(up,down);
    }
    console.log(ups,downs);
    console.log("--------");
    re = ups - downs;
    return re;
}
function mul(x,y,n){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 5; j++){
            if((j%3) == n){
                x[i][j] = y[i];
            }
        }
    }
}
function turn(x,y,n){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 5; j++){
            if((j%3) == n){
                x[i][j] = y[i][j];
            }
        }
    }
}
let re = cal(data);
// console.log(re);
let x = [0,0,0];
let copy= [[-2,3,1,-2,3],[3,4,-5,3,4],[1,-2,1,1,-2]];
for(let i = 0; i < 3; i++){
    mul(copy,b,i);
    for(let j =0; j < 3; j++){
        x[i] = cal(copy) / re;
    }
    turn(copy,data,i);
}
for(let j =0; j < 3; j++){
    console.log("x"+(j+1),"=",x[j]);
}
