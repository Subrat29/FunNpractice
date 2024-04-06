#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

// Structure to represent an employee
struct Employee
{
    int desk;
    int task;
};

// Function to compute the XOR of responses to type 2 queries
int computeXOR(const vector<int> &responses)
{
    int xorResult = 0;
    for (int response : responses)
    {
        xorResult ^= response;
    }
    return xorResult;
}

// Function to conduct a survey on task X with connection power Y
// and compute the response
int conductSurvey(vector<Employee> &employees, int X, int Y)
{
    vector<int> tasks;
    for (const Employee &emp : employees)
    {
        if (emp.task >= X)
        {
            tasks.push_back(emp.task);
        }
    }
    sort(tasks.begin(), tasks.end());
    int Z = X;
    for (int task : tasks)
    {
        if (task >= Z && task < Z + Y)
        {
            Z = task + 1;
        }
    }
    return Z - X;
}

int main()
{
    int N, Q;
    cin >> N >> Q; // Number of employees and queries

    // Reading initial desk and task values of employees
    vector<Employee> employees(N);
    for (int i = 0; i < N; ++i)
    {
        cin >> employees[i].desk >> employees[i].task;
    }

    vector<int> responses; // Stores responses to type 2 queries

    // Processing queries
    for (int i = 0; i < Q; ++i)
    {
        int type, X, Y;
        cin >> type >> X >> Y;
        if (type == 1)
        {
            // Change task value of employee X to Y
            employees[X - 1].task = Y;
        }
        else if (type == 2)
        {
            // Conduct survey on task X with connection power Y
            responses.push_back(conductSurvey(employees, X, Y));
        }
    }

    // Compute the XOR of responses to type 2 queries
    int xorResult = computeXOR(responses);
    cout << "XOR of responses to type 2 queries: " << xorResult << endl;

    return 0;
}
