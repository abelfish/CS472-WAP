function foo() { 
	x = 2; 
	var y = 3; 
	console.log(x); // 2 
	console.log(y); //3 
	y = 4;
	console.log(y); //4 
} 
foo(); 
console.log(x); // still 2 even outside the loop 
console.log(y);