import { ListNode } from './list-node.model';
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

function mergeTwoListsByCycle(l1: ListNode | null, l2: ListNode | null) {
  const listnode: ListNode = {
    val: -1,
    next: null,
  };
  let temp = listnode;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next; // 下一次temp.next改变时，当前temp.next.next跟着改变
  }
  temp.next = l1 ?? l2;
  return listnode.next;
}
