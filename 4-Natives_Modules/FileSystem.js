const fs = require("fs");
const ops = require("./fileops");

let incrementValue;

fs.readFile("./resources/number.txt", "utf8", (err, text) => {
  if (err) throw err; // throw detiene la ejecucion del codio e imprime en la pantalla
  const numbers = text.split("\n").map(n => Number(n)); //convertimos de caracter a number
  incrementValue = ops.incrementValue(numbers);
  fs.writeFile(
    "./resources/numberNew.txt",
    incrementValue.join("\n"),
    (error, result) => {
      if (error) throw error;
    }
  );
});

let namesAddText;
fs.readFile("./resources/name.txt", "utf8", (err, text) => {
  if (err) throw err; // throw detiene la ejecucion del codio e imprime en la pantalla
  const names = text.split("\n");
  namesAddText = ops.callNames(names);
  fs.writeFile(
    "./resources/namesNews.txt",
    namesAddText.join("\n"),
    (error, result) => {
      if (error) throw error;
    }
  );
});
