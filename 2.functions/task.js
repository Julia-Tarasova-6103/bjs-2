function getArrayParams(...arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;

  if(arr.length === 0){
    return 0;
  }

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

  if(arr.length === 0){
    return 0;
  }

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
  
  if(arr.length === 0){
    return 0;
  }

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
  let avgEven;

  if(arr.length === 0){
    return 0;
  }

  for(i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  } 

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if(arr.length === 0){
    return 0;
  }

  for(i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  } 

  avgEven = sumEvenElement / countEvenElement;

  return avgEven;
}

function makeWork (...arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for(i = 0; i < arrOfArr.length; i++){
    
  }

}
