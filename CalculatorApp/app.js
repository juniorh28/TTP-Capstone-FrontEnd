//Libaries Imported
const express = require("express");

//Creating the app
const app = express();

//Tells the app where to be hosted
app.listen("4000", () => {
  console.log("connected to port 4000");
});

function multiplication(...args) {
  return args.reduce(function (acc, cur) {
    return acc * cur;
  });
}

function addition(...args) {
  return args.reduce(function (acc, cur) {
    return acc + cur;
  });
}

function subtraction(...args) {
  return args.reduce(function (acc, cur) {
    return acc - cur;
  });
}

console.log(multiplication(4, 2, 3, 4));
