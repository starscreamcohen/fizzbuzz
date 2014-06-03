
$(document).ready(function() {
	setBindingUp();
});

function setBindingUp() {
	$('#submit').on('click', function() {
		testInputNumber();
	});

	$('#myInput').on('keyup', function() {
		if (event.keyCode==13) {
			testInputNumber();
		}
	});

	$('#playAgain').on('click', function() {
		clearFizzBuzzGame();	
	});
};

function setUpAlerts () {
	bootbox.alert(message, function() {

	});

	bootbox.confirm(message, function() {

	});
}



var testInputNumber = function() {
	var inputarea = $('#myInput').val(); 
	if (inputarea.match(/^\d+$/)){ 
		playFizzBuzz();
		}	
	else {
			bootbox.alert("That's Not How You Play!");
		}
	
	document.getElementById('myInput').value='';


	function playFizzBuzz() {
		if (inputarea <= 100) {
			for (var i = 1; i <= inputarea; i++) {
				if (i % 3 === 0 && i % 5 === 0) {
					$("#attach-game").append("<p>FizzBuzz</p>");
				}
				else if ( i % 5 === 0) {
					$("#attach-game").append("<p>Buzz</p>");
				}
				else if (i % 3 === 0) {
					$("#attach-game").append("<p>Fizz</p>");
				}
				else {
					$("#attach-game").append("<p>" + i  + "</p>");
				}
				
			}
		}
			else {
				bootbox.alert("Much Too High For This Game!");
			}
	};
};


function clearFizzBuzzGame () {
	$('p').remove();
};

