// Blocks (Array)
// array iteration
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // const lastIndex = friends.length - 1;
// // // for(let i = 0; i <= lastIndex; i +=1) {
// // //   console.log (i);
// // //   console.log (friends[i]);
// // // }
// // for(let i = 0; i <= lastIndex; i +=1) {
// //   friends [i] += ' is fruit'
// // }
// // console.table(friends);

// // for of если не нужен индекс или не нужно изменять массив

// for (const friend of friends) {
//   console.log(friend);
// }

// task1 посчитать общую сумму покупки

// const carts = [4, 10, 12, 15, 14];
// let totalCarts = 0;
// // variant1
// // for (let i = 0; i < carts.length; i +=1) {
// //     totalCarts += carts[i];
// // }
// // variant2
// // for(const cart of carts){
// //     totalCarts +=cart;
// // }
// // variant1 + add tax
// for(let i = 0; i < carts.length; i+=1){
//     carts[i] = Math.round(carts[i] * 1.1);
//     totalCarts +=carts[i];
// }
// console.log('Total= ', totalCarts);

// task2 even numbers

// const numbers = [1, 4, 5, 6, 10, 11];
// let total = 0;
// // variant1
// // for( let i = 0; i < numbers.length; i +=1){
// //     if(numbers[i] % 2 ===0){
// //         total += numbers[i];
// //     }
// // }
// // variant2
// for(const number of numbers){
//     if(number % 2 ===0){
//         total += number;
//     }
// }
// console.log(total);

// task3 login search

const logins = ['poly', 'kiwi', 'mango'];
const loginToFind = 'pol';

// Variant1
// let message = `login ${loginToFind} not found`;
// for(const login of logins){
//     if(login === loginToFind){
//         message = `login ${loginToFind} found`;
//         break;
//     }
// }
// Variant2
const message = logins.includes(loginToFind) ? `login ${loginToFind} found` : `login ${loginToFind} not found`;
console.log(message);
