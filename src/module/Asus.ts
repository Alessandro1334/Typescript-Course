import Laptop from "./BaseLaptop";

class Asus<T> extends Laptop<T> {
  constructor(type: T, numberic: boolean, touchButton: boolean) {
    super("Asus", type, numberic, touchButton);
  }
}

export default Asus;