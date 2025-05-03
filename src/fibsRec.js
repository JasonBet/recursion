// fibRec.js
export function fibsRec(num, fibsArray = [0, 1]) {
    if (num == 0) return [0];
    else if (num == 1) return [0, 1];
    else if (fibsArray.length == num) return fibsArray;
    
    const fib = fibsArray[fibsArray.length -1] + fibsArray[fibsArray.length -2];
    fibsArray.push(fib);
    return fibsRec(num, fibsArray)
}
