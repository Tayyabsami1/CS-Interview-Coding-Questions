#include <iostream>
#include <vector>

using namespace std;

int findMax(vector<int>& nums)
{
    int maxNum = nums[0];

    for (int i = 1; i < nums.size(); i++)
    {
        if (nums[i] > maxNum)
        {
            maxNum = nums[i];
        }
    }

    return maxNum;
}

int main()
{
    vector<int> nums = {5, 8, 2, 15, 10};

    cout << findMax(nums);

    return 0;
}