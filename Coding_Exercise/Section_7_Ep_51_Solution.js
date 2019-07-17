// part 1
// operate on 1 to n numbers based on the call function 
const calc = function(n = 1, callback) {
    if (n < 1) {
	return 0;
    }
  
    if (n === 1) {
	return 1;
    }
  
    let result = 1;
    for(let i = 2; i <= n; i++) {
	result = callback(result, i);
    }
    return result;
}

let addAll = calc(3, function(a,b) {
   return a + b;
 });

console.log(addAll);

let multAll = calc(4, function(a,b) {
  return a * b;
 });
console.log(multAll);

let minusAll = calc(4, function(a,b) {
  return a - b; 
 })
console.log(minusAll);


// ---------------------------------------------------------

// part 2
// operate on an array of numbers based on the callback function

const nums = [1,2,3];

const calc1 = function(cb, arr = []) {

    if (arr.length === 0) {
	return 0;
    }
  
    if (arr.length === 1) {
	return arr[0];
    }
  
    let total = arr[0];
    for (let i=1; i<arr.length; i++) {
	total = cb(total, arr[i]);
    }
  
    return total;
}

const addAll2 = function(a,b) {
  return a + b;
 }

const multAll2 = function(a,b) {
  return a*b;
}

const minusAll2 = function(a,b) {
  return a - b;
 }

console.log(calc1(addAll2, nums));
console.log(calc1(multAll2, nums));
console.log(calc1(minusAll2, nums));