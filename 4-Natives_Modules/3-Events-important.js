/**Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") periodically emit named events
 * that cause Function objects ("listeners") to be called.
 *  */
const greetEvents = require("./3-greet-events");

greetEvents.emit("clap"); //name of evente in this case is Calp
greetEvents.emit("shout", "Chavez vive"); // the second param is used for send multiples parametros en este caso chavez vive
greetEvents.emit("call", "Pedro", name => {
  console.log(`${name} is my brother :D`);
});
