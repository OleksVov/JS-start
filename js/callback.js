function processCall(recipient, onAvailable, onNotAvailable) {
    // Имитируем доступность абонента случайным числом
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      onNotAvailable(recipient);
      return;
    }
  
    onAvailable(recipient);
  }
  
  function takeCall(name) {
    console.log(`Соединяем с ${name}, ожидайте...`);
    // Логика принятия звонка
  }
  
  function activateAnsweringMachine(name) {
    console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  }
  
  function leaveHoloMessage(name) {
    console.log(`Абонент ${name} недоступен, записываем голограмму.`);
    // Логика записи голограммы
  }
  
  // processCall("Манго", takeCall, activateAnsweringMachine);
  // processCall("Поли", takeCall, leaveHoloMessage);

  // forEach

//   const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']