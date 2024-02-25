//Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.
const getLengthString = (string, max)=>(string.length <= max);
getLengthString('Проверка', 15);

//Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
const getPalindrome = (string)=>{
  let newString = '';
  string = string.toLowerCase().replaceAll(' ', '');
  for(let i = string.length - 1; i >= 0; i--){
    newString += string[i];
  }
  return newString === string;
};
getPalindrome('Лёша на полке клопа нашёл');
