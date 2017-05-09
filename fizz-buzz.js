function fizzBuzz(num){
	
	if (num%3 && num%5 === 0) {
		return 'fizzBuzz';
	}
	else if (num%5 === 0) {
		return 'Buzz';
	}
	else if (num%3 === 0) {
		return 'Buzz';
	}
	else{
		return num;
	}

}