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

// function Storage(items){
// this.items = items;
// } 
// Storage.prototype.getItems = function(){
// return this.items;
// };
// Storage.prototype.addItem = function(newItem){
// return this.items.push(newItem);

// };
// Storage.prototype.removeItem = function (item) {
//     const itemIndex = this.items.indexOf(item);
// return this.items.splice(itemIndex, 1);
// };


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


//  7

// function StringBuilder(baseValue){
// this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function(){
// return this.value;
// };
// StringBuilder.prototype.padEnd = function (str){
// return this.value = this.value + str;
// } 
// StringBuilder.prototype.padStart = function(str){
// return this.value = str + this.value;
// }
// StringBuilder.prototype.padBoth = function(str){
// return this.value = str + this.value + str;
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


//  8

//  теория (Объявление класса)
// class User {
//   // Тело класса
// }

// const mango = new User();

//  задача
// class Car {

// };


//  9
// //  теория (Конструктор класса)
// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   email;

//   // Аналог функции-конструктора
//   constructor({ name, email }) {
//     // Инициализация объявленных свойств
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log(mango);

//  задача
// class Car{
//   brand;
//   model;
//   price;

// constructor({brand, model, price}){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// }
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000}));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));


//  10

//  теория (Методы класса)
// class User {
//   constructor({ name, breed }) {
//     this.name = name;
//     this.breed = breed;
//   }

//   // Аналог User.prototype.getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Аналог User.prototype.changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

//  задача
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice(){
//   return this.price;
//   }
//   changePrice(newPrice){

//   return this.price = newPrice;
//   }
// }

// console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(Car.prototype.getPrice());
// console.log(Car.prototype.changePrice(35000));
// console.log(Car.prototype.getPrice());



//  11

//  теория (Приватные свойства)
// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Будет ошибка, это приватное свойство

//  задача
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand(){
//     return this.#brand;
//   }
//   changeBrand(newBrand){
//   return this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));
// console.log(сar.getBrand());
// console.log(сar.changeBrand('Honda'));


//  12

// class Storage{
//   #items;
//   constructor(items){
//   this.#items = items;
//   }

// getItems() {
//   return this.#items;
// };
// addItem(newItem) {
//   this.#items.push(newItem);
// };
// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


//  13

// class StringBuilder {
//   #value;
//   constructor (baseValue){
//   this.#value = baseValue;
// }

// getValue() {
//   return this.#value;
// };

// padEnd(str) {
//   this.#value += str;
// };

// padStart(str) {
//   this.#value = str + this.#value;
// };

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


//  14

// //  теория (Геттеры и сеттеры)
// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log(mango.email); // mango@mail.com
// mango.email = 'mango@supermail.com';
// console.log(mango.email); // mango@supermail.com


// set email(newEmail) {
//   if(newEmail === '') {
//     console.log('Ошибка! Почта не может быть пустой строкой!');
//     return;
//   }

//   this.#email = newEmail;
// }

//  задача
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//  set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }


//  15

//  теория (Статические свойства)
// class User {
//   // Объявление и инициализация статического свойства
//   static TYPES = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
//   #type;

//   constructor({ email, type }) {
//     this.#email = email;
//     this.#type = type;
//   }

//   get type() {
//     return this.#type;
//   }

//   set type(newType) {
//     if (User.TYPES[newType] === undefined) {
//       console.log('Ошибка! Такого типа пользователя не существет');
//       return;
//     }

//     this.#type = newType;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   type: User.TYPES.ADMIN,
// });

// console.log(mango.TYPES); // undefined
// console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

// console.log(mango.type); // admin
// mango.type = User.TYPES.EDITOR;
// console.log(mango.type); // editor

//  задача
// class Car {
//   // Пиши код ниже этой строки
//     static MAX_PRICE = 50000;
//     #price;

//     constructor({ price }) {
//     this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE){
//         return this.#price = newPrice;
//     }
//     }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


//  16

// теория (Статические методы)
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(
//   User.isEmailTaken('poly@mail.com')
// ); // false

// console.log(
//   User.isEmailTaken('mango@mail.com')
// ); // true

//  задача
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price){
//    if(price > Car.#MAX_PRICE){
//    return 'Внимание! Цена превышает допустимую.';
//    }
//     return 'Всё хорошо, цена в порядке.';
//    }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


//  17

//  теория (Наследование классов)
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   // Тело класса ContentWriter
// }

// const writer = new ContentWriter('mango@mail.com');
// console.log(writer); // { email: 'mango@mail.com' }
// console.log(writer.email); // 'mango@mail.com'

//  задача
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User{
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser'
//     }
// }
// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);


//  18

//  теория (Конструктор дочернего класса)
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   posts;

//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
// console.log(writer); // { email: 'mango@mail.com', posts: [] }
// console.log(writer.email); // 'mango@mail.com'

//  задача
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;
  
//  constructor ({email, accessLevel}){
//    super(email);
//    this.accessLevel = accessLevel;
//  }
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


//  19
//  теория (Методы дочернего класса)
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   posts;

//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
// console.log(writer); // { email: 'mango@mail.com', posts: [] }
// console.log(writer.email); // 'mango@mail.com'
// writer.addPost('post-1');
// console.log(writer.posts); // ['post-1']

//  задача
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//  blacklistedEmails = [];
  
  
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//  blacklist(email){
//   this.blacklistedEmails.push(email);
//   }
//  isBlacklisted(email){
 
//   return this.blacklistedEmails.includes(email);
//   }
  
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 
