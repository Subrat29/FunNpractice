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
    int carry = 0, l = 0, m = 0;
    ListNode *temp1 = l1;
    ListNode *temp2 = l2;

    while (temp1)
    {
        temp1 = temp1->next;
        l++;
    }
    while (temp2)
    {
        temp2 = temp2->next;
        m++;
    }

    temp1 = l1;
    temp2 = l2;

    if (l > m)
    {
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

        while (temp2)
        {
            int sum = temp2->val + carry;
            temp2->val = sum % 10;

            if (sum > 9)
                carry = sum / 10;
            else
                carry = 0;
            temp2 = temp2->next;
        }

        if (carry > 0)
        {
            ListNode *carryNode = new ListNode(carry);
            temp2->next = carryNode;
        }
    }

    else
    {
        while (temp1 && temp2)
        {
            int sum = temp1->val + temp2->val;
            if (sum > 9)
                carry = sum / 10;
            else
                carry = 0;

            temp2->val = sum % 10 + carry;
            temp1 = temp1->next;
            temp2 = temp2->next;
        }

        if (carry > 0)
        {
            while (temp2)
            {
                int sum = temp1->val + carry;
                temp1->val = sum % 10;

                if (sum > 9)
                    carry = sum / 10;
                else
                    carry = 0;

                temp1 = temp1->next;
            }
        }
    }

    if (l > m)
        return l1;
    else
        return l2;
}

int main()
{
    return 0;
}