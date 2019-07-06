// Find the biggest number in a number array

const numArray1 = [41, 1, 2, 10];

let max = numArray1[0];
for (let i = 1; i < numArray1.length; i++) {
    if (max < numArray1[i]) {
	max = numArray1[i];
    } 
}

console.log(max);


// Find the biggest two numbers in a number array
const numArray2 = [41, 81, 2, 10, 999, 10];

let max1 = numArray2[0];
let max2 = numArray2[1];

if (max1 < max2) {
    let temp = max1;
    max1 = max2; 
    max2 = max1;
}

for (let j = 2; j < numArray2.length; j++) {
  
    if (numArray2[j] > max1) {
	max2 = max1;
	max1 = numArray2[j];
    }
  
    if (numArray2[j] > max2) {
	max2 = numArray2[j];; 
     } 
}
console.log(max1, max2);