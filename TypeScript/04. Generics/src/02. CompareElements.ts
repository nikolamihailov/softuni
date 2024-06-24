class CompareElements<T> {
  private _arr: T[];

  constructor(arr: T[]) {
    this._arr = arr;
  }

  compare(arg: T): number {
    let matchedTimes = 0;
    for (let el of this._arr) {
      if (arg === el) matchedTimes++;
    }
    return matchedTimes;
  }

  get arr(): T[] {
    return this._arr;
  }
}

const c = new CompareElements(["a", "b", "ab", "abc", "cba", "b"]);

console.log(c.compare("b"));

const c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(c2.compare(1));
