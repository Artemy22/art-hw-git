
function randomizer(multiplier) {
    return Math.round(Math.random() * multiplier)
}


//1
/**
 * Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. 
    Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. 
    Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
 */

let burgers_1 = randomizer(5)
let fries_1 = randomizer(5)

if (burgers_1 > 3 && fries_1 > 0) {
    console.log('We are happy and full of junk foods')
} else console.log("We are leaving this place")


//2
/**
 * Напишіть умовну конструкцію if, що перевіряє, 
 * чи знаходиться значення ціни товару між 1000 та 1900 включно.
 * Результат виводити в консоль.
 */

let goodPrice_2 = randomizer(5) * 900;
//console.log(goodPrice_2)
(goodPrice_2 > 999 && goodPrice_2 < 1901)
    ? console.log(`The price is good and equals: ${goodPrice_2}`)
    : console.log(`The price is out of the range and equals: ${goodPrice_2}`)


//3
/**
 * Напишіть конструкцію if, що перевіряє, 
 * чи значення ціни товару не знаходиться між 1000 та 1900 включно.
 * Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
 * Результат виводити в консоль.
 */

let goodPrice_3 = randomizer(5) * 900;

(goodPrice_3 < 1000 || goodPrice_3 > 1900)
    ? console.log(`The price is good and equals: ${goodPrice_3}`)
    : console.log(`The price is wrong and equals: ${goodPrice_3}`);

!(goodPrice_3 > 999 && goodPrice_3 < 1901)
    ? console.log(`The price is good and equals: ${goodPrice_3}`)
    : console.log(`The price is wrong and equals: ${goodPrice_3}`)


//4
/**
 * За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
 * Результат виводити в консоль.
 */

let season_number_4 = randomizer(5)
if (season_number_4 == 1) {
    console.log(`The winter time. The season id: ${season_number_4}`)
} else if (season_number_4 == 2) {
    console.log(`The spring time. The season id: ${season_number_4}`)
} else if (season_number_4 == 3) {
    console.log(`The summer time. The season id: ${season_number_4}`)
} else if (season_number_4 == 4) {
    console.log(`The autumn time. The season id: ${season_number_4}`)
} else console.log(`Wrong season identifier: ${season_number_4}`)



//5
/**
 * Задано 3 числа (a, b, c), які не рівні між собою.
 * Визначити середнє мід цими трьома числами
 * (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням)
 * використовуючи оператор if-else.
 * Використати вкладені оператори if
 * Результат виводити в консоль.
 */
//              B < C < A
let a_5 = randomizer(1000)
console.log(`A equals: ${a_5}`)

let b_5 = randomizer(1000)
console.log(`B equals: ${b_5}`)

let c_5 = randomizer(1000)
console.log(`C equals: ${c_5}`)


if ((b_5 < c_5 && b_5 > a_5) || (b_5 < a_5 && b_5 > c_5)) {
    console.log(`B is the middle value and equals: ${b_5}`)
} else if ((a_5 < c_5 && a_5 > b_5) || (a_5 < b_5 && a_5 > c_5)) {
    console.log(`A is the middle value and equals: ${a_5}`)
} else if ((c_5 < a_5 && c_5 > b_5) || (c_5 < b_5 && c_5 > a_5)) {
    console.log(`C is the middle value and equals: ${c_5}`)
} else console.log('Randomizer returned equal values (probably)')


//6