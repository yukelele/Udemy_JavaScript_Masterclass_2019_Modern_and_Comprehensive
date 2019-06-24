// check if a number is a prime number using a for loop

function checkPrimeNumber1(x) {

    if (x <= 1) {
	return false;
    }
  
    for (let i=2; i < x; i++) {
	if (x % i == 0) {
	    return false;
	}
    }
  
    return true;

}

console.log(checkPrimeNumbe1(78));


// check if a number is a prime number using a while loop

function checkPrimeNumber2(x) {
    if (x <= 1) {
	return false;
    }

    let i = 2;

    while ( i < x) {
	if (x % i == 0 ) {
	    return false;

	}
    }

    return true;
    
}

console.log(checkPrimeNumber2(91)); 