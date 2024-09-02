#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    int a,b;
    cin>>a>>b;
    switch (n)
    {
    case 1:
        cout << "Monday" << endl;
        break;

    case 2:
        cout << "Tuesday" << endl;
        break;

    case 3:
        cout << "Wedesday" << endl;
        break;

    case 4:
        cout << "Thursday" << endl;
        break;

    case 5:
        cout << "Friday " << endl;
        break;

    default:
        cout << "Invalid day" << endl;
    }
}