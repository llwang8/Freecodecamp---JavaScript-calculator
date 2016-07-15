//freecodecamp - JavaScript Calculator -->

$(document).ready(function(){
	$('button').click(function(){

		var buttonVal = $(this).text();
		var showText = $('#output').val();


		function getNumberIndex(index){
			while (!isNaN(showText.charAt(index))){

				if (index === 0){
					index = -1;
					break;
				}
				index -= 1;
			}
			return index + 1;
		}

		if (buttonVal === "CE"){
			showText = showText.substring(0, showText.length - 1);
		}else if(buttonVal === "=" || buttonVal === "Ans")  {
			var i = showText.indexOf('%');

			if (i < 0) {
				showText = eval(showText);
			}else {
				var percentIndex = getNumberIndex(i - 1);
				var percentTotalIndex = -1;

				if (percentIndex - 2 >= 0){
					var percentTotalIndex = getNumberIndex(percentIndex - 2);
					alert(percentTotalIndex);
				}

				if (percentTotalIndex >= 0){
					var percentCal = (showText.substring(percentTotalIndex, percentIndex - 1) + "*" + showText.substring(percentIndex, i) + "/100");
					percentCal = eval(percentCal);
					showText = eval(showText.substring(0, percentIndex) + percentCal + showText.substring(i + 1));
				}else {
					alert("Need a total number to applied percent on!");
				}
			}

		}else if (buttonVal === "AC"){
			showText = "";
		} else {
			showText = $('#output').val() + buttonVal;
		}

		$('#output').val(showText);

	});
});


