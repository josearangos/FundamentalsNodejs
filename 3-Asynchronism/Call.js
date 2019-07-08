module.exports = {
  sync: function(nombre) {
    return `Hola ${nombre}! Bienvenido a Node.js`;
  },
  withCallback: function(nombre, cb) {
    setTimeout(() => {
      console.log(cb(nombre)); // cd is callback
    }, 5000);
  },
  withPromise: function(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(nombre);
      }, 5000);
    });
  },
  greet: function(nombreCompleto) {
    console.log(`Hola ${nombreCompleto}! Sientes la asincronia?`);
  },
  withPromise: function(nombre, apellido) {
    console.log("Llamando función con promesa...");
    return new Promise((resolve, reject) => {
      console.log("Ejecutando espera...");
      setTimeout(() => {
        console.log("Resolviendo la espera!");
        resolve(`${nombre} ${apellido}`);
      }, 5000);
    });
  }
};
