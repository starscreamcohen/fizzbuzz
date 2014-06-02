
$(document).ready(function() {
	setBindingUp();
});

function setBindingUp() {
	$('#submit').on('click', function() {
		myInputNumber();
	});
};




var myInputNumber = function () {
	var inputArea = $('#myInput').val();
	if (inputArea.match(/[0-9]/)) {
		appendFizzBuzz();
	}
	else {
		alert("That's Not How You Play!");
	}

};

function appendFizzBuzz() {
	var inputArea = $('#myInput').val();
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
};

