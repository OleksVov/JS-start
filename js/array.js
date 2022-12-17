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

// const logins = ['poly', 'kiwi', 'mango'];
// const loginToFind = 'pol';

// Variant1
// let message = `login ${loginToFind} not found`;
// for(const login of logins){
//     if(login === loginToFind){
//         message = `login ${loginToFind} found`;
//         break;
//     }
// }
// Variant2
// const message = logins.includes(loginToFind) ? `login ${loginToFind} found` : `login ${loginToFind} not found`;
// console.log(message);

// task 3 Find more small number
// const numbers = [33, 17, 9, 12, 3, 54];
// let smallestNumber = numbers[0];
// for(const number of numbers){
//     if(number < smallestNumber){
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);

// let biggestNumber = numbers[0];
// for(const number of numbers){
//     if(number > biggestNumber){
//         biggestNumber = number;
//     }
// }
// console.log(biggestNumber);

// task4 объединение элементов мвсива в строковое значение
// const fruits = ['Mango', 'Poly','Kiwi'];
// const string = fruits.join(', ');
// console.log(string);

// task5 replace "JavaScript" on "jAVAsCRIPT" 
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// for(const letter of letters){
//     const isEqual = letter === letter.toLowerCase();
//     invertedString +=isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);

// task5 method splice

// const cards = ['card-1', 'card-2', 'card-3', 'card-4'];
// const cardToRemove = 'card-3';
// const cardIndex = cards.indexOf(cardToRemove);
// cards.splice(cardIndex, 1);
// // add card
// const cardToInsert = 'card-6';
// cards.splice(2, 0, cardToInsert);
// // replace card
// const cardToReplace = 'card-15';
// cards.splice(0, 1, cardToReplace);
// console.log(cards);

// pop push

// const numbers = [1, 5];
// numbers.push(4, 6);
// numbers.pop();
// numbers.unshift(13, 17);
// numbers.shift();
// console.log(numbers);








