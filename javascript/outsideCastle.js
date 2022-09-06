
/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Outside Castle
	This is the outside castle area where a cutscene plays. */

var outsideCastle = {
	create: function() {
		//setting bounds of the map
		//they're larger than the actual map so that the characters can walk in from off-screen
		game.world.setBounds(0,0, 1000, 1000);
		outsideCastleMusic.play();
		mapOutsideCastle = game.add.tilemap('outsideCastle', 800, 608);
		mapOutsideCastle.addTilesetImage('darkDimensionTileset', 'darkDimensionTileset');
		outsideCastleGround = mapOutsideCastle.createLayer('ground');
		outsideCastleCrystals = mapOutsideCastle.createLayer('crystals'); 
		outsideCastleBuilding = mapOutsideCastle.createLayer('castle');
		outsideCastleGargoyle = mapOutsideCastle.createLayer('gargoyle');
		outsideCastleDetails = mapOutsideCastle.createLayer('castleDetails');
		aura = game.add.sprite(393, 690, "aura");
		aura.animations.add('left', [3, 4, 5], 6, true);
		aura.animations.add('right', [6, 7, 8], 6, true);
		aura.animations.add('up', [9, 10, 11], 6, true);
		aura.animations.add('down', [0, 1, 2], 6, true);
		player = game.add.sprite(427, 700, "jeremy");
		player.animations.add('right', [3, 4, 5], 6, true);
		player.animations.add('left', [6, 7, 8], 6, true);
		player.animations.add('up', [9, 10, 11], 6, true);
		player.animations.add('down', [0, 1, 2], 6, true);
		game.physics.p2.enable(aura);
		game.physics.p2.enable(player);
		aura.body.fixedRotation = true;
		player.body.fixedRotation = true;
		textbox = game.add.image(100, 420, "textbox");
		textbox.visible = false;
		continueText = game.add.image(620, 530, "continueText");
		continueText.width = 45;
		continueText.height = 45;
		continueText.visible = false;
		player.animations.play("up");
		aura.animations.play("up");
		player.body.velocity.y = -75;
		aura.body.velocity.y = -75;

		setTimeout(function() {
			aura.body.setZeroVelocity();
			aura.frame = 7;
			aura.animations.stop();
		}, 3000);
		setTimeout(function() {
			player.body.setZeroVelocity();
			player.frame = 7;
			player.animations.stop();
			textbox.visible = true;
			auraOutsideCastle1.start();
			setTimeout(function() {
				continueText.visible = true;
				progressAuraCastle1 = true;
			}, 2310);
		}, 3150);

		z.onDown.add(function(){
		    if (progressAuraCastle1) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAuraCastle1 = false;
		    	auraOutsideCastle1.destroy();
		    	auraOutsideCastle2.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAuraCastle2 = true;
		    	}, 3175);
		    }
		    else if (progressAuraCastle2) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAuraCastle2 = false;
		    	auraOutsideCastle2.destroy();
		    	auraOutsideCastle3.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAuraCastle3 = true;
		    	}, 3175);
		    }
		    else if (progressAuraCastle3) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAuraCastle3 = false;
		    	auraOutsideCastle3.destroy();
		    	auraOutsideCastle4.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAuraCastle4 = true;
		    	}, 2650);
		    }
		    else if (progressAuraCastle4) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAuraCastle4 = false;
		    	auraOutsideCastle4.destroy();
		    	textbox.visible = false;
		    	aura.animations.play("up");
		    	player.animations.play("up");
		    	player.body.velocity.y = -75;
				aura.body.velocity.y = -75;
				setTimeout(function() {
					game.camera.fade(0xffffff, 1500, false);
					setTimeout(() => game.state.start("castleState"), 1500);
					setTimeout(() => outsideCastleMusic.pause(), 1500);
				}, 300);
		    }
		});
	}, //end of create

	update: function() {
		
	},  //End of update

	render: function() {
		//These are for debugging...
		//game.debug.cameraInfo(game.camera, 32, 32);
   		//game.debug.spriteCoords(player, 32, 500);
	} //end of render
}