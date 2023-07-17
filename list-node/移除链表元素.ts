import { ListNode } from './list-node.model';

function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head?.val === val) {
    head = head.next;
  }
  let temp = head;
  while (temp) {
    if (temp.next?.val === val) temp.next = temp.next.next;
    else temp = temp.next;
  }
  return head;
}
