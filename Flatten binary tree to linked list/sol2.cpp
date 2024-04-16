#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

TreeNode *prev = nullptr;
void flatten(TreeNode *root)
{
    if (!root)
        return;

    flatten(root->right);
    flatten(root->left);
    root->right = prev;
    root->left = nullptr;
    prev = root;
}

int main()
{
    return 0;
}