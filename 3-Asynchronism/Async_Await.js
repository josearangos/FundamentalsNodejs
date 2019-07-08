/**
 * Async / await en realidad está construido por encima de las promesas. No se puede utilizar
 *  con devoluciones de llamada simples o devoluciones de llamada de nodo.
 *
 *
 */
const Call = require("./Call");

Call.greet("Pedro Arango Sánchez");

Call.withPromise("Alberto", "Jesus").then(name => console.log(name));

async function callWithPromise() {
  const fullName = await Call.withPromise("Gerardo", "Emilio");
  console.log(fullName);
}
callWithPromise();
