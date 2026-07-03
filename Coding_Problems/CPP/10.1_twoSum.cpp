#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addTwoNumbers(ListNode* l1, ListNode* l2)
{
    ListNode dummy(0);
    ListNode* current = &dummy;
    int carry = 0;

    while (l1 || l2 || carry)
    {
        int val1 = l1 ? l1->val : 0;
        int val2 = l2 ? l2->val : 0;

        int sum = val1 + val2 + carry;
        int digit = sum % 10;
        carry = sum / 10;

        current->next = new ListNode(digit);
        current = current->next;

        if (l1) l1 = l1->next;
        if (l2) l2 = l2->next;
    }

    return dummy.next;
}

void printList(ListNode* head)
{
    while (head)
    {
        cout << head->val;
        if (head->next)
            cout << " -> ";
        head = head->next;
    }
    cout << endl;
}

int main()
{
    ListNode* l1 = new ListNode(2);
    l1->next = new ListNode(4);
    l1->next->next = new ListNode(3);

    ListNode* l2 = new ListNode(5);
    l2->next = new ListNode(6);
    l2->next->next = new ListNode(4);

    ListNode* result = addTwoNumbers(l1, l2);
    printList(result);

    return 0;
}
