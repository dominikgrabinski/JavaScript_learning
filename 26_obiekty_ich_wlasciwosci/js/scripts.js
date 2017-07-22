var person = {
  "first-name": "Dominik",
  lastName: "Grabiński",
  age: 32
};

person.job = "programista";
person["PESEL"] = 1234564789;

delete person.age;

console.log(person);

var person2 = person;

person2.age = 23;
