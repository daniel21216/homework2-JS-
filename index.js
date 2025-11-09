// Получаем число от пользователя через модальное окно
const userInput = prompt("Введите число:");

// Преобразуем введенное значение в число
const maxNumber = Number(userInput);

// Проверяем, что введено корректное число
if (isNaN(maxNumber) || maxNumber < 0) {
    console.log("Пожалуйста, введите корректное положительное число");
} else {
    // Массив для хранения чисел кратных 5
    const multiplesOfFive = [];

    // Ищем все числа кратные 5 от 0 до введенного числа
    for (let i = 0; i <= maxNumber; i++) {
        if (i % 5 === 0) {
            multiplesOfFive.push(i);
        }
    }

    // Выводим результат
    if (multiplesOfFive.length === 0) {
        console.log("Sorry, no numbers");
    } else {
        console.log("Числа кратные 5:");
        multiplesOfFive.forEach(num => console.log(num));
    }
}
