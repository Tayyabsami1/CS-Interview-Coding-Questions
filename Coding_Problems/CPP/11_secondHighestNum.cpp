#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int findSecondHighestNumber(vector<int> &arr)
{
    int first = INT_MIN;
    int second = INT_MIN;

    for (int n : arr)
    {
        if (n > first)
        {
            second = first;
            first = n;
        }
        else if (n > second && n != first)
            second = n;
    }

    return second == INT_MIN ? -1 : second;
}

int main()
{
    vector<int> arr = {3, 1, 4, 1, 5, 6, 2, 6};

    cout << findSecondHighestNumber(arr);

    return 0;
}
