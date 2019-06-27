// var company = prompt('Каково «официальное» название JavaScript?');
//      if (company == 'ECMAScript') {
//           alert('Верно!');          
//      }  else {
//           alert('Не верно');
//      }



// var variableIf = prompt ('Какое значение?', 12);

// var message = (variableIf>0) ? 'Не правильно' :
//      (variableIf<0) ? 'близко' :
//      (variableIf = 0) ? 'оно' :
//      'Не может быть!';

// alert(message);






// let button = document.querySelector('.button');
// let box = document.querySelector('.box');



// let myName = 'Юля' //строка
// let number = 34 // число
// let lol = true // buleah
// let array = [] //массив
// let object = {} // объект

// button.addEventListener('click', function() {
//      console.log('click')
//      box.style.display = box.style.display === 'none' ? 'block' : 'none';
//      easyFunction(number, myName)
// })



// function easy(number, string){
//      console.log(number, string)
// }//функция
// easy(number, myName) // вызвать функцию

// let easyFunction = easy;

// function sumNumbers(number1, number2){
//      console.log(number1 + number2);
//      return number1 + number2;
// }
// sumNumbers(45, 567);

// let sum = sumNumbers(678, 89);
// console.log(sum);

// var company = prompt('Каково «официальное» название JavaScript?');
//      if (company === 'ECMAScript') {
//           alert ('Верно!');          
//      }  else {
//           alert ('Не верно')
//      }

var value = prompt('Напишите число', 0);
if (value > 0) {
     alert ( 1 );
} else if (value < 0) {
     alert ( -1 );
} else {
     alert ( 0 );
}


var loginAdmin = prompt('Ваш логин');
if (loginAdmin)