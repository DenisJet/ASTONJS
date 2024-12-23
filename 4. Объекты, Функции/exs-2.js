// Базовое:
// Задание 2 – Скопировать объект counter всеми возможными способами;

const counterA = { value: 1 };
const counterACopy = Object.assign({}, counterA); // {value: 1}

const counterB = { value: 2 };
const counterBCopy = { ...counterB }; // {value: 2}

const counterC = { value: 3, deepObj: { deepValue: 3 } };
const counterCCopy = JSON.parse(JSON.stringify(counterC)); // { value: 3, deepObj: { deepValue: 3 } }

const counterD = { value: 4, deepObj: { deepValue: 4 } };
const counterDCopy = structuredClone(counterD); // { value: 4, deepObj: { deepValue: 4 } }
