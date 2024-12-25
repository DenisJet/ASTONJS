// 2. Привязать контекст объекта:

const obj = { item: 'some value' };

// к функции logger:

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

// так, чтобы при вызове функции ${this.item} имело значение - 'some value'(Привязать через bind, call, apply)

const loggerSomeValue = logger.bind(obj);
loggerSomeValue();

logger.call(obj);

logger.apply(obj);
