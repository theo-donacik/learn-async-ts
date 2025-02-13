function findNegInARow(arr: number[][], rowIdx: number): Promise<void> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            if (arr.length > rowIdx) {
                for (let i = 0; i < arr[rowIdx].length; i++) {
                    arr[rowIdx][i] < 0 && console.log("Negative", arr[rowIdx]);
                }
            }
            else {
                reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
            }}, 
        0);
    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let rowNegPromises: Promise<void>[] = [];

for (let x = 0; x < array2D_3.length; x++) {
    rowNegPromises.push(findNegInARow(array2D_3, x));
}

Promise.all(rowNegPromises)
    .then()
    .catch((error) => console.log(`Error Msg: ${error}`));

console.log('Finding negatives in 2D array ... ');


