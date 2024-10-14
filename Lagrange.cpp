#include <iostream>
using namespace std;
double function(int num){
    double re;
    switch (num)
    {
    case 0 : re = 9.81;
        break;
    case 20000 : re = 9.7481; break;
    case 40000 : re =  9.6879; break;
    case 60000 : re = 9.6879; break;
    case 80000 : re = 9.5682; break;
    }
    return re;
}
double L0(int c0, int c1, int num){
    double left = c1 - num;
    double right = c1 - c0;
    double re =  left / right;
    return re;
}


int main(){
    int num;
    int count;
    cout << "input" << endl;
    cin >> count;
    int c[count];
    double f[count];
    for(int i = 0; i < count; i++){
        cin >> c[i];
        f[i] = function(c[i]);
    }
    cin >> num;
    double result = 0;

    for(int i = 0; i < count; i++){
        double cal = 1.0;
        for(int j = 0; j < count; j++){
            if(i != j){
                cal *= L0(c[i], c[j], num);
            }
        }
        cal *= f[i];
        result += cal;
    }
    cout << "f(" << num << ") = " << result << endl;
}