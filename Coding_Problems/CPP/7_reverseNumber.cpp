#include <iostream>
#include <cmath>

using namespace std;

int reverseNumber(int n)
{
    int reversed = 0;
    int num = abs(n);

    while (num > 0)
    {
        reversed = reversed * 10 + (num % 10);
        num /= 10;
    }

    return (n < 0) ? -reversed : reversed;
}

int main()
{
    cout << reverseNumber(12345) << endl;
    cout << reverseNumber(-9876);

    return 0;
}