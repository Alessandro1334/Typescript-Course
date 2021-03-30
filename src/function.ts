// Typedata pada balikan function

function getName(): string{
  return "Hello, my name is Ales";
}

function getAge(): number {
  return 123;
}

// void tidak bisa me-return data 
function printName(): void {
  console.log("print name");
}

// arguments type
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(20,5);

// Error 
// function add(val1, val2){
//   return val1 + val2;
// }

// Function as type
type Age = number;
// let age: Age = "String"; // Error

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number) : number => {
  return val1 + val2;
}

// Default Parameter
const fullName = (first: string, last: string = "Sinambela"): string => {
  return first + " " + last;
}

// Optional Paramter
const getUmur = (val1: number, val2?: number): string => {
  return val1 + " " + val2;
  // return val1 + val2;
}

console.log(getUmur(2,12));



 



