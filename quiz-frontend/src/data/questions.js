const questions = [
  {
    id: 1,
    question: "Какой метод массива добавляет элемент в конец?",
    options: ["shift()", "push()", "unshift()", "pop()"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Что вернёт typeof null в JavaScript?",
    options: ['"null"', '"object"', '"undefined"', '"number"'],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Какой оператор используется для строгого сравнения?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Как объявить константу в JavaScript?",
    options: ["var x = 5;", "let x = 5;", "const x = 5;", "static x = 5;"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Какой метод удаляет последний элемент массива?",
    options: ["shift()", "pop()", "splice()", "slice()"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Что делает метод JSON.parse()?",
    options: [
      "Преобразует объект в JSON-строку",
      "Преобразует JSON-строку в объект",
      "Проверяет валидность JSON",
      "Копирует объект"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Какой тип данных вернёт выражение '5' + 3?",
    options: [
      "number (8)",
      'string ("53")',
      "boolean (true)",
      "undefined"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Какой метод используется для поиска элемента в массиве по условию?",
    options: ["filter()", "find()", "map()", "reduce()"],
    correctAnswer: 1
  }
];

export default questions;