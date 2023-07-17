import { ListNode } from './list-node.model';

function reverseList(head: ListNode | null): ListNode | null {
  let node = null;
  while (head) {
    let temp = head.next;
    head.next = node;
    node = head.next;
    head = temp;
  }
  return node;
}

function reverseList1(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null,
    cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
