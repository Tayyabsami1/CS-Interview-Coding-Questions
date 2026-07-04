#include <iostream>
#include <vector>

using namespace std;

int findFirst(vector<int> &nums, int target)
{
    int left = 0;
    int right = nums.size() - 1;
    int result = -1;

    while (left <= right)
    {
        int mid = left + (right - left) / 2;

        if (nums[mid] == target)
        {
            result = mid;
            right = mid - 1;
        }
        else if (nums[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }

    return result;
}

int findLast(vector<int> &nums, int target)
{
    int left = 0;
    int right = nums.size() - 1;
    int result = -1;

    while (left <= right)
    {
        int mid = left + (right - left) / 2;

        if (nums[mid] == target)
        {
            result = mid;
            left = mid + 1;
        }
        else if (nums[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }

    return result;
}

vector<int> searchRange(vector<int> &nums, int target)
{
    return {findFirst(nums, target), findLast(nums, target)};
}

int main()
{
    vector<int> nums = {8, 7, 7, 8, 10};

    vector<int> result = searchRange(nums, 8);

    cout
        << result[0] << ", " << result[1];

    return 0;
}
