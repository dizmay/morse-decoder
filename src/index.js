const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let pos = 0;
    let interval = 10;
    let newStr = '';
    while(pos < expr.length) {
        newStr += expr.slice(pos, pos+10) + ' ';
        pos += interval;
    }
    return newStr.trim()
                 .split(' ')
                 .map(e => e.replace(/10/g, '.')
                 .replace(/11/g, '-')
                 .replace(/0/g, ''))
                 .map(e => e
                 .split(' ')
                 .map(x => MORSE_TABLE[x]))
                 .join('')
    }

module.exports = {
    decode
}