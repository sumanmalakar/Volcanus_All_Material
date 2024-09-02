#include<iostream>
using namespace std;

int main(){
    int age;

    cout<<"Enter your age "<<endl;

    cin>>age;

    if(age>=18){
        cout<<"You can drive";
    }else{
        cout<<"You are not eligible for drive";
    }

    return 0;
}