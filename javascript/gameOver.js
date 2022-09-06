/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Game Over
	This is the game over screen of the game */

var gameOver = {
	create: function() {
		gameOverValue = true;
		gameOverOptionChosen = "Yes";
		selector = game.add.image(335, 370, "selector");
		selector.width = 25;
		selector.height = 25;
		selector.alpha = 0;
		gameOverMusic.loop = true;
		gameOverMusic.play();
		gameOverText = game.add.bitmapText(180, 200, "textFont", 'Game Over', 100);
		tryAgain = game.add.bitmapText(game.world.centerX, 305, "textFont", 'Try Again?', 70);
		tryAgainYes = game.add.bitmapText(game.world.centerX, 370, "textFont", 'Yes', 60);
		tryAgainNo = game.add.bitmapText(game.world.centerX, 420, "textFont", 'No', 60);
		tryAgainYes.anchor.setTo(0.5, 0.5);
		tryAgainNo.anchor.setTo(0.5, 0.5);
		tryAgain.anchor.setTo(0.5, 0.5);
		selector.anchor.setTo(0.5, 0.5);
		tryAgainYes.alpha = 0;
		tryAgainNo.alpha = 0;
		tryAgain.alpha = 0;
		selectorFade = game.add.tween(selector).to( { alpha: 1 }, 1000, "Linear", false);
		tryAgainFade = game.add.tween(tryAgain).to( { alpha: 1 }, 1000, "Linear", false);
		tryAgainYesFade = game.add.tween(tryAgainYes).to( { alpha: 1 }, 1000, "Linear", false);
		tryAgainNoFade = game.add.tween(tryAgainNo).to( { alpha: 1 }, 1000, "Linear", false);
		tryAgainNoFade.start();
		tryAgainYesFade.start();
		tryAgainFade.start();
		selectorFade.start();
		down.onDown.add(highlightDown);
		up.onDown.add(highlightUp);
		z.onDown.add(function(){
		    if (gameOverValue) {
		    	gameOverValue = false;
		    	gameOverMusic.pause();
		    	gameOverMusic.currentTime = 0;
		    	if (gameOverOptionChosen == "Yes") {
		    		ping.play();
		    		game.camera.fade(0xffffff, 1700, false);
		    		setTimeout(() => game.state.start(currentState), 1700);
		    	}
		    	else {
		    		ping.play();
		    		game.camera.fade(0x000000, 1700, false);
		    		setTimeout(() => game.state.start("boot"), 1700);
		    	}
		    };
		});
	},

	update: function() {
		
	} //End of update
}