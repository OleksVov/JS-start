// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight = "", height = ""){
// const parsedWeight = Number(weight.replace(",", "."));
// const parsedHeight = Number(height.replace(",", "."));

// return (parsedWeight / parsedHeight**2).toFixed(1);
// }
// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi);

// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b){
//     // if(a< b){
//     //     return a;
//     // }     else {return b;}

//     // return a < b ? a : b;

//     return Math.min(a,b);
//     }
    
// console.log(min(14, 11));