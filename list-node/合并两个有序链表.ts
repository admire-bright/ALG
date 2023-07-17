import { ListNode } from './list-node.model';

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let list3 = new ListNode(),
    temp = list3;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  temp.next = list1 ?? list2;
  return list3.next;
}
