//freecodecamp - JavaScript Calculator -->

<script text/javascript>

var number = "";
var result = "";

function onClick(value) {
	if (value != "CE") {
		switch(value){
			case "0":
			case "1":
			case "2":
			case "3":
			case "4:"
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case "."
				if (result.match(/%data%/i)) {
					result.replace("/%data%/i", parseFloat(value));
					result = parseFloat(result);
					document.getElementById("demo").innerHTML = result;
					result = String(result);
					number = "";
				else {
					number += value;
				}
				break;
			case "+":
			case "-":
			case "*":
			case "/":
			case "%":
				result = result + value + "%data%";
				number = ""
				break;
			case "AC":
				number = "";
				result = "";
			case "Ans"
			case "=":
				document.getElementById("demo").innerHTML = parseFloat(result);
				//result = Parser.evaluate(result);
				//result = Math.eval(result);
				break;
		}
	}else {
		if (value != "="){
			result += value;
		} else {
			result.replace()  // need to replace for */% with ()
			result = parseFloat(result)
			document.getElementById('demo').innerHTML = result;

		}

	}


}






</script>
