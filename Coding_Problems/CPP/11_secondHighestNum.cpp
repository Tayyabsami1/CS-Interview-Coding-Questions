#include <iostream>
#include <vector>
#include <limits>

using namespace std;

int findSecondHighestNumber(vector<int>& arr)
{
    int first = numeric_limits<int>::min();
    int second = numeric_limits<int>::min();

    for (int n : arr)
    {
        if (n > first)
        {
            second = first;
            first = n;
        }
        else if (n > second && n != first)
        {
            second = n;
        }
    }

    return second == numeric_limits<int>::min() ? -1 : second;
}

int main()
{
    vector<int> arr = {3, 1, 4, 1, 5, 9, 2, 6};

    cout << findSecondHighestNumber(arr);

    return 0;
}
