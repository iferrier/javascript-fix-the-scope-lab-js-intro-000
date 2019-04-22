var animal = 'dog'

function myAnimal(animal) {
  var animal = 'dog';
  return (animal);
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
}

var theFunk = function funkyFunction() {
  return function insidefunction() {
      return "FUNKY!";
  }
}
console.log(funkyFunction()())
