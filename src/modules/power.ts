import { sum } from "./sum";

export function power(a: number, b: number){
    if (b === 0) {
        return 1;
    } else if (b === 1) {
        return a;
    } else if (b < 0) {
        throw new Error("exposant can't be negative");
    }

    let isResultNegative = a < 0 && b % 2 !== 0;
    a = Math.abs(a);

    let result = a;
    for(let i = 2; i <= b; i++){
        let temp = result;
        for(let j = 1; j < a; j++){
            temp = sum(temp, result);
        }
        result = temp;
    }

    return isResultNegative ? -result : result;
};