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
  function countProps(object) {
    // Change code below this line
    let propCount = 0;
  const keys = Object.keys(object);
    propCount = keys.length;
    
    return propCount;
    // Change code above this line
  }
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true }));