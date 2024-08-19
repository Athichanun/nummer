
#include <iostream>
using namespace std;

void cal(double x[3][6]){
    double copy[3][6] = {{-2,3,1,1,0,0},{3,4,-5,0,1,0},{1,-2,1,0,0,1}};
    for(int i = 1; i < 3; i++){
        for(int j = 0; j < 6; j++){
            copy[0][j] /= x[0][0];
            copy[0][j] *= x[i][0];
            copy[i][j] -= copy[0][j];
            // cout << x[i][0] << endl;
        }
        for(int i = 0 ; i < 6; i++){
            copy[0][i] = x[0][i];
        }
    }
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 6; j++){
            x[i][j] = copy[i][j];
        }
    }
    /////////a32////////
    for(int i = 0 ; i < 6 ;i++){
        copy[1][i] /= x[1][1];
        copy[1][i] *= x[2][1];
        copy[2][i] -= copy[1][i];
    }
    for(int i = 0 ; i < 6; i++){
        copy[1][i] = x[1][i];
    }
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 6; j++){
            x[i][j] = copy[i][j];
        }
    }
}
void recal(double x[3][6]){
    double copy[3][6]= {{-2,3,1,1,0,0},{3,4,-5,0,1,0},{1,-2,1,0,0,1}};
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 6; j++){
            copy[i][j] = x[i][j]; 
        }
    }
    for(int i = 1; i < 3; i++){
        for(int j = 0; j < 6; j++){
            copy[2][j] /= x[2][2];
            copy[2][j] *= x[2-i][2];
            copy[2-i][j] -= copy[2][j];
        }
        
        for(int i = 0 ; i < 6; i++){
            copy[2][i] = x[2][i];
        }
    }
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 6; j++){
            x[i][j] = copy[i][j];
        }
    }
    ////////a22/////////
    for(int i = 0 ; i < 6 ;i++){
        copy[1][i] /= x[1][1];
        copy[1][i] *= x[0][1];
        copy[0][i] -= copy[1][i];
    }
    for(int i = 0 ; i < 6; i++){
        copy[1][i] = x[1][i];
    }
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 6; j++){
            x[i][j] = copy[i][j];
        }
    }
}
void one(double x[3][6]){
    double copy[3][6]= {{-2,3,1,1,0,0},{3,4,-5,0,1,0},{1,-2,1,0,0,1}};
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 6; j++){
            copy[i][j] = x[i][j]; 
        }
    }
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 6; j++){
            x[i][j] /= copy[i][i]; 
        }
    }
}
int main(){
    double data[3][6] = {{-2,3,1,1,0,0},{3,4,-5,0,1,0},{1,-2,1,0,0,1}};
    cal(data);
    recal(data);
    one(data);
    for(int i = 0; i < 3; i++){
        for(int j = 3; j < 6; j++){
            cout << data[i][j] << "\t"; 
        }
        cout << endl;
    }
}

