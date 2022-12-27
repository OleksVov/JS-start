// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys);
//   for (const key of keys) {
//     // Ключ
//     // console.log(key);
//     // Значение свойства
//     // console.log(book[key]);
//   }

// exercise 10

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   console.log(keys);
//   console.log(values);

// exercise 11

  // function countProps(object) {
  //   let propCount = 0;
  //   // Change code below this line
  //   for (const key in object) {
  //     if (object.hasOwnProperty(key)) {
  //       propCount += 1;
  //     }
  //   }
  //   // Change code above this line
  //   return propCount;
  // }
  // console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

  // exercise 11 variant 2
  // function countProps(object) {
  //   // Change code below this line
  //   let propCount = 0;
  // const keys = Object.keys(object);
  //   propCount = keys.length;
    
  //   return propCount;
  //   // Change code above this line
  // }
  // console.log(countProps({ mail: 'poly@mail.com', isOnline: true }));

  // exercise 17
  // const colors = [
  //   { hex: "#f44336", rgb: "244,67,54" },
  //   { hex: "#2196f3", rgb: "33,150,243" },
  //   { hex: "#4caf50", rgb: "76,175,80" },
  //   { hex: "#ffeb3b", rgb: "255,235,59" },
  // ];
  
  // const hexColors = [];
  // const rgbColors = [];
  // // Change code below this line
  // for (const color of colors){
  //   hexColors.push(color.hex);
  //   rgbColors.push(color.rgb);
  // }
  // console.log(hexColors);
  // console.log(rgbColors);

  // exercise 18
  // Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
  // Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). 
  // Если продукт с таким названием не найден, функция должна возвращать null.
  // const products = [
  //   { name: "Radar", price: 1300, quantity: 4 },
  //   { name: "Scanner", price: 2700, quantity: 3 },
  //   { name: "Droid", price: 400, quantity: 7 },
  //   { name: "Grip", price: 1200, quantity: 9 },
  // ];
  
  // function getProductPrice(productName) {

  //   for (const product of products){
  //     if ( productName === product.name)
  //       return product.price;
  //   }
  // return null;
  
  // }

  // exercise 19
  // Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. 
  // Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
  // Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

  // const products = [
  //   { name: "Radar", price: 1300, quantity: 4 },
  //   { name: "Scanner", price: 2700, quantity: 3 },
  //   { name: "Droid", price: 400, quantity: 7 },
  //   { name: "Grip", price: 1200, quantity: 9 },
  // ];
  
  // function getAllPropValues(propName) {
  
  // const propNameArray = [];

  //   for (const product of products){
  //     if (product.hasOwnProperty(propName))
  //       propNameArray.push(product[propName])
  //   }
  //   return propNameArray;
  
  // }
  // console.log(getAllPropValues("price"));

  // task20
  // Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
  //  Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1000, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
 
    for (const product of products){
      if (productName === product.name)
        return product.price * product.quantity;
    }
    return 0
  }
  
console.log(calculateTotalPrice("Grip"));