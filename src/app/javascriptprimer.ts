console.log('Hello');
console.log('Apples');

const myFunc = function () {
  console.log('This is a statement');
  };
  myFunc();

  myFunc2();

function myFunc2 () {
console.log('This is a statement 2');
}

const myFunc3 = function (name, weather = 'raining') {
  console.log('Hello ' + name + '.');
  console.log('It is ' + weather + ' today');
  };
  myFunc3('Adam');

// Using Default and Rest Parameters
const myFunc4 = function (name, weather, ...extraArgs) {
  console.log('Hello ' + name + '.');
  console.log('It is ' + weather + ' today');
  for (let i = 0; i < extraArgs.length; i++) {
    console.log('Extra Arg: ' + extraArgs[i]);
  }
};
myFunc4('Adam', 'sunny', 'one', 'two', 'three');

// Defining Functions That Return Results
const myFunc5 = function (name) {
  return ('Hello ' + name + '.');
};
console.log(myFunc5('Adam'));

// Using Functions As Arguments to Other Functions
const myFunc6 = function (nameFunction) {
  return ('Hello ' + nameFunction() + '. (6)');
};
console.log(myFunc6(function () {
  return 'Adam';
}));

const myFunc7 = function (nameFunction) {
  return ('Hello ' + nameFunction() + '. (7)');
};
const printName = function (nameFunction, printFunction) {
  printFunction(myFunc7(nameFunction));
};
printName(function () {
  return 'Adam';
}, console.log);

// Using Arrow Functions
const myFunc8 = (nameFunction) => ('Hello ' + nameFunction() + '.');
const printName2 = (nameFunction, printFunction) => printFunction(myFunc8(nameFunction));
printName2(function () { return 'Adam'; }, console.log);

// Using Variables and Types
const messageFunction = function (name, weather) {
  const message = 'Hello, Adam';
  if (weather === 'sunny') {
    const message = 'It is a nice day';
    console.log(message);
  } else {
    const message = 'It is ' + weather + ' today';
    console.log(message);
  }
  console.log(message);
};
messageFunction('Adam', 'raining');


// Listing 5-16. Using Variable Closure in the main.ts File in the src Folder
const myFunc9 = function (name) {
  const myLocalVar = 'sunny';
  const innerFunction = function () {
    return ('Hello ' + name + '. Today is ' + myLocalVar + '.');
  };
  return innerFunction();
};
console.log(myFunc9('Adam'));
