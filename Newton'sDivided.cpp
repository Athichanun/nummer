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
double C1(int c0, int c1, int num){
    return (function(c1) - function(c0)) / (c1 - c0);
}
double C2(int c0, int c1, int c2, int num){
    double right = C1(c0, c1, num) ;
    double left = C1(c1, c2, num) ;
    return ((left - right) / (c2 - c0)) ;
}
double C3(int c0, int c1, int c2, int c3 ,int num){
    double right = C2(c0, c1, c2, num);
    double left = C2(c1, c2, c3, num);
    return ((left - right) / (c3 - c0));
}
double C4(int c0, int c1, int c2, int c3 ,int c4, int num){
    double right = C3(c0, c1, c2, c3, num);
    double left = C3(c1, c2, c3, c4, num);
    return ((left - right) / (c4 - c0));
}
double C5(int c0, int c1, int c2, int c3 ,int c4, int c5, int num){
    double right = C4(c0, c1, c2, c3, c4, num);
    double left = C4(c1, c2, c3, c4, c5, num);
    return ((left - right) / (c5 - c0));
}

int main(){
    int num;
    int count;
    cout << "input" << endl;
    cin >> count;
    int c[count];
    for(int i = 0; i < count; i++){
        cin >> c[i];
    }
    cin >> num;
    double result;
    switch (count)
    {
    case 2: result = function(c[0]) + (C1(c[0] , c[1], num)* (num - c[0]));break;
    case 3: result = function(c[0]) + (C1(c[0] , c[1], num)* (num - c[0]))+ 
            (C2(c[0] , c[1], c[2], num)* (num - c[0]) * (num - c[1])) ; break;
    case 4: result = function(c[0]) + (C1(c[0] , c[1], num)* (num - c[0]))+ 
            (C2(c[0] , c[1], c[2], num)* (num - c[0]) * (num - c[1])) +
            (C3(c[0] , c[1], c[2], c[3], num)* (num - c[0]) * (num - c[1]) * (num - c[2])); break;
    case 5:  result = function(c[0]) + (C1(c[0] , c[1], num)* (num - c[0]))+ 
            (C2(c[0] , c[1], c[2], num)* (num - c[0]) * (num - c[1])) +
            (C3(c[0] , c[1], c[2], c[3], num)* (num - c[0]) * (num - c[1]) * (num - c[2])) +
            (C4(c[0] , c[1], c[2], c[3], c[4], num)* (num - c[0]) * (num - c[1]) * (num - c[2]) * (num - c[3])); break;
    default:
        break;
    }
    cout << "f(" << num << ") = " << result << endl;
}