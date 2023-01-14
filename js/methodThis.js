// const petya = {
//     username: "Petya",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.username);
//     },
//   };
  
//   petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
//   petya.showName(); // 'Petya'

//   function foo() {
//     console.log(this);
//   }
  
//   foo(); // window без "use strict" и undefined с "use strict"

//   const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() это вызов метода getFullName без объекта
//     console.log(`Обрабатываем заявку от ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// method call

//   function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   };
  
//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Поли",
//   };

  
//   greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.
//   greetGuest.call(poly, "С приездом"); // С приездом, Поли.

//   method bind- создает и возвращает копию функции, которую можно передать куда угодно

// function greet(clientName) {
//     return `${clientName}, добро пожаловать в «${this.service}».`;
//   }
  
//   const steam = {
//     service: "Steam",
//   };
 
//   const steamGreeter = greet.bind(steam);

//   steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

//   const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() это вызов метода getFullName без объекта
//     console.log(`Обрабатываем заявку от ${callback()}.`);
//   };
  
//   makeMessage(customer.getFullName.bind(customer));

// task 1 module 5

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };

//   console.log(pizzaPalace.order('Smoked'));

// //   task 3

// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);

//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
    // Change code above this line
//   };
//   console.log(historyService.getOrdersLog());