/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Final Boss
	This is the final boss of the game. */

var theEnd = {
	create: function() {
		endingMusic.play();
		theEndText = game.add.bitmapText(285, 260, 'textFont', 'The End!', 60);
	}, //end of create

	update: function() {
		
	},  //End of update

	render: function() {
		//These are for debugging...
		//game.debug.cameraInfo(game.camera, 32, 32);
   		//game.debug.spriteCoords(sprite, 32, 500);
	} //end of render
}