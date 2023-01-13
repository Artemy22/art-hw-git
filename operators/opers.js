
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
/**
 * Задано номер дня тижня.
 * За заданим номером вивести назву дня тижня використовуючи switch.
 * Результат виводити в консоль
 */

let day_number_6 = randomizer(9)

const DAYZZ_6 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

switch (day_number_6) {
    case 1:
        console.log(`The day is ${DAYZZ_6[0]}. The day id: ${day_number_6}`)
        break;
    case 2:
        console.log(`The day is ${DAYZZ_6[1]}. The day id: ${day_number_6}`)
        break;
    case 3:
        console.log(`The day is ${DAYZZ_6[2]}. The day id: ${day_number_6}`)
        break;
    case 4:
        console.log(`The day is ${DAYZZ_6[3]}. The day id: ${day_number_6}`)
        break;
    case 5:
        console.log(`The day is ${DAYZZ_6[4]}. The day id: ${day_number_6}`)
        break;
    case 6:
        console.log(`The day is ${DAYZZ_6[5]}. The day id: ${day_number_6}`)
        break;
    case 7:
        console.log(`The day is ${DAYZZ_6[6]}. The day id: ${day_number_6}`)
        break;

    default:
        console.log(`Randomizer returned the wrong day id: ${day_number_6}`)
        break;
}


//7
/**
 * За допомогою switch реалізуйте обчислення виразу, 
 * передаючи у switch, як параметр, символ математичної операції.
 * Математичні операції для обчислення: "+", "-", "*", "/".
 * Результат виводити в консоль.
 */
let a_7 = randomizer(777) + 1
console.log("A: " + a_7)
let b_7 = randomizer(777) + 1
console.log("B: " + b_7)

let math_arr_7 = ["+", "-", "*", "/"]
let current_math_val_7 = math_arr_7[randomizer(4)]

switch (current_math_val_7) {
    case "+":
        console.log(`The current math symbol is: >>> ${current_math_val_7} <<<. The result of calculation is: ${a_7 + b_7}`)
        break;
    case "-":
        console.log(`The current math symbol is: >>> ${current_math_val_7} <<<. The result of calculation is: ${a_7 - b_7}`)
        break;
    case "*":
        console.log(`The current math symbol is: >>> ${current_math_val_7} <<<. The result of calculation is: ${a_7 * b_7}`)
        break;
    case "/":
        console.log(`The current math symbol is: >>> ${current_math_val_7} <<<. The result of calculation is: ${a_7 / b_7}`)
        break;
    default:
        console.log(`math_arr_7 array doesn't have this value : ${current_math_val_7}`)
        break;
}

//8
/**
 * Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
 */

let string_8 = 'Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.'
const string_8_upd = string_8.replace(/[иоуюаіяiеuaeo]/gi, '')
console.log(string_8_upd)


//9
/**
 * Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
 * так щоб в консоль виводився результат обчислень з правильним закнченням.
 * Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.
 * Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
 * 1 м 1 к      метрив
 * 
 * 2 к_и 2к     метрив
 * 3 к_и 3к     метрив
 * 4 к_и 4к     метрив
 * 
 * 5 к_ив 5к    метрив
 * 6 к_ив 
 * 7 к_ив
 * 8 к_ив
 * 9 к_ив
 * 10 к_ив
 * 
 * 1 м      к_а
 * 
 * 2 м_и    к_а
 * 3 м_и    к_а
 * 4 м_и    к_а
 * 
 * 5 м_ив   к_ив
 * 6 м_ив   к_ив
 * 7 м_ив   к_ив
 * 8 м_ив   к_ив
 * 9 м_ив   к_ив
 * 10 м_ив  к_ив
 */

//let m_to_km_9 = [13000, 10000, 9000, 8000.07, 7009.03, 6008.1, 5007, 4006, 3005, 2004, 1003, 102, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

let m_to_km_9 = [randomizer(400), randomizer(400) * 2, randomizer(400) * 3, randomizer(400) * 4, randomizer(400) * 5, randomizer(400) * 10, randomizer(400) * 100, randomizer(400) * 1000]

