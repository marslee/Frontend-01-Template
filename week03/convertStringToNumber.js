function convertNumberToString(number, radix) {
  let integer = Math.floor(number)
  let fraction = String(number).match(/\.\d+$/)
  if (fraction) {
    fraction = fraction[0].replace('.', '')
  }
  let string = ''
  while (integer > 0) {
    string = String(integer % radix) + string
    integer = Math.floor(integer / radix)
  }
  return fraction ? `${string}.${fraction}` : string
}

console.log(convertNumberToString(0, 10))
console.log(convertNumberToString(123.456, 10))
console.log(convertNumberToString(10.25, 8))
console.log(convertNumberToString(16.5, 16))
