#include <iostream>
#include <string>

using namespace std;

struct TreeNode {
    string value;
    TreeNode* left;
    TreeNode* right;
    TreeNode(string val) : value(val), left(nullptr), right(nullptr) {}
};

int countApples(TreeNode* root)
{
    if (root == nullptr)
        return 0;

    int current = root->value == "yes" ? 1 : 0;
    int leftCount = countApples(root->left);
    int rightCount = countApples(root->right);

    return current + leftCount + rightCount;
}

int main()
{
    TreeNode* root = new TreeNode("yes");
    root->left = new TreeNode("no");
    root->right = new TreeNode("yes");
    root->left->left = new TreeNode("yes");

    cout << countApples(root);

    return 0;
}
