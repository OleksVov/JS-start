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

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

    return message;
  }
console.log(makeOrderMessage(2, 100, 50));