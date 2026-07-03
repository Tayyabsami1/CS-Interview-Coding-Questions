#include <iostream>
#include <vector>

using namespace std;

vector<int> findSubarray(vector<int>& nums, int k) {

    int left = 0;
    int sum = 0;

    for (int right = 0; right < nums.size(); right++) {

        sum += nums[right];

        // ONLY ONE REMOVAL
        if (sum > k) {
            sum -= nums[left];
            left++;
        }

        if (sum == k) 
            return vector<int>(nums.begin() + left,
                               nums.begin() + right + 1);
        
    }

    return {};
}

int main() {

    vector<int> nums = {1,2,3,4,5};

    vector<int> ans = findSubarray(nums, 9);

    for (int x : ans)
        cout << x << " ";

    return 0;
}