#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
{
    int carry = 0, len1 = 0, len2 = 0;
    ListNode *temp1 = l1;
    ListNode *temp2 = l2;

    while (temp1)
    {
        temp1 = temp1->next;
        len1++;
    }
    while (temp2)
    {
        temp2 = temp2->next;
        len2++;
    }

    if (len1 > len2)
    {
        temp1 = l1;
        temp2 = l2;
    }
    else
    {
        temp1 = l2;
        temp2 = l1;
    }

    while (temp1 && temp2)
    {
        int sum = temp1->val + temp2->val + carry;
        temp1->val = sum % 10;

        if (sum > 9)
            carry = sum / 10;
        else
            carry = 0;
        temp1 = temp1->next;
        temp2 = temp2->next;
    }

    // when len of list is greater than other
    while (temp1)
    {
        int sum = temp1->val + carry;
        temp1->val = sum % 10;

        if (sum > 9)
            carry = sum / 10;
        else
            carry = 0;
        temp1 = temp1->next;
    }

    // if carry remains
    if (carry > 0)
    {
        if (len1 > len2)
            temp1 = l1;
        else
            temp1 = l2;

        while (temp1->next)
            temp1 = temp1->next;

        ListNode *carryNode = new ListNode(carry);
        temp1->next = carryNode;
    }

    if (len1 > len2)
        return l1;
    else
        return l2;
}

int main()
{
    return 0;
}