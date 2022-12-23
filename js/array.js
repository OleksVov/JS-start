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

// task 11 Homework
// function calculateEngravingPrice(message, pricePerWord) {
//  let totalPrice;
//  totalPrice = message.split(" ").length * pricePerWord;
//  return totalPrice;
//  }
//  let result = calculateEngravingPrice('JavaScript is in my blood', 20);
//  console.log(result);

// task 12 Homework

// function makeStringFromArray(array, delimiter) {
//     let string;
//   string = array.join(delimiter);
//     return string;
//   }
//   let result = makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
//    console.log(result);

// task 13 Homework

// function slugify(title) {
// let slug;
//   slug = title.toLowerCase().split(" ").join("-");
//     return slug;
//   }
//   let result = slugify('Ten secrets of JavaScript');
//   console.log(result);

// task 16 Homework

// function makeArray(firstArray, secondArray, maxLength) {
//     let newArray
//     newArray = firstArray.concat(secondArray);
//     if(newArray.length <= maxLength){
//         return newArray;
//     }
//     return  newArray.slice(0, maxLength);
//   }
//   let result = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
//   console.log(result);

// task 22 Homework

// function findLongestWord(string) {

//     let stringArrays;
//     stringArrays = string.split(" ");
//     let biggerWord = stringArrays[0];


// for(const stringArray of stringArrays){
//     if (stringArray.length > biggerWord.length){
//         biggerWord = stringArray;
//     } 
// }

//  return biggerWord;

//   }
//   let result = findLongestWord("May the force be with you");
//   console.log(result);

//   task 23

// function filterArray(numbers, value){
// let newNumbers = [];

// for ( const number of numbers) {
//   if (number > value) {
//     newNumbers.push(number);
//      }
//  }
// Variant 2
// for (let i = 0; i < numbers.length; i += 1) {

//     if (numbers[i] > value) {
//         newNumbers.push(numbers[i]);
//     }
//   }
//  return newNumbers;
// }

// let result = filterArray([12, 24, 8, 41, 76], 20);
// console.log(result);

// task32
// function includes(array, value) {
//     // Change code below this line
//   for (const item of array) {
//     if (item === value) {
//         return true;
//     }
//   }
//   return false;
//     // Change code above this line
//   }
//   console.log(includes([1, 2, 3, 4, 5], 17));