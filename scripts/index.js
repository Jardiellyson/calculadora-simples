const buttons = window.document.querySelectorAll('button');
var result = window.document.querySelector('#result');
var operation = window.document.querySelector('#operation');

var resultValue = 0;

class Calculadora {
    constructor(currentValue, operation) {
        this.currentValue = currentValue;
        this.operation = operation;
    }

    process(value) {

        switch(value) {
            case "DEL":
                result.innerText = result.innerText.slice(0, -1)
                if(result.innerText.length >= 1) return;
                result.innerText = "0"
                break;
                case "C":
                    result.innerText = "";
                    operation.innerText = "";
                    resultValue = 0;
                    break;
                case ".":
                    if(result.innerText.includes(".")) return;
                    result.innerText = result.innerText + "."
                    break;
                    case "+":
                        operation.innerText = `${result.innerText} ` + value
                        result.innerText = "0";
                        resultValue = 0
                        break;
                    case "-":
                        if((operation.innerText.split(" ")[1] == "-" || operation.innerText == "" && !result.innerText == "") && !result.innerText.includes('-')) {
                            result.innerText = value +  result.innerText
                        } else {
                            operation.innerText = `${result.innerText} ` + value
                        result.innerText = "0"
                        resultValue = 0
                        }
                        break;
                        case "*":
                        operation.innerText = `${result.innerText} ` + value
                        result.innerText = "0"
                        resultValue = 0
                        break;
                        case "/":
                        operation.innerText = `${result.innerText} ` + value
                        result.innerText = "0"
                        resultValue = 0
                        break;
                        case "=":
                            if(resultValue == 0) {
                                resultValue = eval(`${operation.innerText.split(" ")[0]} ${operation.innerText.split(' ')[1]} ${result.innerText}`);
                                operation.innerText = `${operation.innerText} ${result.innerText}`;
                            } else {
                                operation.innerText = `${resultValue} ${operation.innerText.split(' ')[1]} ${operation.innerText.split(' ')[2]}`
                                resultValue = eval(`${operation.innerText.split(" ")[2]} ${operation.innerText.split(' ')[1]} ${result.innerText}`);
                                console.log(`${operation.innerText.split(" ")[2]} ${operation.innerText.split(' ')[1]} ${result.innerText}`)
                                console.log(resultValue)
                            }
                            result.innerText = resultValue
                            break;
        };
        if(!(value >= 0)) return;

        if(result.innerText.startsWith('0') && result.innerText.length == 1) result.innerText = result.innerText.replace('0', '')
        result.innerText = result.innerText + value

    };
};

const calculadora = new Calculadora(result, operation);

buttons.forEach((button) => { button.addEventListener('click', (event) => {
    calculadora.process(event.target.innerText);

})})