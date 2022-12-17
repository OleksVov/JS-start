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

const carts = [4, 10, 12, 15, 14];
let totalCarts = 0;
// variant1
// for (let i = 0; i < carts.length; i +=1) {
//     totalCarts += carts[i];
// }
// variant2
for(const cart of carts){
    totalCarts +=cart;
}
// variant1 + add tax
for(let i = 0; i < carts.length; i+=1){
    carts[i] = Math.round(carts[i] * 1.1);
    // totalCarts +=carts[i];
    console.table(carts);
}
console.log('Total=', totalCarts);