/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Title Screen
	This is the game's title screen */

var menuState = {
	create: function() {
		game.input.keyboard.onPressCallback = null;
		//adding background gif sprite
		background = game.add.sprite(0, 0, 'backgroundStart');
		background.frame = 1;
		startBackAnimation = background.animations.add('background');
		startBackAnimation.play(60, true);

		title = game.add.sprite(300, 410, "title");
		pressToStart = game.add.bitmapText(30, 240, 'textFontBlack', 'Press Enter to start', 40);
		songTimeout = setTimeout(() => mainTheme.play(), 800);
	},

	update: function() {
		//adding a check for when enter is pressed down
		enter.onDown.add(function(){
		    if (!startedEnter) {
		    	startedEnter = true;
		    	clearTimeout(songTimeout);
		    	fadeSound.play();
				game.input.keyboard.onPressCallback = null;
				startSound.play();
				mainTheme.pause();
				pressToStart.visible = false;
				game.camera.fade(0xffffff, 4700, false);
				setTimeout(() => game.state.start("prologue"), 5250);
			};
		});
	} //End of update
}
