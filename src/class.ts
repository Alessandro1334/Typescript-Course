export class User {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value
  }

  getName = (): string => {
    return this.name;
  }
}

// let user = new User('Alessandro', 20);


// Ineheritance = kelar turunan
// public = bisa diakses di semua class / dari luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakases dari class itu sendiri

// Setter 
// Getter

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone
  }

  static getNameRole() {
    return "Hello guys";
  }
  
  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write
    };
  };

  set email(value: string) {
    if (value.length < 5) {
      this._email = "invalid email format";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email
  }
}

// let admin = new Admin('088439573','Anton', 25);
// admin.getName();
// admin.getRole();
// admin.setName('Alesssandro');
// admin.phone;

// admin.email = 'alessandro@mail.com';
// console.log(admin.email);

console.log(Admin.getNameRole())

