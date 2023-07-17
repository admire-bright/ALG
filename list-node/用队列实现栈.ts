import { ListNode } from './list-node.model';

class MyStack {
  _node: ListNode | null = null;
  constructor() {}

  push(x: number): void {
    if (!this._node) this._node = new ListNode(x);
    else {
      let temp: ListNode | null = this._node;
      while (temp?.next) {
        temp = temp.next;
      }
      temp.next = new ListNode(x);
    }
  }

  pop(): number {
    if (this._node) {
      let temp: ListNode = this._node;
      while (temp.next) {
        if (!temp.next.next) {
          let res = temp.next;
          temp.next = null;
          return res.val;
        } else temp = temp.next;
      }
      this._node = null;
      return temp.val;
    } else return null;
  }

  top(): number {
    let temp: ListNode | null = this._node;
    while (temp?.next) {
      temp = temp.next;
    }
    return temp?.val ?? null;
  }

  empty(): boolean {
    return this._node === null;
  }
}
