// Базовое:
// Задание 1 – Скопировать объект counter всеми возможными способами;

const counterA = { value: 1 }; // {value: 1}

const counterB = new Object({ value: 2 }); // {value: 2}

const counterC = Object.create(
  {},
  {
    value: {
      value: 3,
      enumerable: true,
      writable: true,
      configurable: true,
    },
  }
); // {value: 3}

function CounterFunc(value) {
  this.value = value;
}
const counterD = new CounterFunc(4); // CounterFunc {value: 4}

class CounterClass {
  constructor(value) {
    this.value = value;
  }
}
const counterE = new CounterClass(5); //  CounterClass {value: 5}

function createCounter(value) {
  return {
    value: value,
  };
}
const counterF = createCounter(6); // {value: 6}
