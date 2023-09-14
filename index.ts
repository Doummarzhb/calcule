import { question } from 'readline-sync';

function main():  void 
{
const firstStr: string = question('enter first number:\n');
const operator: string = question('enter operator\n');
const secondStr: string = question('enter second number\n');

// console.log(firstStr,operator,secondStr);

// const  firstNum = isNumber(firstStr);
// console.log(firstNum);

// const  op = isOperator(operator);
// console.log(op);

const validInput:boolean=isNumber(firstStr)&& isOperator(operator) && isNumber(secondStr);
if(validInput)
{
    console.log('is valid.')
    // const firstNum:number=parseInt(firstStr);
    // const secondNum:number=parseInt(secondStr);
    // const result =calculate(firstNum,operator,secondNum)
}
else {
    console.log('\n invalid input');
    main()
}
// console.log(validInput);
}

function isOperator(operator:string):boolean{

switch(operator)
{

    case '+':
    case '-':
    case '*':
    case '/':
        return true;
    default:
        return false;
}
}
function isNumber(str: string): boolean
{
const maybeNum=parseInt(str);
const isNum:boolean =!isNaN(maybeNum);
return isNum;
}
main();