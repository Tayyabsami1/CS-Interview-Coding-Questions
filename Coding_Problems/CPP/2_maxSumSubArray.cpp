#include <iostream>
#include <vector>

using namespace std;

int maxSumSubarray(vector<int>& arr, int k) {
    int windowSum = 0;
    int maxSum = 0;

    // Build first window
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    // Slide the window
    for (int i = k; i < arr.size(); i++) {
        windowSum += arr[i];
        windowSum -= arr[i - k];

        maxSum = maxSum>windowSum? maxSum:windowSum;
    }

    return maxSum;
}

int main() {
    vector<int> arr = {1,2,3,4,5};
    int k = 2;

    cout << maxSumSubarray(arr, k);

    return 0;
}