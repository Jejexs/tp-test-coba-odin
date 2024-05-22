import { sum } from "./sum";

export function multiply(a: number, b: number){
    if (a === 0 || b === 0) {
        return 0;
    } else if (a === 1 || b === 1) {
        return a !== 1 ? a : b;
    }

    let isResultNegative = (a < 0 && b > 0) || (a > 0 && b < 0);
    a = Math.abs(a);
    b = Math.abs(b);

    let result = 0;
    let strB = b.toString().split('').reverse();

    for(let i = 0; i < strB.length; i++){
        let digitB = parseInt(strB[i]);
        let temp = 0;
        for(let j = 0; j < digitB; j++){
            temp = sum(temp, a);
        }
        for(let j = 0; j < i; j++){
            temp = temp * 10;
        }
        result = sum(result, temp);
    }

    return isResultNegative ? -result : result;
};