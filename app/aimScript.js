$(function() {
	var missedTargets = 0, score = 0, tarNum = 0, currentGratsDiv, missedClicks = 0, targetClicks = 0, tps = 0, highestStreak = 0, streak = 0, timer=0, targetCreationTimer= 1000, randomDiv, randomText, leftD, topD, randomLeft, randomTop, lClick, tClick;
	var gratsArray = ["SickNasty!", "Sweet!", "Spectacular!", "Fanflippingtastic!", "Super!", "Cool!", "Righteous!", "Radical!", "Nice!", "Awesome!", "Wow!", "Keep Going!", "Far Out!"];
	var divArray = ['niceDiv', 'awesomeDiv', 'wowDiv', 'keepDiv', 'farDiv', 'groovyDiv'];

//grow,shrink, and remove the targets
	function changeStyle(target, innerTarget, inmostTarget, targetD, innerTargetD, inmostTargetD) {
		target.animate({width: targetD + "px", height: targetD + "px", borderRadius: targetD + "px"}, 1500); 
		innerTarget.animate({width: innerTargetD + "px", height: innerTargetD + "px", borderRadius: innerTargetD + "px"}, 1500); 
		inmostTarget.animate({width: inmostTargetD + "px", height: inmostTargetD + "px", borderRadius: inmostTargetD + "px"}, 1500); 
	}

	function targetRemovalScript(target, innerTarget, inmostTarget) {
		changeStyle(target, innerTarget, inmostTarget, 50, 30, 10);
		changeStyle(target, innerTarget, inmostTarget, 0, 0, 0);
		target.delay().fadeOut(3, function() {
			$(this).remove();	
			missedTargets++;
			streak = 0;
			$('#missedTarText').text("Missed: " + missedTargets);
				$('#streakText').text("Streak: " + streak);
		});

	}

	function targetSpawn() {
		if (missedTargets < 3) {
			$('#targetGrid').append('<div class="target"> <div class="innerTarget"> <div class="inmostTarget"> </div> </div> </div>');
			$('.target').last().attr('id', 'target' + tarNum);
			randomLeft = Math.floor(Math.random()*(578));
			randomTop = Math.floor(Math.random() *(410) + 50);
			$('#target' + tarNum).css('left', randomLeft + "px"); 
			$('#target' + tarNum).css('top', randomTop + "px");
			var thisTarget = $('#target' + tarNum);
			var thisInnerTarget = $('#target' + tarNum).children();
			var thisInmostTarget = thisInnerTarget.children();
			targetRemovalScript(thisTarget, thisInnerTarget, thisInmostTarget);
			tarNum++;
			targetCreationTimer = targetCreationTimer * .99;
			setTimeout(targetSpawn, targetCreationTimer);
		} else {
			clearInterval(timerInt);
			acc = (100 * targetClicks / (missedClicks + targetClicks)).toFixed(0);
			tps = (targetClicks/timer).toFixed(2);
			$('#overAcc').text("Accuracy: " + acc + "%");
			$('#overTps').text("Targets/s: " + tps);
			$('#overHighestStreak').text("Highest Streak: " + highestStreak);
			$('#overScore').text("Final Score: " + score);
			$('#overTime').text("Time Elapsed: " + timer);
			$('#gameOverDiv').css("visibility", "visible");	
		} 
	}
	//code for timer
	function timerFunc() {
		$('#timeText').text("Time: " + timer);
		timer++;
	}
	//grid in the background
	for (i=0; i <  266; i++) {
		$('#targetGrid').append('<div class="box"> </div>');
	}
	//run timer
	var timerInt = setInterval(timerFunc, 1000);
	//code for spawning targets in random locations
	var game = setTimeout(targetSpawn, targetCreationTimer);
	//when someone misclicks
		$('#targetGrid').on('mousedown', function(e) {
			if ($(e.target).is('.target') || $(e.target).is('.innerTarget') || $(e.target).is('.inmostTarget')) { 
				return;
			}
			streak=0;
			lClick = e.pageX - $(this).offset().left;
			tClick = e.pageY - $(this).offset().top;
			$('#streakText').text("Streak: " + streak);
			$('#clickDiv').css("left", lClick);
			$('#clickDiv').css("top", tClick);
			$('#clickDiv').css("visibility", "visible");
			$('#clickDiv').fadeOut(300, function() {
				$(this).css("display", "block");
				$(this).css("visibility", "hidden");
			});
			missedClicks++;
		});

		//code to execute when target is clicked on
		$('#targetGrid').on('mousedown', '.target', function(e) {
			streak++;
			if (streak > highestStreak) {
				highestStreak = streak;
			}
			$(this).remove();
			targetClicks++;
			//show words congratulating you for your streak
			randomDiv = Math.floor(Math.random() * 5);
			randomText = Math.floor(Math.random() * 12);
			currentGratsDiv = $('#' + divArray[randomDiv]);
			currentGratsDiv.text(gratsArray[randomText]);
			currentGratsDiv.css("display", "block");
			currentGratsDiv.fadeOut(1000, function(e) {
				$(this).text();
			});			
			// show words telling where on the target you clicked
			leftD = $(this).css('left');
			topD = $(this).css('top');
			if ($(e.target).hasClass('inmostTarget')) {
				$('#accText').text("300");
				score+=300;
			} else if ($(e.target).hasClass('innerTarget')) {
				$('#accText').text("200");
				score+=200;
			} else if ($(e.target).hasClass('target')) {
				$('#accText').text("100");
				score+=100;
			}
			$('#scoreText').text("Score: " + score);
			$('#streakText').text("Streak: " + streak);
			$('#accDiv').css("left", leftD);
			$('#accDiv').css("top", topD);
			$('#accDiv').css("visibility", "visible");
			$('#accDiv:first').delay().fadeOut(750, function() {
				$(this).css("display", "block");
				$(this).css("visibility", "hidden");
			});
		});
	$('#playAgain').on('click', function () {
		//reset Everything
		score = 0;
		timer = 0;
		missedClicks = 0;
		missedTargets = 0;
		targetClicks = 0;
		tarNum = 0;
		streak = 0;
		targetCreationTimer = 1000;
		$('#scoreText').text("Score: 0");
		$('#missedTarText').text("Missed: 0");
		$('#timeText').text("Time: 0");
		$('#streakText').text("Streak: 0");
		if ($('.target')) {
			$('.target').remove();
		}
		$('#gameOverDiv').css("visibility", "hidden");	
		timerInt = setInterval(timerFunc, 1000);
		game = setTimeout(targetSpawn, targetCreationTimer);	
	});
});