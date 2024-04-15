#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int lengthOfLastWord(string s)
{
    int right = s.length() - 1;
    int left = 0;

    while (right > 0 && s[right] == ' ')
    {
        right--;
    }

    left = right;
    while (left >= 0 && s[left] != ' ')
    {
        left--;
    }

    if (left == -1)
        return right + left + 2;
    else if(left == 0)
        return right - left;
}

int main()
{
    return 0;
}