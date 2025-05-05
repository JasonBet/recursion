// merge.js
export function mergeSort(arr) {
    if(arr.length() > 1) {
        const mid = Math.floor((arr.length - 1) / 2);
        const leftArray = mergeSort(arr.slice(0, mid));
        const rightArray = mergeSort(arr.slice(mid, arr.length - 1))
        
    }
}