
var pics = $('.pics'); 
var clicks = 0;
var clock;
var timer;
var interval;
var flipClock;

$('.minutes').hide();

//need to randomly choose photos
function picswitch() {
	// Randomly fade in an image
	// create a new randNum
	// select a new randPic
	// fadein that pic	
	var randNum = Math.floor((Math.random()* pics.length));
	var randPic = pics[randNum];

	//find all pics and fade out
	$(pics).fadeOut();

	$(randPic).fadeIn();
	
	var count = $(randPic).click(function(){
		$(this).fadeOut();
		clicks += 1;
		$('#clicks').html(clicks);
		$(randPic).off('click');
	});

	console.log(randPic);
};

//creates the countdown timer
clock = $('.clock').FlipClock(20, {
	clockFace: 'Counter',
	autoStart: false,
	countdown: true,
}); 


timer = $('#start').click(function() {
	
	clearInterval(interval);
	clearInterval(flipClock);
	
	//resets clock to beginning timer
	clock.reset();

	//sets the clicks back to zero every time a new game is started
	clicks = 0;
	$('#clicks').html(clicks);	

	//is the interval for the picture toggle
	interval = setInterval(function() {
		picswitch();
	}, 1000);

	//interval for the countdown timer
	flipClock = setInterval(function() {
		clock.decrement();
	}, 1000);

	//runs the game for set amount of seconds
	setTimeout(function(){
		clearInterval(interval);
		clearInterval(flipClock);
		$('#modalscore').html(clicks);
		$('#suchModal').modal('show');
		console.log('test');
	}, 21000);

		
});

// function score(){
// 	if(clicks<=3){
// 		$('#finalScore').html('Your not a bad puppy at all!');
// 	} 
// 	else if(clicks<=8){
// 		$('#finalScore').html('Your sleeping in the doghouse tonight');
// 	}
// 	else if(clicks>=15).html('Your the terror of the neighborhood!');

// 	}
// }


