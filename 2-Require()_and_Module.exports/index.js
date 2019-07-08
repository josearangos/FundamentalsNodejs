//*************LOCAL MODULES*********************
const math = require("./math");
const greet = require("./greetings");
const hello = require("./greetings/hello");

console.log(math.add(4, 8));
console.log(math.divide(4, 8));
console.log(math.substract(4, 8));
console.log(math.multiply(4, 8));

console.log(greet.greet("Jose"));
console.log(hello.sayHello("Pedro"));

//**********EXTERNAL MODULES *********** */

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Jose crack",
    e: "Ox",
    T: "U"
  })
);
