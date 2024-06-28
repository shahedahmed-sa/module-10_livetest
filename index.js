/*
Kazi Shahed Ahmed

Mern Batch:06 : Live Test

*/


//Task-1: calculating power
function circuitPower(voltage, current) {
    return voltage * current;
}

//Task-2: maximum number in an array
function findMaxNumber(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}

// Task-3: merging two arrays
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

//Task-4: getting data types of array values
function arrayValuesTypes(arr) {
    return arr.map(value => typeof value);
}


console.log(circuitPower(110, 3));                 //task-1 output  
console.log(findMaxNumber([1, 2, 3, 4, 5]));       //task-2 output
console.log(findMaxNumber([]));                    //task-2 output  
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));    //task-3 output
console.log(arrayValuesTypes([1, 2, "null", []])); //task-4 output
