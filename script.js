function evail(num1, num2, numEnd) {
	debugger;
	let counter = 2;
	let numA = num1;
	let numB = num2;
	let num = numA + numB;
	if (num > numEnd) {
		return counter;
	}
	else {
		counter++;
		while (num < numEnd) {
			numA = numB;
			numB = num;
			num = numA + numB;
			if (num > numEnd) {
				return counter;
			}
			else {
				counter++;
			}
		}
	}
}
let end = evail(6, 13, 90);
console.log(end);
