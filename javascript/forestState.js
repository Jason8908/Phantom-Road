/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Forest State
	This is the first cutscene of the game. */

var forestState = {
	create: function() {
		game.world.setBounds(0,0, 1000, 1000);
		progressText = false;
		map = game.add.tilemap('enemyAttack', 800, 608);
		map.addTilesetImage('ashlandsTileset', 'ashlandsTileset');
		groundLayer = map.createLayer('ground');
		wallLayer = map.createLayer('walls');
		treeLayer = map.createLayer('trees');
		bandit = game.add.sprite(900, 261, "bandit");
		bandit.width = 53;
		bandit.height = 53;
		//loading character sprites and adding animations
		bandit.animations.add('run', [8, 9, 10, 11, 12, 13, 14, 15], 14, true);
		bandit.animations.add('attack', [19, 20, 21, 22, 23], 9, false);
		bandit.animations.add('idle', [0, 1, 2, 3], 5, true);
		bandit.animations.play("run");
		aura = game.add.sprite(850, 271, "aura");
		aura.animations.add('left', [3, 4, 5], 12, true);
		aura.animations.add('right', [6, 7, 8], 12, true);
		aura.animations.add('up', [9, 10, 11], 12, true);
		aura.animations.add('down', [0, 1, 2], 12, true);
		player = game.add.sprite(357, 271, "jeremy");
		player.animations.add('right', [3, 4, 5], 12, true);
		player.animations.add('left', [6, 7, 8], 12, true);
		player.animations.add('up', [9, 10, 11], 12, true);
		player.animations.add('down', [0, 1, 2], 12, true);
		player.frame = 1;
		game.physics.p2.enable(aura);
		game.physics.p2.enable(bandit);
		game.physics.p2.enable(player);
		cursors = game.input.keyboard.createCursorKeys();
		aura.body.fixedRotation = true;
		player.body.fixedRotation = true;
		bandit.body.fixedRotation = true;
		setTimeout(function() {
	    	textbox = game.add.image(100, 420, "textbox"); 
			helpAura1.start();
			player.frame = 4;
	    }, 750);
		 setTimeout(function() {
	    	continueText = game.add.image(620, 530, "continueText");
			continueText.width = 45;
			continueText.height = 45;
			progressText = true;
			disabled = false;
	    }, 1600);
	},

	update: function() {
		//progresses text and plays 'cutscene' 
		z.onDown.add(function(){
		    if (progressText) {
		    	ping.play();
		    	setTimeout(() => forestAura.play(), 200);
		    	progressText = false;
		    	helpAura1.destroy();
		    	continueText.visible = false;
		    	textbox.visible = false;
			}
			else if (progressText2) {
				ping.play();
				progressText2 = false;
				helpAura2.destroy();
				continueText.visible = false;
				helpAura3.start();
			}
			else if (progressText3) {
				ping.play();
				progressText3 = false;
				helpAura3.destroy();
				continueText.visible = false;
				textbox.visible = false;
				bandit.animations.play("attack");
				swordSwing.play();
				setTimeout(function() {
			    	game.camera.fade(0xffffff, 600, false);
			    	setTimeout(() => game.state.start('battleBandit'), 600);
			    	setTimeout(() => forestAura.pause(), 600);
			    }, 600);
			}
			if (aura.x != 600 && !disabled) {
				disabled = true;
		    	if(!auraMoving) {
		    		dirtRun.play();
		    		auraMoving = true;
		    		aura.animations.play("left");
		    	}
			    aura.body.velocity.x = -200;
			    setTimeout(function() {
			    	aura.body.setZeroVelocity();
			    	aura.body.velocity.y = 100;
			    	aura.animations.play("down");
			    }, 2600);
			    setTimeout(function() {
			    	aura.body.setZeroVelocity();
			    	aura.body.velocity.x = -100;
			    	aura.animations.play("left");
			    }, 2950);
			    setTimeout(function() {
			    	aura.body.setZeroVelocity();
			    	aura.body.velocity.y = -100;
			    	aura.animations.play("up");
			    }, 3850);
			    setTimeout(function() {
			    	aura.body.setZeroVelocity();
			    	aura.animations.stop();
			    	aura.frame = 7;
			    	dirtRun.pause();
			    	dirtRun.currentTime = 0;
			    	bandit.body.velocity.x = -200;
			    	setTimeout(() => dirtRun.play(), 100);
			    }, 4100);
			    setTimeout(function() {
			    	dirtRun.pause();
			    	bandit.body.setZeroVelocity();
			    	bandit.animations.stop();
			    	bandit.animations.play("idle");
			    	textbox.visible = true;
			    	helpAura2.start();
			    }, 7000);
			    setTimeout(function() {
			    	continueText.visible = true;
			    	progressText2 = true;
			    }, 11000);
			    setTimeout(function() {
			    	continueText.visible = true;
			    	progressText3 = true;
			    }, 13700);
		    };
		});
	}, //End of update

	render: function() {
		//These are for debugging...
		//game.debug.cameraInfo(game.camera, 32, 32);
   		//game.debug.spriteCoords(bandit, 32, 500);
	} //end of render
}