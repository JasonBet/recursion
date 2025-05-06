// merge.js
export function mergeSort(arr) {
    if(arr.length > 1) {
        const mid = Math.floor((arr.length) / 2);
        const leftArray = mergeSort(arr.slice(0, mid));
        const rightArray = mergeSort(arr.slice(mid))
        let sortedArray = [];
        let i = 0, j = 0;
        while(i < leftArray.length && j < rightArray.length) {
            if(leftArray[i] < rightArray[j]) sortedArray.push(leftArray[i++]);
            else sortedArray.push(rightArray[j++]);
        }
        for(; i < leftArray.length; i++){
            sortedArray.push(leftArray[i]);
        }
        for(; j < rightArray.length; j++){
            sortedArray.push(rightArray[j]);
        }
        return sortedArray;
    }
    return arr;
}