import { ListNode } from './list-node.model';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let temp = head;
  while (temp) {
    if (temp.val === temp.next?.val) {
      temp.next = temp.next.next;
    } else temp = temp.next;
  }
  return head;
}
