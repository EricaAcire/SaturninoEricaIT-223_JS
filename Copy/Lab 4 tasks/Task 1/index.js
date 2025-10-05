function getRange(start, end, step) {

  if (step === undefined) {
    step = 1;
  }

  let result = [];
  let i = start;


  while (i <= end) {
    result.push(i);
    i = i + step;
  }

  return result;
}


console.log(getRange(1, 10));      
console.log(getRange(10, 30, 5)); 