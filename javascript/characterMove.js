if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			if(!stationary) {
				if(!moving) {
					playerRun.play();
					moving = true;
				};
				if(directionFacing == "left") {
					player.scale.x *= -1;
					directionFacing = "right";
				};
				player.x += 2;
			};
		};
		right.onUp.add(function(){
			if(!stationary) {
				moving = false;
				if (!moving) {
					player.animations.stop();
					playerIdle.play();
				};
			};
		});

		left.onDown.add(function() {
			playerRun.play();
		});
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			if(!stationary) {
				if(!moving) {
					playerRun.play();
					moving = true;
				};
				if(directionFacing == "right") {
					player.scale.x *= -1;
					directionFacing = "left";
				};
				player.x -= 2;
			};
		};
		left.onUp.add(function(){
			if(!stationary) {
				moving = false;
				if (!moving) {
					player.animations.stop();
					playerIdle.play();
				};
			};
		});

		z.onDown.add(function() {
			if(!stationary) {
				stationary = true;
				playerSwordCombo.play();
				setTimeout(() => stationary = false, 1650);
				setTimeout(() => playerIdle.play(), 1600);
			};
		});