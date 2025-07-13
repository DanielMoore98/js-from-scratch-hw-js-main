/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  stringArr = str.split(" ")
  for(let i = 0; i < stringArr.length; i++){
    let capStr = stringArr[i]
    stringArr[i] = capStr[0].toUpperCase() + capStr.slice(1)
  }
  return stringArr.join(" ")
}

console.log(capitalizeWords("hello world from javascript"));
