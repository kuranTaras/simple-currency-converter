const numberQuantity = x => (
    (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0)
);

export function CurrencyRound(num) {
    let result = Math.ceil(num * 100) / 100;
    if (numberQuantity(result) === 0) {
        result= result+'.00'
    } else if (numberQuantity(result) === 1) {
        result= result+'0'
    }
    return result
}