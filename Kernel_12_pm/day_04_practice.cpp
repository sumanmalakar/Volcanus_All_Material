#include <iostream>
using namespace std;
int main()
{
    bool aadhar = true;
    bool panCard = false;

    //  && operator - check both condition
    // || or operator - check any one codition

    if (aadhar == true || panCard == true)
    {
        cout << "you can open account in our bank ";
    }
    else
    {
        cout << "you can't ";
    }

    return 0;
}