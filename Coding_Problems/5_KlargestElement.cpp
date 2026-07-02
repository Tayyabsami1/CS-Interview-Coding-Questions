#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int findKthLargest(vector<int>& nums, int k)
{
    priority_queue<int, vector<int>, greater<int>> minHeap;

    for (int n : nums)
    {
        minHeap.push(n);

        if (minHeap.size() > k)
            minHeap.pop();
    }

    return minHeap.top();
}

int main()
{
    vector<int> nums = {3,2,1,5,6,4};

    cout << findKthLargest(nums, 2);

    return 0;
}