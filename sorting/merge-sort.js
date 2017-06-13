//merge sort algorithms

//take an array, split it in two, this is the part that is recursive part
//then there is the part that orders them

function mergeSort(array) {
  if (!array) return false;
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length/2);
  let leftSide = array.slice(0, middle);
  let rightSide = array.slice(middle);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}


function merge(left, right) {
  let sortedArray = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return sortedArray.concat(left, right);
}

let testArr = [4,7,1,5,3,9,7,3];

console.log(mergeSort(testArr));
