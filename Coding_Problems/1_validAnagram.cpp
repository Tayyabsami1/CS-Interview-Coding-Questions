#include <string>
#include <iostream>
using namespace std;

bool isAnagram(string s, string t)
{
    if (s.length() != t.length())
        return false;

    int count[26] = {0};

    for (int i = 0; i < s.length(); i++)
    {
        count[s[i]]++;
        count[t[i]]--;
    }

    for (int c : count)
    {
        if (c != 0)
            return false;
    }

    return true;
}

int main()
{
    string s = "anagram";
    string t = "nagaram";

    bool result = isAnagram(s, t);
    cout << (result ? "true" : "false") << endl;
    return 0;
}