function getLast2digits(number) {
    if (Number(String(number).slice(-2)) > 4 && Number(String(number).slice(-2)) < 21) {
        return Number(String(number).slice(-2))
    } else return Number(String(number).slice(-1))
}

for (let i = 0; i < m_to_km_9.length; i++) {
    let theCurrentKm = m_to_km_9[i] / 1000

    if (getLast2digits(m_to_km_9[i]) == 0) {
        if (getLast2digits(theCurrentKm) == 0) {
            console.table(`${m_to_km_9[i]} метрiв це ${theCurrentKm} кiлометрiв`)
        } else if (getLast2digits(theCurrentKm) == 1) {
            console.table(`${m_to_km_9[i]} метрiв це ${theCurrentKm} кiлометр`)
        } else if (getLast2digits(theCurrentKm) > 1 && getLast2digits(theCurrentKm) < 5) {
            console.table(`${m_to_km_9[i]} метрiв це ${theCurrentKm} кiлометра`)
        } else if (getLast2digits(theCurrentKm) > 4 && getLast2digits(theCurrentKm) < 21) {
            console.table(`${m_to_km_9[i]} метрiв це ${theCurrentKm} кiлометрiв`)
        }
    } else if (getLast2digits(m_to_km_9[i]) == 1) {
        if (getLast2digits(theCurrentKm) == 0) {
            console.table(`${m_to_km_9[i]} метр це ${theCurrentKm} кiлометрiв`)
        } else if (getLast2digits(theCurrentKm) == 1) {
            console.table(`${m_to_km_9[i]} метр це ${theCurrentKm} кiлометр`)
        } else if (getLast2digits(theCurrentKm) > 1 && getLast2digits(theCurrentKm) < 5) {
            console.table(`${m_to_km_9[i]} метр це ${theCurrentKm} кiлометра`)
        } else if (getLast2digits(theCurrentKm) > 4 && getLast2digits(theCurrentKm) < 21) {
            console.table(`${m_to_km_9[i]} метр це ${theCurrentKm} кiлометрiв`)
        }
    } else if ((getLast2digits(m_to_km_9[i]) > 1 && getLast2digits(m_to_km_9[i])) < 5) {
        if (getLast2digits(theCurrentKm) == 0) {
            console.table(`${m_to_km_9[i]} метри це ${theCurrentKm} кiлометрiв`)
        } else if (getLast2digits(theCurrentKm) == 1) {
            console.table(`${m_to_km_9[i]} метри це ${theCurrentKm} кiлометр`)
        } else if (getLast2digits(theCurrentKm) > 1 && getLast2digits(theCurrentKm) < 5) {
            console.table(`${m_to_km_9[i]} метри це ${theCurrentKm} кiлометра`)
        } else if (getLast2digits(theCurrentKm) > 4 && getLast2digits(theCurrentKm) < 21) {
            console.table(`${m_to_km_9[i]} метри це ${theCurrentKm} кiлометрiв`)
        }
    } else if (getLast2digits(m_to_km_9[i]) > 4 && getLast2digits(m_to_km_9[i]) < 21) {
        if (getLast2digits(theCurrentKm) == 0) {
            console.table(`${m_to_km_9[i]} метрiв це ${theCurrentKm} кiлометрiв`)
        } else if (getLast2digits(theCurrentKm) == 1) {
            console.table(`${m_to_km_9[i]} метрiв це ${theCurrentKm} кiлометр`)
        } else if (getLast2digits(theCurrentKm) > 1 && getLast2digits(theCurrentKm) < 5) {
            console.table(`${m_to_km_9[i]} метрiв це ${theCurrentKm} кiлометра`)
        } else if (getLast2digits(theCurrentKm) > 4 && getLast2digits(theCurrentKm) < 21) {
            console.table(`${m_to_km_9[i]} метрiв це ${theCurrentKm} кiлометрiв`)
        }
    } else console.log('Not implemented yet')
}

