import { yo } from "./yo.js";

// console.log(yo('Kea'));

import greet from "./greet.js";

// console.log(greet('Bob'));
// console.log(greet('Sam'));//The function will return as 'Hello, Bob'

// const msg = greet('Xola')

// console.log(msg);

import { restaurant } from "./hunger.js";

// console.log(restaurant('Lebo'));

import chalk from 'chalk';
//import the greet module that is in the current folder
// import greet from './greet.js'

const styledMessage = chalk.bgBlackBright.blue(greet('Xola'));
console.log(styledMessage);

const styledMessage2 = chalk.bgBlackBright.green(greet('Bob'));
console.log(styledMessage2);

const styledMessage3 = chalk.bgBlackBright.blueBright(greet('Sam'));
console.log(styledMessage3);

const styledMessages = chalk.bgBlackBright.red(yo('Kea'));
console.log(styledMessages);

const styledMessages1 = chalk.bgBlackBright.white(restaurant('Lebo'));
console.log(styledMessages1);

import cowsay from 'cowsay';

// const cowsay = require("cowsay");

console.log(chalk.bgBlueBright.whiteBright(cowsay.say({
    text : yo('Kea'),
    e : "oO",
    T : "U "
})));

import figlet from "figlet";

// var figlet = require("figlet");

figlet(yo('Kea'), function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.bgCyanBright.blackBright(data));
});
