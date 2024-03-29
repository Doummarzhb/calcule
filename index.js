"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('enter first number:\n');
    var operator = (0, readline_sync_1.question)('enter operator\n');
    var secondStr = (0, readline_sync_1.question)('enter second number\n');
    // console.log(firstStr,operator,secondStr);
    // const  firstNum = isNumber(firstStr);
    // console.log(firstNum);
    // const  op = isOperator(operator);
    // console.log(op);
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    console.log(validInput);
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
