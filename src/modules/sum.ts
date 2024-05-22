export function sumSmallNumbers(a: number, b: number){
    if(a < 0 || b < 0){
        throw new Error("Les nombres doivent être positifs");
    } else if(a > 9 || b > 9){
        throw new Error("Les nombres doivent être inférieurs à 10");
    }
    return a + b;
};

export function sum(a: number, b: number){
    let result = 0;
    let isResultNegative = false;
    if (a === 0 || b === 0) {
        return a !== 0 ? a : b;
    } else if (a < 0 && b < 0) {
        isResultNegative = true;
        a = Math.abs(a);
        b = Math.abs(b);
    } else if (a < 0 || b < 0) {
        if (Math.abs(a) === Math.abs(b)){
            return 0;
        }
        throw new Error("Only one number is negative");
    }

    if (a < 10 && b < 10) {
        result = sumSmallNumbers(a, b);
    } else {
        result = sumBigNumbers(a, b);
    }

    return isResultNegative ? -result : result;
};

export function sumBigNumbers(a: number, b: number){

    let strA = a.toString().split('').reverse();
    let strB = b.toString().split('').reverse();
    let result = [];
    let carry = 0;

    for(let i = 0; i < Math.max(strA.length, strB.length); i++){
        let digitA = i < strA.length ? parseInt(strA[i]) : 0;
        let digitB = i < strB.length ? parseInt(strB[i]) : 0;
        let sum = sumSmallNumbers(digitA, digitB) + carry;
        if(sum > 9){
            carry = 1;
            sum = sum - 10;
        } else {
            carry = 0;
        }
        result.push(sum);
    }
    if(carry > 0){
        result.push(carry);
    }
    return parseInt(result.reverse().join(''));
};