var person = {
  firstName: "Axa",
  lastName: "Siekiera",
  sayHello: function() {
    console.log("Cześć, mam na imię: " + this.firstName);
  },
  setFirstName: function(firstName) {
    this.firstName = firstName;
  }
}
