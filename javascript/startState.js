/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Start Screen
	This is the screen that appears when the gameis finished loading
	and  */
var startState = {
		/* In the following function, we will load all our variables with their values. I.e. sprites, sounds, scores, lives, etc. */
	create: function() {
		pressToStart = game.add.bitmapText(200, 500, "textFont", "Press any key to start!", 40);
		startSound = game.add.audio("startSound");
	},

	//The update function gets called for every frame of your game. It's where all the decision making and action takes place.
	update: function() {
		loading = game.add.bitmapText(285, 260, 'textFont', 'Loaded!', 60);

		loadingBarBorder = game.add.sprite(400, 390, 'loadBarBorder');
		loadingBarBorder.anchor.setTo(0.5);

		loadingBarFill = game.add.sprite(202, 375, 'loadBarFill');
		loadingBarBorder.anchor.setTo(0.5);

		game.input.keyboard.onPressCallback = function(){
			if (!started) {
				game.input.keyboard.onPressCallback = null;
				startSound.play();
				loadingBarBorder.visible = 0;
				loadingBarFill.visible = 0;
				loading.visible = 0;
				pressToStart.visible = false;
				setTimeout(() => game.state.start("controls"), 1100);
				started = true;
			}
			else {
				game.input.keyboard.onPressCallback = null;
			};
		};
	} //End of update
}