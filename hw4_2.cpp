
#include <iostream>
using namespace std;

void cal(double x[3][4]){
    double copy[3][4] = {{-2,3,1,9},{3,4,-5,0},{1,-2,1,-4}};
    for(int i = 1; i < 3; i++){
        for(int j = 0; j < 4; j++){
            copy[0][j] /= x[0][0];
            copy[0][j] *= x[i][0];
            copy[i][j] -= copy[0][j];
            // cout << x[i][0] << endl;
        }
        for(int i = 0 ; i < 4; i++){
            copy[0][i] = x[0][i];
        }
    }
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 4; j++){
            x[i][j] = copy[i][j];
        }
    }
    ///////a32///////
    for(int i = 0 ; i < 4 ;i++){
        copy[1][i] /= x[1][1];
        copy[1][i] *= x[2][1];
        copy[2][i] -= copy[1][i];
    }
    for(int i = 0 ; i < 4; i++){
        copy[1][i] = x[1][i];
    }
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 4; j++){
            x[i][j] = copy[i][j];
        }
    }
}
int main(){
    double data[3][4] = {{-2,3,1,9},{3,4,-5,0},{1,-2,1,-4}};
    cal(data);
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 4; j++){
            cout << data[i][j] << "\t"; 
        }
        cout << endl;
    }
}

