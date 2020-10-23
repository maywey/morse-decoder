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
};

function decode(expr) {
    let mainArr = [...expr]
    let arr1 = []
    let arr2 = []
    let arr4 = []
    for (let i = 1; i <= mainArr.length; i++) {
      arr1.push(mainArr[i-1]) 
      if (i % 10 === 0) {
        arr2.push(arr1)
        arr1 = []
      }
    }
    for (let i of arr2) {
      let arr3 = []
      if (i.includes("*")) {
        arr4.push(' ')
        continue
      }  
      for (let k = 0; k < 10; k++) {
        if (i[k] == 1 && i[k+1] == 0) {
          arr3.push('.')
          if (k==8) arr4.push(MORSE_TABLE[arr3.join('')])
          k++
        } else if (i[k] == 1 && i[k+1] == 1) {
          arr3.push('-')
          if (k==8) arr4.push(MORSE_TABLE[arr3.join('')])
          k++
        }
      }
    }
    return arr4.join('')
    } 

module.exports = {
    decode
}