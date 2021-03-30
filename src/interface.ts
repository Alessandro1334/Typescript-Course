interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log('Power On')
  }
  off(): void {
    console.log('Power Off')
  }
}

class Macbook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }
  on(): void {
    console.log('Power On')
  }
  off(): void {
    console.log('Power Off')
  }
}

let asus = new Asus('Asus', true);
console.log(asus.on())
console.log(asus.off())

let mb = new Macbook('Macbook', true);
console.log(mb.on())
console.log(mb.off())
