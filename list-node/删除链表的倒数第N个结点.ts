class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let total = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    total++;
  }
  const m = total - n;
  let pointer = 0;
  const node = new ListNode(0, head);
  temp = node;
  while (m > pointer) {
    pointer++;
    temp = temp!.next;
  }
  temp!.next = temp!.next!.next;
  return head;
}
