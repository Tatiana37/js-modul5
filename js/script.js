"use ctrict";

//  1
//  теория (Прототип объекта и метод Object.create())
// const animal = {
//   legs: 4
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4

//  задача
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(parent);
// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(child);
// console.log(child.hasOwnProperty('name'));
// console.log(child.name);
// console.log(child.hasOwnProperty('age'));
// console.log(child.age);
// console.log(child.hasOwnProperty('surname'));
// console.log(child.surname);


//  2 (цепочка прототипов)
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor); // прототип
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent); // прототип
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки


//  3

//  теория (Функция-конструктор)

// function User() {
//   // Тело функции
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// function User(name, email, age) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User('Манго', 'mango@mail.com');
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User('Поли', 'poly@mail.com');
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

//  задача

// function Car(brand, model, price){
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
// };

// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700));


//  4
//  теория (Объект настроек)
// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

// console.log(mango);
// console.log(poly);

//  задача
// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));


//  5
//  теория (Свойство prototype)
// function User() {}
// console.log(User.prototype); // { constructor: User }

// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com

//  задача
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function(){
// return this.price;
// }

// Car.prototype.changePrice = function (newPrice) {
//     return this.price = newPrice;
   
// };
// // console.log(Car.prototype.changePrice(35000));
// // new Car({ brand: 'Audi', model: 'Q3', price: 35000 })
// console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// console.log(Car.prototype.changePrice);
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(Car.prototype.changePrice(35000));
// console.log(Car.prototype.getPrice);



//  6

