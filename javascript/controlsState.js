/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Controls
	This is the screen that displays the controls
	of the game. */

var controlsState = {
	create: function() {
		started = false;
		instructions2 = game.add.bitmapText(45, 200, 'textFont', 'Use arrow keys to move and select', 50);
		instructions = game.add.bitmapText(45, 260, 'textFont', 'Press Z to interact + progress text', 50);
		instructions3 = game.add.bitmapText(200, 320, 'textFont', 'Press X to return', 50);
		pressToStart = game.add.bitmapText(200, 500, "textFont", "Press any key to continue!", 40);
	},

	update: function() {
		game.input.keyboard.onPressCallback = function(){
			if (!started) {
				game.input.keyboard.onPressCallback = null;
				startSound.play();
				loadingBarBorder.visible = 0;
				loadingBarFill.visible = 0;
				loading.visible = 0;
				pressToStart.visible = false;
				setTimeout(() => game.state.start("menu"), 1100);
				started = true;
			}
			else {
				game.input.keyboard.onPressCallback = null;
			};
		};
	} //End of update
}