function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convert = convertHoursToMinutes(2);
console.log(convert);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var greeting = getGreeting('World!');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var multiply = addAndMultiplyBy5(15, 5);
console.log(multiply);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var divide = multiplyAndDivideBy5(45, 10);
console.log(divide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(30, 10);
console.log(subtract);

function getCircleCircumference(radius) {
  return (radius * 2) * 3.14159265358979;
}

var circle = getCircleCircumference(10);
console.log(circle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getname = getFullName('Jack', 'Bauer');
console.log(getname);

function cube(number) {
  return (number * number) * number;
}

var getcube = cube(10);
console.log(getcube);
