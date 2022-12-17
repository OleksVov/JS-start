console.log('Hello world!');
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi() {console.log("Hello, this is my first function!");}
// sayHi();
// function add(a, b, c) {console.log(`Addition result equals ${a + b + c}`);}
// add(15, 27, 10);
// add(10, 20, 30);

// function makeMessage (name, price) {const message = `You picked ${name}, price per item is ${price} credits`;
// return message;};
// let result = makeMessage ("Droid", 6150);
// console.log(result);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//     return message;
//   }
// console.log(makeOrderMessage(2, 100, 50));

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if(ordered > available){message="Not enough goods in stock!";} else {message="Order is processed, our manager will contact you.";}

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice= pricePerDroid * orderedQuantity;
//   if(totalPrice > customerCredits){message= "Insufficient funds!";} else {message= `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;}

//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));

// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT
//   } else if (totalSpent >= 5000 && totalSpent < 20000) { 
//     discount = BRONZE_DISCOUNT
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT
//   } else {
//     discount = GOLD_DISCOUNT
//   }

//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(6000));

// Task Length message

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message
//   } else  {
//     result = (message.slice(0, maxLength)) + '...'
//   }

//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));


