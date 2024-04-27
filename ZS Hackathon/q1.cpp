#include <bits/stdc++.h>
using namespace std;

int solve(int arr[], int n)
{
    int cnt = 0;
    for (int i = 0; i < n; i++)
    {
        // while (arr[i] > 0)
        // {
        //     arr[i] -= 3;
        //     cnt++;
        // }
        
        int x = arr[i] / 3;
        int y = arr[i] % 3;

        cnt += x;
        if (y > 0)
            cnt++;
    }
    return cnt;
}

int main()
{
    int arr[] = {5, 3, 5, 7, 3, 2, 8, 4, 6, 7};
    int n = 10;
    int ans = solve(arr, n);
    cout << ans << endl;
    return 0;
}