#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
using namespace std;

bool canDelete(vector<int> &vec, int l, int r)
{
    if (vec[l] == vec[r])
        return false;
    return true;
}

int get_ans(int n, vector<int> &A, int q, int t, vector<vector<int>> queries)
{
    int ans = 0;
    for (auto &&q : queries)
    {
        if (q[0] == 1)
        {
            if (canDelete(A, q[1] - 1, q[2] - 1))
            {
                ans += q[2] - q[1] + 1;
            }
        }
        else
        {
            A[q[1] - 1] = q[2];
        }
    }
    return ans;
}

int main()
{
    // int n = 5;
    // vector<int> A = {1, 2, 3, 4, 5};
    // int q = 2;
    // int t = 3;
    // vector<vector<int>> queries = {{1, 1, 2}, {1, 2, 5}};

    // int n = 4;
    // vector<int> A = {1, 1, 1, 2};
    // int q = 3;
    // int t = 3;
    // vector<vector<int>> queries = {{1, 1, 4}, {2, 1, 2}, {1, 1, 4}};

    // int n = 5;
    // vector<int> A = {1, 2, 2, 4, 2};
    // int q = 5;
    // int t = 3;
    // vector<vector<int>> queries = {{1, 1, 1}, {1, 2, 5}, {2, 1, 10}, {2, 3, 15}, {1, 1, 4}};

    int n = 4;
    vector<int> A = {1, 1, 1, 3};
    int q = 5;
    int t = 3;
    vector<vector<int>> queries = {{1, 1, 4}};

    cout << "Ans: " << get_ans(n, A, q, t, queries) << endl;
    return 0;
}