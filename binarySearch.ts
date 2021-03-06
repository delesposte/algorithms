function binarySearch(arr: number[], key: number) {
  let low = 0;
  let high = arr.length -1;
  let mid = 0;
  let element = 0;
  let times = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = arr[mid];

    if (element < key)
      low = mid + 1;
    else if (element > key)
      high = mid + 1;
    else
      return mid;

    times++;
    console.log('times: ', times);
  }
}

const arr = [1, 2, 3, 4, 6, 10, 12, 100, 110];

console.log('Result: ', binarySearch(arr, 100));
