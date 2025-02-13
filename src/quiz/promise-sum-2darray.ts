async function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
  if (arr.length > rowIdx) {
      let sum = 0;
      console.log(`Computing sum of row ${rowIdx} ... `);
      for (let i = 0; i < arr[rowIdx].length; i++) {
          sum += arr[rowIdx][i];
      }
      return sum;
  }
  else {
      throw new Error(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
  }
} 

const arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function async_main() {
  let rowSumPromises: Promise<number>[] = [];

  try {
    for (let x = 0; x < arr2D.length; x++) {
      rowSumPromises.push(sumOfARow(arr2D, x));
    }
    var rowSums = await Promise.all(rowSumPromises)
    let sum = 0;
    console.log('Computing sum of all rows ... ');
    rowSums.forEach(rowSum => {
      sum += rowSum;
      console.log(`Sum = ${sum}`)
    })
  }
  catch (error) {
    console.log(`Error Msg: ${error}`)
  }
}

async_main();
