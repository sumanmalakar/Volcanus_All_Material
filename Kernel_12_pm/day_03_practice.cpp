#include<iostream>
using namespace std;

int main(){
    string name;
    int a,b,c;

    cout<<"Enter your name "<<endl;
    cin>>name;
    cout<<"Enter value of a"<<endl;
    cin>>a;
    cout<<"Enter the value of b"<<endl;
    cin>>b;
    cout<<"Enter the value of c"<<endl;
    cin>>c;

    cout<<"Your name = "<<name<<" result = "<<(a+b)*c;
}