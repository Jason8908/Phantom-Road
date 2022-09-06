/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Prologue
	This is the prologue of the game. */

var prologueState = {
	create: function() {
		background = game.add.sprite(0, 0, 'forest');
		textbox = game.add.image(100, 420, "textbox");
		textForestDescribe.start();
		continueText = game.add.image(620, 530, "continueText");
		continueText.width = 45;
		continueText.height = 45;
		continueText.visible = false;
		setTimeout(() => continueText.visible = true, 2700);
		setTimeout(() => progressText = true, 2700);

	},

	update: function() {
		z.onDown.add(function(){
		    if (progressText) {
		    	ping.play();
		    	progressText = false;
		    	textForestDescribe.destroy();
		    	continueText.visible = false;
		    	textForestDescribe1.visible = true;
		    	textForestDescribe1.start();
		    	setTimeout(() => continueText.visible = true, 5620);
				setTimeout(() => progressText1 = true, 5620);
			}
			else if (progressText1) {
				ping.play();
		    	progressText1 = false;
		    	textForestDescribe1.destroy();
		    	continueText.visible = false;
		    	textForestDescribe2.visible = true;
		    	textForestDescribe2.start();
		    	setTimeout(() => continueText.visible = true, 2650);
				setTimeout(() => progressText2 = true, 2650);
			}
			else if (progressText2) {
				ping.play();
		    	progressText2 = false;
		    	textForestDescribe2.destroy();
		    	continueText.visible = false;
		    	game.camera.fade(0x000000, 1000, false);
		    	setTimeout(() => game.state.start("forest"), 1050);
			};
		});
	} //End of update
}