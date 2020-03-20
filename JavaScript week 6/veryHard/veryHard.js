var input = prompt(' Please enter a number ')
var input2 = prompt(' Please enter a second number ')
var operator = prompt(' Please enter an operator ')

switch(operator) {
    case '+':
    console.log(input + ' + ' + input2 + ' = ' + ( parseInt(input) + parseInt(input2)));
    break;

    case '-':
    console.log(input + ' - ' + input2 + ' = ' + ( parseInt(input) - parseInt(input2)));
    break;

    case '*':
    console.log(input + ' * ' + input2 + ' = ' + (parseInt(input) * parseInt(input2)));
    break;
    
    case '/':
    console.log(input + ' / ' + input2 + ' = ' + (parseInt(input) / parseInt(input2)));
    break;
}