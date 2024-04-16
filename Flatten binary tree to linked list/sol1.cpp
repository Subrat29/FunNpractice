#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Node
{
    int key;
    Node *left, *right;
};

void flatten(Node *root)
{
    Node *pred;
    while (root)
    {
        if (root->left)
        {
            pred = root->left;
            while (pred->right && pred->right != root)
                pred = pred->right;

            if (!pred->right)
            {
                pred->right = root->right;
                root->right = root->left;
                root->left = nullptr;
                root = root->right;
            }
        }
        else
        {
            root = root->right;
        }
    }
}

int main()
{
    return 0;
}