let x = [0,0,0,0];
let b = [12,17,14,7];
let num = [[5,2,0,0],
            [2,5,2,0],
            [0,2,5,2],
            [0,0,2,5]];
let xn = [0,0,0,0];
let error = true;
let I = 1;
while (error){
    console.log("iteration",I,":");
    for(let i = 0; i < num.length; i++){
        let top = b[i];
        for(let j = 0; j < b.length; j++){
            if(i != j){
                if(num[i][j] != 0){
                    top -= (num[i][j] * xn[j]);
                }
            }
            // console.log(num[i][j]);
        }
        xn[i] = top / num[i][i];
    }
    error = false;
    for(let i = 0; i < b.length; i++){
        console.log("x = ",xn[i]);
        let check = Math.abs(xn[i] - x[i]);
        console.log("error = ",check);
        if(check > 0.000001){
            error = true;
        }
    }
    for(let i = 0; i < b.length; i++){
        x[i] = xn[i];
        // console.log(x[i]);
    }
    
    I++;
    break;
}
