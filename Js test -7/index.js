// 1. Zig-Zag Sort (Easy to Moderate)
// Problem: You are given an array of numbers. Rearrange the array so that the elements follow a zig-zag pattern: arr[0] < arr[1] > arr[2] < arr[3] > arr[4] ...
// Example Input:
// [4, 3, 7, 8, 6, 2, 1]
// Example Output:
// [3, 7, 4, 8, 2, 6, 1]
// Note: You only need to make adjacent comparisons and swaps; do not sort the entire array.

function zigZagSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        if (i % 2 === 0) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

        else {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return arr;
}

let input = [4, 3, 7, 8, 6, 2, 1];
let result = zigZagSort(input);
console.log(result);  
