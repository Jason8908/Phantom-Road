/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Aura Introduction
	Thisis the code file that is used for the cutscene where
	Aura introduces herself to the player */

var auraIntroductionState = {
	create: function() {
		//sets the bound of the world
		game.world.setBounds(0,0, 1000, 1000);
		map = game.add.tilemap('enemyAttack', 800, 608);
		map.addTilesetImage('ashlandsTileset', 'ashlandsTileset');
		groundLayer = map.createLayer('ground');
		wallLayer = map.createLayer('walls');
		treeLayer = map.createLayer('trees');
		aura = game.add.sprite(323, 266, "aura");
		aura.animations.add('left', [3, 4, 5], 6, true);
		aura.animations.add('right', [6, 7, 8], 6, true);
		aura.animations.add('up', [9, 10, 11], 6, true);
		aura.animations.add('down', [0, 1, 2], 6, true);
		player = game.add.sprite(357, 271, "jeremy");
		player.animations.add('right', [3, 4, 5], 6, true);
		player.animations.add('left', [6, 7, 8], 6, true);
		player.animations.add('up', [9, 10, 11], 6, true);
		player.animations.add('down', [0, 1, 2], 6, true);
		//add physics to aura and the player to allow them to move
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
		player.frame = 4;
		aura.frame = 7;
		setTimeout(function() {
			textbox.visible = true;
			player.frame = 7;
			auraIntro1.start();
			setTimeout(function() {
				continueText.visible = true;
				progressAuraIntro1 = true;
			}, 4500);
		}, 400);
		//text progression
		z.onDown.add(function(){
			if (progressAuraIntro1) {
				ping.play();
				auraIntro1.destroy();
				auraIntro2.start();
				continueText.visible = false;
				progressAuraIntro1 = false;
				setTimeout(function() {
					continueText.visible = true;
					progressAuraIntro2 = true;
				}, 4000);
			}
			else if (progressAuraIntro2) {
				ping.play();
				continueText.visible = false;
				progressAuraIntro2 = false;
				auraIntro2.destroy();
				auraIntro3.start();
				setTimeout(function() {
					continueText.visible = true;
					progressAuraIntro3 = true;
				}, 4350);
			}
			else if (progressAuraIntro3) {
				ping.play();
				continueText.visible = false;
				progressAuraIntro3 = false;
				auraIntro3.destroy();
				auraIntro4.start();
				setTimeout(function() {
					continueText.visible = true;
					progressAuraIntro4 = true;
				}, 2735);
			}
			else if (progressAuraIntro4) {
				ping.play();
				continueText.visible = false;
				progressAuraIntro4 = false;
				auraIntro4.destroy();
				auraIntro5.start();
				setTimeout(function() {
					continueText.visible = true;
					progressAuraIntro5 = true;
				}, 4860);
			}
			else if (progressAuraIntro5) {
				ping.play();
				continueText.visible = false;
				progressAuraIntro5 = false;
				auraIntro5.destroy();
				auraIntro6.start();
				setTimeout(function() {
					continueText.visible = true;
					progressAuraIntro6 = true;
				}, 11510);
			}
			else if (progressAuraIntro6) {
				ping.play();
				continueText.visible = false;
				progressAuraIntro6 = false;
				auraIntro6.destroy();
				auraIntro7.start();
				setTimeout(function() {
					continueText.visible = true;
					progressAuraIntro7 = true;
				}, 4180);
			}
			else if (progressAuraIntro7) {
				ping.play();
				continueText.visible = false;
				progressAuraIntro7 = false;
				auraIntro7.destroy();
				textbox.visible = false;
				aura.animations.play("down");
				setTimeout(() => aura.body.velocity.y = 75, 200);
				setTimeout(() => dirtWalkSound.play(), 200);
				setTimeout(function() {
					player.frame = 1;
					setTimeout(() => player.animations.play("down"), 200); 
					player.body.velocity.y = 75
				}, 800);
				setTimeout(function() {
					game.camera.fade(0x000000, 600, false);
					setTimeout(() => game.state.start("outsideCastle"), 600);
					dirtWalkSound.pause();
					dirtWalkSound.currentTime = 0;
				}, 7250);
				//for testing
				/* game.camera.follow(player);
				game.world.setBounds(0, 0, 1000, 608); */
			}
		});
	},

	update: function() {
	
	} //End of update
}