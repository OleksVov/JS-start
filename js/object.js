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

const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line
  for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
  }
  console.log(keys);
  console.log(values);