Продвинутый:
// 1. Написать функцию
// function firstSum = (arr, total) => {
//    Решение
//  },
// которая вернет массив с первой парой чисел, сумма которых равна total :
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = 13;
// firstSum(arr, total) //result = [4, 9]
// 2. Оценить сложность вашего алгоритма для функции firstSum (хотя бы пару строк в качестве объяснения).

function firstSum (arr, total) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        result.push(arr[i]);
        result.push(arr[j]);

        return result;
      }
    }
  }
}

console.log(firstSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 13))

// Сложность: здесь мы имеем вложенный цикл, поэтому сложность будет O(n^2)

