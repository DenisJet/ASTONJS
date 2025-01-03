// Базовый:
// 2. Создать объект Person несколькими способами, после создать объект AnotherPerson, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

class Person {
  constructor(name) {
    this.name = name;
  }

  logInfo() {
    console.log(this.name)
  }
};
const person = new Person('Ivan');
person.logInfo();

function Person2 (name) {
  this.name = name;
  this.logInfo = function() {
    console.log(this.name);
  };
}
const person2 = new Person2('Vlad');
person2.logInfo();

const person3 = {
  name: 'Denis',
  logInfo: function () {
    console.log(this.name)
  }
}
person3.logInfo();

////////////////////////////////////////////////////////////////

class AnotherPerson extends Person {
  constructor(name) {
    super(name);
  }
}
const anotherPerson = new AnotherPerson('Lena')
anotherPerson.logInfo();

function AnotherPerson2(name) {
  Person2.call(this, name);
}
AnotherPerson2.prototype = Object.create(Person2.prototype);
AnotherPerson2.prototype.constructor = AnotherPerson2;
const anotherPerson2 = new AnotherPerson2('Alice');
anotherPerson2.logInfo();

const anotherPerson3 = Object.create(person3);
anotherPerson3.name = 'Victoria';
anotherPerson3.logInfo();

