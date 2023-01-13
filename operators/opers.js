
function randomizer() {
    return Math.round(Math.random() * 5)
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

let burgers_1 = randomizer()
let fries_1 = randomizer()

if (burgers_1 > 3 && fries_1 > 0) {
    console.log('We are happy and full of junk foods')
} else console.log("We are leaving this place")


//2

/**
 * Напишіть умовну конструкцію if, що перевіряє, 
 * чи знаходиться значення ціни товару між 1000 та 1900 включно.
 * Результат виводити в консоль.
 */

let goodPrice_2 = randomizer() * 900;
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

let goodPrice_3 = randomizer() * 900;

(goodPrice_3 < 1000 || goodPrice_3 > 1900)
    ? console.log(`The price is good and equals: ${goodPrice_3}`)
    : console.log(`The price is wrong and equals: ${goodPrice_3}`);

!(goodPrice_3 > 999 && goodPrice_3 < 1901)
    ? console.log(`The price is good and equals: ${goodPrice_3}`)
    : console.log(`The price is wrong and equals: ${goodPrice_3}`)

