#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int calculate_ans(int N, int Q, vector<int> A, vector<int> T, vector<int> X, vector<int> Y)
{
    vector<int> v;
    for (int i = 0; i < Q; i++)
    {
        if (T[i] == 1)
        {
            A[X[i] - 1] = Y[i];
        }
        else
        {
            int response = *max_element(A.begin(), A.end()) - X[i];
            v.push_back(response);
        }
    }
    int result = 0;
    for (int num : v)
    {
        result ^= num;
    }
    return result;
}

int main()
{
    // int N = 3;
    // int Q = 3;
    // vector<int> A = {1,2,3};
    // vector<int> T = {2,1,2};
    // vector<int> X = {1,3,1};
    // vector<int> Y = {2,2,2};

    int N = 4;
    int Q = 2;
    vector<int> A = {1,1,2,4};
    vector<int> T = {2,2};
    vector<int> X = {2,1};
    vector<int> Y = {1,3};
    
    cout << "Ans: " << calculate_ans(N, Q, A, T, X, Y) << endl;
    return 0;
}