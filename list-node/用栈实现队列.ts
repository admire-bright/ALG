import { ListNode } from './list-node.model';

class MyQueue {
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
    if (!this._node) return null;
    else {
      const res = this._node.val;
      this._node = this._node.next;
      return res;
    }
  }

  peek(): number {
    return this._node ? this._node.val : null;
  }

  empty(): boolean {
    return this._node === null;
  }
}
