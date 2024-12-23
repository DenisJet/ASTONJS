// Продвинутое:
// Задание 2– Написать функцию глубокого сравнения двух объектов

const Z = {};
const obj1 = { here: { is: 'on', other: '3' }, object: Z };
const obj2 = { here: { is: 'on', other: '2' }, object: Z };

const deepEqual = (obj1, obj2) => {
  if (obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  if (keysObj1.length !== keysObj2.length) return false;

  for (let key of keysObj1) {
    if (!keysObj2.includes(key) || !deepEqual(keysObj1[key], keysObj2[key])) return false;
  }

  return true;
};

console.log(deepEqual(obj1, obj2));
