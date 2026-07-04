#include <iostream>
#include <stack>
#include <unordered_map>

using namespace std;

bool isValid(string s)
{
    stack<char> st;

    unordered_map<char, char> map;
    map[')'] = '(';
    map['}'] = '{';
    map[']'] = '[';

    for (char ch : s)
    {
        if (ch == '(' || ch == '{' || ch == '[')
            st.push(ch);

        else
        {
            if (st.empty() || st.top() != map[ch])
                return false;

            st.pop();
        }
    }

    return st.empty();
}

int main()
{
    cout << isValid("()[]{}");

    return 0;
}