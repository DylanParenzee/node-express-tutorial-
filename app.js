// Modules

const names = require("./first-module");
const sayHi = require("./utils");
console.log(names);

sayHi("dylan");
sayHi(names.john);
sayHi(names.peter);
