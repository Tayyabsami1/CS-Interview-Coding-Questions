#include <iostream>
#include <vector>
#include <string>

using namespace std;

const int MAX_IP_PARTS = 4;
const int MAX_IP_VALUE = 255;

void backTrack(string& s, int index, vector<string>& parts, vector<string>& result)
{
    if (parts.size() == MAX_IP_PARTS)
    {
        if (index == (int)s.length())
            result.push_back(parts[0] + "." + parts[1] + "." + parts[2] + "." + parts[3]);
        return;
    }

    for (int len = 1; len <= 3; len++)
    {
        if (index + len > (int)s.length())
            break;

        string segment = s.substr(index, len);

        if (segment.length() > 1 && segment[0] == '0')
            continue;

        if (stoi(segment) > MAX_IP_VALUE)
            continue;

        parts.push_back(segment);
        backTrack(s, index + len, parts, result);
        parts.pop_back();
    }
}

vector<string> restoreIpAddress(string s)
{
    vector<string> result;
    vector<string> parts;
    backTrack(s, 0, parts, result);
    return result;
}

int main()
{
    vector<string> result = restoreIpAddress("25525511135");

    for (const string& ip : result)
        cout << ip << endl;

    return 0;
}
