// Approach 1 — Sort and slice
// Sort descending, take first k elements.

// O(n log n) time
// Simple but you're doing more work than needed — you sort everything just to get k elements

// Approach 2 — Min-Heap of size K ✅ Best answer

// Maintain a heap of size k
// For every new element, if it's larger than the smallest in the heap, replace it
// At the end the heap contains exactly the k largest elements
// O(n log k) time — much better when k << n

// Approach 3 — Quickselect

// O(n) average, but O(n²) worst case, harder to implement in interview
// Mention it if interviewer pushes for optimal, but heap is the expected answer

// Heap is a binary tree , it is a complete binary tree. The two main types are MinHeap and MaxHeap
// Insert is O(log n)
// Delete is O(logn)
// Max Min O(1)

#include <vector>
#include <queue>
using namespace std;

int findKthLargest(vector<int> &nums, int k)
{
    priority_queue<int, vector<int>, greater<int>> minHeap;

    for (int n : nums)
    {
        minHeap.push(n);
        if (minHeap.size() > k)
            minHeap.pop();
    }

    vector<int> result;

    while (!minHeap.empty())
    {
        result.push_back(minHeap.top());
        minHeap.pop();
    }

    return result;
}

int main()
{
    return 0;
}