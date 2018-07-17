var displayNum, 
	storedNum, 
	calculation,
	decimalCount;

init();

/* FUNCTIONS */

/* Initialize Variables */
function init(){
	displayNum = 0;
	storedNum = 0;
	calculation = 0;
	decimalCount = 0;
}

/* Inputs Decimal */
function decimal(){
	if(calculation === 0 && decimalCount === 0){
		displayNum = (displayNum + ".");
		decimalCount = 1;
		document.getElementById("displayNumber").innerHTML = displayNum;
	} else if(calculation === 0 && decimalCount !== 0) {
		displayNum = displayNum;
	} else if(calculation !== 0 && decimalCount === 0) {
		storedNum = (storedNum + ".");
		decimalCount = 1;
		document.getElementById("displayNumber").innerHTML = storedNum;
	} else {
		storedNum = storedNum;
	}
}

/* Calculates Equation */
function equals(){
	storedNum = Number(storedNum).toString();
	storedNum = String(storedNum);
	if(calculation === 1) {
		displayNum += " + " + storedNum;
	} else if(calculation === 2) {
		displayNum += " - " + storedNum;
	} else if(calculation === 3) {
		displayNum += " * " + storedNum;
	} else if(calculation === 4) {
		displayNum += " / " + storedNum;
	} else {
		return;
	}
	displayNum = eval(displayNum);
	displayNum = Math.round((displayNum)*10000000000000)/10000000000000;
	document.getElementById("displayNumber").innerHTML = eval(displayNum);
}

/* CLICK EVENTS */

/* Clear Calculator */
$(".clear").click(function(){
	init();
	document.getElementById("displayNumber").innerHTML = displayNum;
});

/* Insert Decimal */
$(".decimal").click(function(){
	decimal();
});

/* Insert Numbers */
$(".num").click(function() {
	if(displayNum === 0 && calculation === 0) {
		displayNum = this.value;
		document.getElementById("displayNumber").innerHTML = displayNum;
	}else if(displayNum !== 0 && calculation === 0){
		displayNum = (displayNum + this.value);
		document.getElementById("displayNumber").innerHTML = displayNum;
	}else if(storedNum === 0){
		storedNum = this.value;
		document.getElementById("displayNumber").innerHTML = storedNum;
	}else {
		storedNum = (storedNum + this.value);
		document.getElementById("displayNumber").innerHTML = storedNum;
	}
});

/* Insert Operator Logic */
$(".operation").click(function() {
	if(this.value === "add") {
		calculation = 1;
	} else if(this.value === "subtract") {
		calculation = 2;
	} else if(this.value === "multiply") {
		calculation = 3;
	} else if(this.value === "divide") {
		calculation = 4;
	} else {
		calcultion = 0;
	}
	storedNum = 0;
	decimalCount = 0;
	displayNum = Number(displayNum).toString();
	displayNum = String(displayNum);
});

/* Calculate */
$(".equal").click(function() {
	equals();
});