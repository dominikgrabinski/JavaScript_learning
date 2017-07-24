function init() {

  var firstName = "Ada";

  // if (true) {
  //   var age = 32;
  // }

  function sayHello() {

    var lastName = "Kowalski";

    console.log("Cześć, " + firstName + " " + lastName);

  }

  window.hello = sayHello;

}

init();
