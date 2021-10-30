/* N1
 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти 
элементы на экран. */

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {

    console.log(array[i]);
}


/* №2 
Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут 
быть положительными и отрицательными. Выведите на экран только отрицательные 
числа, которые больше -10, но меньше -3. */

let array1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < array1.length; i++) {

    let j = array1[i];
    if ((j < 0) && (j > -10) && (j < -3)) console.log(j);
}


/* №3
Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и 
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого 
массива. Запишите ее в переменную result и выведите. */

let arrayFor = []

let result = 0;

for (let i = 23; i <= 57; i++) {

    arrayFor.push(i);
    result += i;
}

console.log(arrayFor);

console.log('Сумма элемнтов массива for равна ' +  result);

let arrayWhile = [];

let i = 23;

while (i < 58) {

    arrayWhile.push(i);
    i++;
}

console.log(arrayWhile);


/* №4 
Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. 
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */

let array4 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < array4.length; i++) {

    if (array4[i][0] == '1' || array4[i][0] == '2' || array4[i][0] == '5') console.log(array4[i]);
}


/* №5
Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все 
дни недели, а выходные дни выведите жирным. */


let week = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];


for (let i = 0; i < week.length; i++) {
    
    let j = week[i];
    if (i < 5) document.write(j + '<br />');
    if (i > 4) document.write('<b>' + j + '</b>' + '<br />');
}

// Триенировка, вывод через while

i = 0;

while (i < week.length) {
    
    let j = week[i];
    if (i <= 4) document.write(j + " ");
    if (i >= 5) document.write(j.bold() + ' ');
    i++;
}


/* №6
Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
и получите последний элемент массива, используя свойство length. */

let array6 = [2, 5, 'текст', 468, true];

array6.push(58);

let value = array6.length;

console.log(array6);

let last1 = array6.slice(value - 1, value);
let last2 = array6.splice(value - 1, 1);

console.log(last1);
console.log(last2);

console.log(array6);


/* №7  РЕШАЛИ В КЛАССЕ
Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран.*/

let arr = [];

for (;;) {

    let value = prompt('Введите число');

    if (value == '' || value == false || value == null) break;

    arr.push(value);
}

arr.sort(function(a, b) {
    return a - b; 
});

console.log(arr);


/* №8
Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), 
используя цикл while и метод reverse. */

let array8 = [12, false, 'Текст', 4, 2, -5, 0];

array8.reverse();

let c = 0;

while (c < array8.length) {

    console.log(array8[c])
    c++;
}

/* №9
Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном 
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]. */


let array9 = [5, 9, 21, , , 9, 78, , , , 6];

function summaUndef(arr) {

let summa = 0;

    for (let i = 0; i < arr.length; i++) {
    
        let j = arr[i];
        if (j == undefined) summa += 1;
    }

    return summa;
}

console.log(summaUndef(array9));


/* №10    РЕШАЛИ В КЛАССЕ
Найдите сумму элементов массива между двумя нулями (первым и последним нулями 
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть 
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или 
[1,8,0,13,76,8,7,0,22,0,2,3,2]. */

let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,0,4,13,2];

let index1 = arr10.indexOf(0);
let index2 = arr10.lastIndexOf(0);

console.log(index1, index2);

arr10 = arr10.slice(index1+1, index2);

console.log(arr10);

let sum = 0;
for (let i = 0; i < arr10.length; i++) {
    sum += arr10[i];
}

console.log(sum); 


// Подзадание: Если двух нулей нет в массиве, то выведите ноль.

arr10 = [1,8,0,13,76,8,7];

sum = 0;

for (let i = 0; i < arr10.length; i++) {

    if (arr10[i] == 0) sum += 1;
}

if (sum < 2) console.log(0);


/* №11 
*** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает 
пользователь. Например: высота = 5, на экране: 
       ^
      ^^^
     ^^^^^^
*/

let h = prompt('Введите высоту треугольника');

let rows = '';

for (let i = 0; i < h; i++) {

    for (let j = h; j > i; j--) {

        rows += '  ';
    }

    for (j = 0; j <= 2 * i; j++) {

        rows += '^ ';
    }

    rows += "\n";
}

console.log(rows);













