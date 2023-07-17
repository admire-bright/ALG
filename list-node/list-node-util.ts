import { ListNode } from './list-node.model';
export function insertListNode(rawList: ListNode, insertList: ListNode) {
  const temp = rawList.next;
  rawList.next = insertList;
  // rawList.next!.value = 7;
  // console.log(JSON.stringify(temp));
  // console.log(JSON.stringify(rawList));
  insertList.next = temp;
  // console.log(JSON.stringify(temp));
  // console.log(JSON.stringify(rawList));
}
export function deleteListNode(rawList: ListNode) {
  rawList.next = rawList.next!.next;
  // console.log(JSON.stringify(rawList));
}

export function cycleListNode(rawList: ListNode) {
  let temp: ListNode | null = rawList;
  while (temp) {
    // console.log(JSON.stringify(temp));
    temp = temp.next;
  }
  for (let item: ListNode | null = rawList; item !== null; item = item.next) {
    console.log(item);
  }
}

export function iterationListNode(rawList: ListNode | null): any {
  return rawList ? iterationListNode(rawList.next) : rawList;
}

const RAW_LIST: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 5,
      next: {
        val: 6,
        next: null,
      },
    },
  },
};
const INSERT_LIST: ListNode = {
  val: 3,
  next: {
    val: 4,
    next: null,
  },
};
insertListNode(RAW_LIST, INSERT_LIST);
// deleteListNode(RAW_LIST);
// cycleListNode(RAW_LIST);
// iterationListNode(RAW_LIST);
