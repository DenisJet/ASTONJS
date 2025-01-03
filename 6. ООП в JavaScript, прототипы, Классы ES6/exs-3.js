// Базовый:
// 3. Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.

class SuperPerson {
  constructor(name) {
    this._name = name;
  }

  set name(value) {
    this._name = value
  }

  get name() {
    console.log(this._name)
  }
};

class AnotherSuperPerson extends SuperPerson {};
const anotherSuperPerson = new AnotherSuperPerson('Ivan');
anotherSuperPerson.name;
anotherSuperPerson.name = 'Vasya';
anotherSuperPerson.name;