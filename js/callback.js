// автоответчик

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
//     // Логика принятия звонка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//     // Логика записи голограммы
//   }
  
  // processCall("Манго", takeCall, activateAnsweringMachine);
  // processCall("Поли", takeCall, leaveHoloMessage);

  // forEach

//   const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach

// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// method map

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']


// callback function

// const doMath = function(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const multiply = function(x, y){
//   return x * y;
// };

// const subtract = function(x, y){
//   return x - y;
// };

// doMath(2, 5, multiply);

// doMath(10, 2,subtract);

// Filter

// const filter = function(arrays, test) {
//   const filteredArray = [];
//   for (const array of arrays) {
//     if( test(array)) {
//       filteredArray.push(array);
//     }
//   }
//   return filteredArray;
// };

// const callback1 = value => value >= 3;

// const callback2 = function(value){
//   return value <= 4;
// };

// console.log(filter([1, 2, 3, 14, 25], callback1));

// console.log(filter([2, 3, 4, 5], callback2));

// const fruits = [
// { name: "apple", price: 50},
// { name: "lemon", price: 60},
// { name: "strawberry", price: 70},
// { name: "raspberry", price: 80},
// { name: "strawberry", price: 70},
// ];
// const getAllFruitsWithPrice = function (fruit) {
//   return fruit.price > 60;
// };
// console.table(filter(fruits, getAllFruitsWithPrice));

// Замыкание- одна функция возвращает другую функцию (1.13 лекции)

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   }
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.93509864));
// console.log(rounder3(3.93509864));

// task 4

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for ( const pizza of this.pizzas)
//     if(pizza === pizzaName) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(function (number) {
//     console.log(number);
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
    
//   });

//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// method map

// const fruits = [
//    { name: "apple", price: 50, quantity: 40},
//    { name: "lemon", price: 60, quantity: 30},
//    { name: "strawberry", price: 70, quantity: 44}, 
// ];

// const updateFruits = fruits.map(fruit => ({ ...fruit,
// price: (fruit.price * 1.1).toFixed(1)}));

// console.table(updateFruits);

// const fruitsName = 'lemon';
// // const updateQuantity = fruits.map(fruit => {
// //   if(fruitsName === fruit.name) {
// //     return { ...fruit, quantity: fruit.quantity + 19}
// //   }
// //   return fruit;
// // });

// const updateQuantity = fruits.map(fruit => fruitsName === fruit.name ? { ...fruit, quantity: fruit.quantity + 18} : fruit,
// );

// console.table(updateQuantity);

// // method filter

// const numbers = [3, 7, 8, 14, 56];

// const filteredNumbers = numbers.filter(number => {
//   return number > 8 && number < 50;
// });
// console.log (filteredNumbers);

// const biggestPrice = fruits.filter(fruit => fruit.price > 60);

// console.table(biggestPrice);

// // method find

// const number = numbers.find(number => number === 8);

// method reduce
// calculate the total salary

// const salary = {
//   mango: 100,
//   poly: 120,
//   ajax: 180,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);
// console.log(totalSalary);

const fruits = [
  { name: "apple", price: 50, quantity: 40, description: ['ripe', 'sweet',' red']},
  { name: "lemon", price: 60, quantity: 30, description: ['ripe', 'sour', 'yellow']},
  { name: "strawberry", price: 70, quantity: 44, description: ['ripe', 'sweet', 'delicious']}, 
   ];
// // total price
//    const totalQuantityFruit = fruits.reduce((totalQuantity, fruit) => {
//     return totalQuantity + fruit.quantity;
//    }, 0);

//    const totalPriceFruits = fruits.reduce((totalPrice, fruit) => totalPrice + fruit.price * fruit.quantity, 0);
//   //  variant writing 
//   const totalPriceFruits = fruits.reduce((totalPrice, { price, quantity }) => totalPrice + price * quantity, 0);

//    console.log(totalQuantityFruit);
//    console.log(totalPriceFruits);

//   // total descriptions

//   const totalDescrFruits = fruits.reduce((totalDescription, fruit) => {
// //     // variant writing 1

//     // totalDescription.push(...fruit.description);
//     // return totalDescription;

// //     // variant writing 2
//     return [...totalDescription, ...fruit.description];
//   },[]);
// console.log(totalDescrFruits);

// // // статистика 

// const descrStats = totalDescrFruits.reduce((accumulator, description) => {
//   console.log(accumulator);
// // // variant writing

//   if(accumulator[description]){
//     accumulator[description] += 1;

//     return accumulator;
//   }
//   accumulator[description] = 1;

//   return accumulator;

// //   // variant writing

// //   return {...accumulator,
// //   [description]: accumulator[description] ? accumulator[description] += 1 : 1,};
// }, {});

// console.log(descrStats);

//  task 11

// const filterArray = ((numbers, value) => {
//   const filteredNumbers = [];

// numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
//   });
//  console.log(filterArray([1, 2, 3, 4, 5], 3));

//  task 13

//  function changeEven(numbers, value) {
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }

//   const newArray = [];

//   // numbers.forEach(number => {
//   //    if (number % 2 === 0) {
//   //    newArray.push(number + value);
//   //   } else { newArray.push(number);}
//   // });
//   numbers.forEach(number => {
//     number % 2 === 0 ?
//     newArray.push(number + value) : newArray.push(number);
//  });

//   return newArray;
// };

// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// task 24

// const users = 
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
// ];

  

//   // const getUsersWithAge = (users, minAge, maxAge) => {
//   //   return users.filter(user => user.age > minAge && user.age < 
//   //  maxAge)
//   //   };

//   //   console.log(getUsersWithAge(users,'30', '36'));

// // const getUsersWithFriend = (users, friendName) => {

// //   return users.filter(user => user.friends.includes(friendName))
// // };

// // console.log(getUsersWithFriend(users,"Sharron Pace"));

// // const getFriends = (users) => {
// //  const allFriends = users.flatMap(user => user.friends);
// //  return allFriends.filter((friend, index, array) => array.indexOf(friend) === index
// //  );

// // };
// // console.log(getFriends(users));

// //  task 37

// // const getTotalFriendCount = users => {
// //   const totalFriends =  users.reduce((acc, user) => {
// //     acc.push(...user.friends);
// //     return acc;
// //    }, []);
// //    return totalFriends.length;
// // };
// // console.log(getTotalFriendCount(users));

// // const sortByDescendingFriendCount = users => {

// //   return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length );

// // };

// // console.table(sortByDescendingFriendCount(users));