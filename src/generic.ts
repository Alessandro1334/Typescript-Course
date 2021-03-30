// Generic merupakan tipe data yang dinamis

function getData(value: any) {
  return value;
}

// Generic Type
function myData<T>(value: T) {
  return value;
}

console.log(myData("Alessandro"))
console.log(myData(123))

// Generic Type on arrow function
const arrowFunc = <T>(value: T) => {

}

