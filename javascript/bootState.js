/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Boot State
	This is the very first state of the game, and it
	is where the loading bar and loading text bitmap font
	are loaded into memory. */

var bootState = {
	preload: function() {
		//loads up the laoding bar's assets
		game.load.image('loadBarBorder', 'assets/images/loadingBarBorder.png');
		game.load.image('loadBarFill', 'assets/images/loadingBarFill.png');
		game.load.bitmapFont('textFont', 'assets/fonts/bitmapFonts/textFont.png', 'assets/fonts/bitmapFonts/textFont.fnt');
		//starts the physics systems
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//for collisions
		//game.physics.p2.setImpactEvents(true);

	}, //end of preload

		/* In the following function, we will load all our variables with their values. I.e. sprites, sounds, scores, lives, etc. */
	create: function() {
		//transitions to the load state
		game.state.start("load");
	}, //end of create

	//The update function gets called for every frame of your game. It's where all the decision making and action takes place.
	update: function() {

	}, //end of update
}