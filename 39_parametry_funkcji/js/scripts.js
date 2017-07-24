function square(num) {

  return num * num;

}

// function sum(a, b) {
//
// return a + b;
//
// }

var firstName = "Ada";

var person = {
  firstName: "Tomasz",
  lastName: "Kowalski"
}

function sayHello(obj) {

  obj.firstName = "Piotr";

  return "Witaj, " + obj.firstName + " " + obj.lastName;

}


console.log(sayHello(person));
