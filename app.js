
$(document).ready(function() {
	setBindingUp();
});

function setBindingUp() {
	$('#submit').on('click', function() {
		myInputNumber();
	});

	$('#myInput').on('keyup', function() {
		if (event.keyCode==13) {
			myInputNumber();
		}
	});

	$('#playAgain').on('click', function() {
		clearFizzBuzzGame();	
	});
};


var myInputNumber = function () {
	var inputArea = $('#myInput').val();
	if (inputArea.match(/^\d+$/)) {
		appendFizzBuzz();
	}
	else {
		alert("That's Not How You Play!");
	}

	document.getElementById('myInput').value='';
};

function appendFizzBuzz() {
	var inputArea = $('#myInput').val();
	if (inputArea <= 100) {
		for (var i = 1; i <= inputArea; i++) {
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
			alert("Much Too High For This Game!");
		}
	
};

function clearFizzBuzzGame () {
	$('p').remove();
};

