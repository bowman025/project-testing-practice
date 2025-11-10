const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const reverseString = (str) => str.split('').reverse().join('');

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
}

const caesarCypher = (str, factor) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-zA-Z]/)) {
            let code = char.charCodeAt(0);
            let base = 0;
            if(char >='a' && char <= 'z') base = 'a'.charCodeAt(0);
            else base = 'A'.charCodeAt(0);
            let shifted = (code - base + factor) % 26 + base;
            result += String.fromCharCode(shifted);
        }
        else result += char;
    }
    return result;
}

const analyzeArray = (arr) => {
    return {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}

export { capitalize, reverseString, calculator, caesarCypher, analyzeArray };