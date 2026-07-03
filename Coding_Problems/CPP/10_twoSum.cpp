#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

vector<int> twoSum(vector<int>& nums, int target)
{
    unordered_map<int, int> map;

    for (int i = 0; i < nums.size(); i++)
    {
        int rem = target - nums[i];

        if (map.count(rem))
            return {map[rem], i};

        map[nums[i]] = i;
    }

    return {};
}

int main()
{
    vector<int> nums = {3, 3, 7};

    vector<int> result = twoSum(nums, 10);

    cout << result[0] << ", " << result[1];

    return 0;
}
