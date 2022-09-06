
/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Top of Castle
	This is the top of the castle game. */

var castleTop = {
	create: function() {
		castleTopMusic.play();
		mapCastleTop = game.add.tilemap('castleLevel', 800, 608);
		mapCastleTop.addTilesetImage('castleTielset', 'castleTielset');
		castleTopGround = mapCastleTop.createLayer('ground');
		castleTopWalls = mapCastleTop.createLayer('walls');
		guardian = game.add.sprite(400, 400, "guardian");
		guardian.anchor.setTo(0.5, 0.5);
		guardian.width = 112;
		guardian.height = 112;
		aura = game.add.sprite(400, 530, "aura");
		aura.animations.add('left', [3, 4, 5], 7, true);
		aura.animations.add('right', [6, 7, 8], 7, true);
		aura.animations.add('up', [9, 10, 11], 7, true);
		aura.animations.add('down', [0, 1, 2], 7, true);
		player = game.add.sprite(345, 530, "jeremy");
		player.animations.add('right', [3, 4, 5], 7, true);
		player.animations.add('left', [6, 7, 8], 7, true);
		player.animations.add('up', [9, 10, 11], 7, true);
		player.animations.add('down', [0, 1, 2], 7, true);
		player.frame = 10;
		aura.frame = 10;
		textbox = game.add.image(100, 420, "textbox");
		continueText = game.add.image(620, 530, "continueText");
		continueText.width = 45;
		continueText.height = 45;
		continueText.visible = false;
		textbox.visible = false;

		setTimeout(() => textbox.visible = true, 500);
		setTimeout(() => auraCastleTop.start(), 500);
		setTimeout(function() {
			continueText.visible = true;
			progressAuraCastleTop = true;
		}, 1780);

		z.onDown.add(function(){
			if (progressAuraCastleTop) {
				ping.play();
				progressAuraCastleTop = false;
				auraCastleTop.destroy();
				auraCastleTop2.start();
				continueText.visible = false;
				setTimeout(function() {
					continueText.visible = true;
					progressAuraCastleTop2 = true;
				}, 4230);
			}
			else if (progressAuraCastleTop2) {
				ping.play();
				progressAuraCastleTop2 = false;
				auraCastleTop2.destroy();
				auraCastleTop3.start();
				continueText.visible = false;
				setTimeout(function() {
					continueText.visible = true;
					progressAuraCastleTop3 = true;
				}, 3180);
			}
			else if (progressAuraCastleTop3) {
				ping.play();
				progressAuraCastleTop3 = false;
				auraCastleTop3.destroy();
				auraCastleTop4.start();
				continueText.visible = false;
				setTimeout(function() {
					continueText.visible = true;
					progressAuraCastleTop4 = true;
				}, 1850);
			}
			else if (progressAuraCastleTop4) {
				ping.play();
				progressAuraCastleTop4 = false;
				auraCastleTop4.destroy();
				auraCastleTop5.start();
				continueText.visible = false;
				setTimeout(function() {
					continueText.visible = true;
					progressAuraCastleTop5 = true;
				}, 1150);
			}
			else if (progressAuraCastleTop5) {
				ping.play();
				progressAuraCastleTop4 = false;
				auraCastleTop4.destroy();
				auraCastleTop5.start();
				continueText.visible = false;
				game.camera.fade(0xffffff, 1700, false);
				setTimeout(() => game.state.start("finalBoss"), 1700);
				setTimeout(() => castleTopMusic.stop(), 1700);
			} 	
		});
	}, //end of create

	update: function() {
		
	},  //End of update

	render: function() {
		//These are for debugging...
		//game.debug.cameraInfo(game.camera, 32, 32);
   		//game.debug.spriteCoords(sprite, 32, 500);
	} //end of render
}