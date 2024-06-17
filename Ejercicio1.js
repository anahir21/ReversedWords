function processText() {
    let text = document.getElementById('input').value;
    let outputElement = document.getElementById('output');
    let result = '';

    let stringToChar = text.split('');
    let wordsArray = text.trim().split(/\s+/);

    if (stringToChar[0] == '(' && stringToChar[stringToChar.length - 1] != ')') {
        result = 'Error de sintaxis!';
    } else if (stringToChar[0] != '(' && stringToChar[stringToChar.length - 1] == ')') {
        result = 'Error de sintaxis!';
    } else if (stringToChar[0] == '(' && stringToChar[stringToChar.length - 1] == ')') {
        result = '(';
        for (let i = stringToChar.length - 2; i > 0; i--) {
            result += stringToChar[i];
        }
        result += ')';
    }
    else if (stringToChar[0] == '[' && stringToChar[stringToChar.length - 1] != ']') {
        result = 'Error de sintaxis!';
    } else if (stringToChar[0] != '[' && stringToChar[stringToChar.length - 1] == ']') {
        result = 'Error de sintaxis!';
    }

    else if (text[0] === '[' && text[text.length - 1] === ']') {
        let words = text.substring(1, text.length - 1).split(/\s+/);
        result = '[';
        for (let i = 0; i < words.length; i++) {
            let reversedWord = '';
            for (let j = words[i].length - 1; j >= 0; j--) {
                reversedWord += words[i][j];
            }
            result += reversedWord + ' ';
        }
        result = result.trim() + ']';
    } else if (wordsArray.length >= 3) {
        for (let i = 1; i <= wordsArray.length; i++) {
            if (i % 2 === 0) {
                result += wordsArray[i - 1].toUpperCase() + ' ';
            } else {
                result += wordsArray[i - 1] + ' ';
            }
        }
        result = result.trim();
    } else if (wordsArray.length < 3) {
        result = text;
    }

    outputElement.textContent = result;
}
console.log(processText())
