#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cout << "Enter the a " << endl;
    cin >> a;
    cout << "Enter the b " << endl;
    cin >> b;

    char op;

    cout << "For addition enter + \n For Subtraction enter - \n For Divide Enter / \n For Multiply Enter * \n";
    cin >> op;

    switch (op)
    {
    case '+':
        cout << a + b;
        break;
    case '-':
        cout << a - b;
        break;
    case '/':
        cout << a / b;
        break;
    case '*':
        cout << a * b;
        break;
    default:
        cout << "Invalid Input ";
    }
}