#include <iostream>
#include <string>
#include <unordered_set>
#include <algorithm>

using namespace std;

int lengthOfLongestSubstring(string s) {

    int left = 0;
    int maxLen = 0;

    unordered_set<char> seen;

    for (int right = 0; right < s.size(); right++) {

        while (seen.count(s[right])) {
            seen.erase(s[left]);
            left++;
        }

        seen.insert(s[right]);

        maxLen = max(maxLen, right - left + 1);
    }

    return maxLen;
}

int main() {

    string s = "abcabcbbabcdef";

    cout << lengthOfLongestSubstring(s);

    return 0;
}