export const getPrice = (price: number) => {
    const numberString = parseFloat(String(price)).toFixed(2);
    const parts = numberString.split('.');
    const integerPart = splitStringEveryNCharacters(parts[0]);
    const decimalPart = parts[1].trim();

    const formattedIntegerPart = integerPart.split('').join('');

    if (decimalPart === '00')
        return formattedIntegerPart
    return `${formattedIntegerPart},${decimalPart}`;
}

const splitStringEveryNCharacters = (inputString: string) => {
    let result = '';
    let count = 0;
    for (let i = inputString.length-1; i >= 0 ; i--) {
        if (count % 3 === 0) {
            result = ' ' + result;
        }
        result = inputString[i] + result;
        count += 1
    }
    return result.trim()
}