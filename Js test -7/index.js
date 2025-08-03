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



// 5. Rotate Array by K (Easy to Moderate)
// Problem: Write a function to rotate an array to the right by k steps.
// Example Input:
// rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
// Example Output:
// [5, 6, 7, 1, 2, 3, 4]
// Note: Do not use .splice() or .slice() if you want to challenge students on logic.



function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;

    let rotated = [];

    for (let i = n - k; i < n; i++) {
        rotated.push(arr[i]);
    }

    for (let i = 0; i < n - k; i++) {
        rotated.push(arr[i]);
    }

    return rotated;
}

let inputArray = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedResult = rotateArray(inputArray, k);
console.log(rotatedResult);




// 6. Group Anagrams (Moderate)
// Problem: Group the anagrams from the given list of words. Two words are anagrams if they contain the same characters in a different order.
// Example Input:
// ["eat", "tea", "tan", "ate", "nat", "bat"]
// Example Output:
// [
// ["eat", "tea", "ate"],
// ["tan", "nat"],
// ["bat"]
// ]
// Hint: Use a Map with sorted strings as keys


function groupAnagrams(wordsList) {
    let map = new Map();

    for (let word of wordsList) {
        let sorted = word.split('').sort().join('');

        if (map.has(sorted)) {
            map.get(sorted).push(word);
        } else {
            map.set(sorted, [word]);
        }
    }

    let result = [];
    for (let group of map.values()) {
        result.push(group);
    }

    return result;
}

let wordArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
let grouped = groupAnagrams(wordArray);
console.log(grouped);
