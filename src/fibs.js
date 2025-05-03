// fib.js
export function fibs(num) {
    if(num == 0) return [0]
    else if(num == 1) return [1]
    let fibArray = [0, 1]
    for(let i = 2; i < num; i++) {
        let oneBefore = fibArray[i-1];
        let twoBefore = fibArray[i-2];
        fibArray.push(oneBefore+twoBefore);
    }
    return fibArray
}
