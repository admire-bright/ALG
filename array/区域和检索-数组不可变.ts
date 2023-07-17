class NumArray {
  _nums: number[];
  constructor(nums: number[]) {
    this._nums = nums;
  }

  sumRange(left: number, right: number): number {
    let res = 0;
    for (let index = left; index <= right; index++) {
      res += this._nums[index];
    }
    return res;
  }
}
