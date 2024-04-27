#include <bits/stdc++.h>
using namespace std;

int solve(vector<int> v, int n)
{
    sort(v.begin(), v.end());
    int start = 0;
    int end = n - 1;

    int sum = 0;
    while (start < end)
        sum += v[end--] - v[start++];
    return sum;
}

int main()
{
    vector<int> v = {-8, -6, -5, 5, 7};
    int n = v.size();
    int ans = solve(v, n);
    cout << ans << endl;
    return 0;
}