#include <iostream>
#include <climits>

using namespace std;

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int x)
    {
        val = x;
        left = nullptr;
        right = nullptr;
    }
};

bool validate(TreeNode *node, long long min, long long max)
{
    if (node == nullptr)
        return true;

    if (node->val <= min || node->val >= max)
        return false;

    return validate(node->left, min, node->val) && validate(node->right, node->val, max);
}

bool isValidBST(TreeNode *root)
{
    return validate(root, INT_MIN, INT_MAX);
}