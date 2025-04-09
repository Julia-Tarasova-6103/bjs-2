function getArrayParams(...arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;

  for(i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }

    if(arr[i] > max) {
      max = arr[i];
    } 

    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}



function summElementsWorker(...arr) {
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for(i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }

    if(arr[i] > max) {
      max = arr[i];
    } 

    sum += arr[i];
  }
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  min = Infinity;
  max = -Infinity;

  for(i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }

    if(arr[i] > max) {
      max = arr[i];
    } 
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(i = 0; i < arr.length; i++) {
    if(arr[i] / 2) {
      sumEvenElement++;
    } else {
      sumOddElement++;
    }
  } 

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
