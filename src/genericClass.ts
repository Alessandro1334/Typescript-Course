class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(1,2,3);
// numbers.add(4);
// numbers.addMultiple(2,6)
// console.log(numbers.getAll());  

let random = new List<number | string>(1,2,3,"empat","lima");
random.add(6);
random.addMultiple(7,"delapan")
console.log(random.getAll());