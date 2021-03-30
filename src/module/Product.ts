import Asus from "./Asus";
import MacBook from "./MacBook";

let asus = new Asus("Zen Book", true, true);
console.log(asus);

let macBook = new MacBook("Macbook Pro 2020", false, false);
console.log(macBook);
macBook.a();
macBook.b();