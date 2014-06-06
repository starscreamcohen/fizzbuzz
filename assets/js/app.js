
$(document).ready(function() {
	setBindingUp();
});

function setBindingUp() {
	$('#submit').on('click', function() {
		testInputNumber();
	});

	$('#myinput').on('keyup', function() {
		if (event.keyCode==13) {
			testInputNumber();
		}
	});

	$('#playagain').on('click', function() {
		clearFizzBuzzGame();	
	});
};

function setUpAlerts () {
	bootbox.alert(message, function() {
	});

	bootbox.confirm(message, function() {
	});
}


var inputarea;
 function testInputNumber() {
	 inputarea = $('#myinput').val();
	if (inputarea.match(/^\d+$/)){ 
		playFizzBuzz();
		}	
	else {
			bootbox.alert("That's Not How You Play!");
		}
	
	document.getElementById('myinput').value='';
};
// Blue For Fizz
// Red For Buzz
function addColorForFizzBuzz() {
	if (String.match(/^Fizz$/)) {

	}
}
function playFizzBuzz() {
	if (inputarea <= 100) {
		var attachGame = $("#attach-game");
		if (attachGame) {
		for (var i = 1; i <= inputarea; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				attachGame.append("<p><span>Fizz</span>" + "<span>Buzz</span></p>");
			}
			else if ( i % 5 === 0) {
				attachGame.append("<p>Buzz</p>");
			}
			else if (i % 3 === 0) {
				attachGame.append("<p>Fizz</p>");
			}
			else {
				attachGame.append("<p>" + i  + "</p>");
			}
			
		}
	}
	else {
		console.log("attachGame is Null");
	}
	}
		else {
			bootbox.alert("Much Too High For This Game!");
		}
};




function clearFizzBuzzGame () {
	$('p').remove();
};


