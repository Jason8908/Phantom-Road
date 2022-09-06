
/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Castle
	This is the castle in the game. */

var castleState = {
	create: function() {
		castleMusic.play();
		if (castleFirstTime) {
			playerX = 345;
			playerY = 530;
			auraX = 400;
			auraY = 530;
			auraFrame = 7;
		};
		mapCastleLevel = game.add.tilemap('castleLevel', 800, 608);
		mapCastleLevel.addTilesetImage('castleTielset', 'castleTielset');
		castleGround = mapCastleLevel.createLayer('ground');
		castleWalls = mapCastleLevel.createLayer('walls');
		castleEnemySpawn = game.add.sprite(400, 300, "enemySpawnSprite");
		castleEnemySpawn.anchor.setTo(0.5, 0.5);
		castleDoor = mapCastleLevel.createLayer('door');
		mapCastleLevel.setCollision([0, 1, 2, 10, 12, 18, 19, 20], true, "walls");

		//clearing the console because warnings
		//remove to see warnings about map tiles
		console.clear();
		console.warn("The console was cleared recently.");

		//character sprites
		aura = game.add.sprite(auraX, auraY, "aura");
		aura.animations.add('left', [3, 4, 5], 7, true);
		aura.animations.add('right', [6, 7, 8], 7, true);
		aura.animations.add('up', [9, 10, 11], 7, true);
		aura.animations.add('down', [0, 1, 2], 7, true);
		aura.frame = 7;
		player = game.add.sprite(playerX, playerY, "jeremy");
		player.animations.add('right', [3, 4, 5], 7, true);
		player.animations.add('left', [6, 7, 8], 7, true);
		player.animations.add('up', [9, 10, 11], 7, true);
		player.animations.add('down', [0, 1, 2], 7, true);
		player.frame = 10;
		aura.frame = 10;

		//physics
		game.physics.p2.enable(aura);
		game.physics.arcade.enable(player);
		cursors = game.input.keyboard.createCursorKeys();
		aura.body.fixedRotation = true;
		player.body.fixedRotation = true;

		//textbox and continue text
		textbox = game.add.image(100, 420, "textbox");
		continueText = game.add.image(620, 530, "continueText");
		continueText.width = 45;
		continueText.height = 45;
		continueText.visible = false;
		textbox.visible = false;
		continueText.visible = false;

		//aura's text for the first time you get to this screen
		//after every battle, the player will return to this screen
		if (castleFirstTime) {
			castleFirstTime = false;
			setTimeout(function() {
				textbox.visible = true;
				auraCastle1.start();
				setTimeout(function() {
					continueText.visible = true;
					progressAura1 = true;
				}, 3330);
			}, 300);
		};

		//text
		z.onDown.add(function(){
		    if (progressAura1) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura1 = false;
		    	auraCastle1.destroy();
		    	auraCastle2.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAura2 = true;
		    	},  4605);
		    }
		    else if (progressAura2) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura2 = false;
		    	auraCastle2.destroy();
		    	castleText1.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressCastleText1 = true;
		    	},  1885);
		    }
		    else if (progressCastleText1) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressCastleText1 = false;
		    	castleText1.destroy();
		    	auraCastle3.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAura3 = true;
		    	},  5540);
		    }
		    else if (progressAura3) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura3 = false;
		    	auraCastle3.destroy();
		    	auraCastle4.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAura4 = true;
		    	},  4435);
		    }
		    else if (progressAura4) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura4 = false;
		    	auraCastle4.destroy();
		    	auraCastle5.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAura5 = true;
		    	},  6050);
		    }
		    else if (progressAura5) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura5 = false;
		    	auraCastle5.destroy();
		    	auraCastle6.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAura6 = true;
		    	},  5965);
		    }
		    else if (progressAura6) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura6 = false;
		    	auraCastle6.destroy();
		    	auraCastle7.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAura7 = true;
		    	},  9620);
		    }
		    else if (progressAura7) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura7 = false;
		    	auraCastle7.destroy();
		    	castleText2.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
		    		progressCastleText2 = true;
		    	}, 9800);
		    }
		    else if (progressCastleText2) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressCastleText2 = false;
		    	castleText2.destroy();
		    	auraCastle8.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAura8 = true;
		    	},  5880);
		    }
		    else if (progressAura8) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura8 = false;
		    	auraCastle8.destroy();
		    	auraCastle9.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
					progressAura9 = true;
		    	},  6390);
		    }
		    else if (progressAura9) {
		    	ping.play();
		    	continueText.visible = false;
		    	progressAura9 = false;
		    	auraCastle9.destroy();
		    	textbox.visible = false;
		    	aura.body.velocity.x = 90;
		    	aura.animations.play("right");
		    	setTimeout(function() {
		    		aura.body.setZeroVelocity();
		    		aura.body.velocity.y = -90;
		    		aura.animations.play("up");
		    		setTimeout(function() {
		    			aura.body.setZeroVelocity();
			    		aura.body.velocity.x = -90;
			    		aura.animations.play("left");
			    		setTimeout(function() {
			    			aura.body.setZeroVelocity();
			    			aura.animations.stop();
			    			aura.frame = 1;
			    			canMove = true;
			    			/*saving the coords of Aura so that the next time the player 
			    			returns, she is in the same spot */
			    			auraX = aura.x;
			    			auraY = aura.y;
			    			auraFrame = 1;
			    			//debugging
			    			//console.log("Aura X: " + auraX);
			    			//console.log("Aura Y: " + auraY);
			    		}, 4100);
		    		}, 7900);
		    	}, 4500);
		    }
		    else if (progressAuraMaxLevel) {
		    	ping.play();
		    	progressAuraMaxLevel = false;
		    	continueText.visible = false;
		    	auraMaxLevel.destroy();
		    	auraMaxLevel2.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
		    		progressAuraMaxLevel2 = true;
		    	}, 2830);
		    }
		    else if (progressAuraMaxLevel2) {
		    	ping.play();
		    	progressAuraMaxLevel2 = false;
		    	continueText.visible = false;
		    	auraMaxLevel2.destroy();
		    	auraMaxLevel3.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
		    		progressAuraMaxLevel3 = true;
		    	}, 1290);
		    }
		    else if (progressAuraMaxLevel3) {
		    	ping.play();
		    	progressAuraMaxLevel3 = false;
		    	continueText.visible = false;
		    	auraMaxLevel3.destroy();
		    	auraMaxLevel4.start();
		    	setTimeout(function() {
		    		continueText.visible = true;
		    		progressAuraMaxLevel4 = true;
		    	}, 3880);
		    }
		    else if (progressAuraMaxLevel4) {
		    	ping.play();
		    	progressAuraMaxLevel4 = false;
		    	continueText.visible = false;
		    	auraMaxLevel3.destroy();
		    	textbox.visible = false;
		    	game.camera.fade(0x000000, 1700, false);
		    	setTimeout(() => game.state.start("castleTop"), 1700);
		    }
		});

		//stopping the animations when not moving
		up.onUp.add(function() {
	    	if (moving) {
		        moving = false;
		        player.animations.stop();
		        player.frame = 10;
		    };
	    });
	    down.onUp.add(function() {
	    	if (moving) {
		        moving = false;
		        player.animations.stop();
		        player.frame = 1;
		    };
	    });

	   left.onUp.add(function() {
	    	if (moving) {
		        moving = false;
		        player.animations.stop();
		        player.frame = 7;
		    };
	    });
	    right.onUp.add(function() {
	    	if (moving) {
		    	moving = false;
		    	player.animations.stop();
		    	player.frame = 4;
		    };
	    });
	}, //end of create

	update: function() {
		//moving
		player.body.velocity.x = 0;
		player.body.velocity.y = 0;
		if (cursors.up.isDown) {
			if (canMove) {
				if (!moving) {
					moving = true;
					player.animations.play("up");
				}
				player.body.velocity.y = -80;
				if (enemiesSpawning) {
					enemySpawnChance = Math.round(1+ Math.random() * 100000)
					if (enemySpawnChance <= 1000) {
						//console.log("Spawned!");
						enemySpawnNumber = Math.round(1 + Math.random() * 2);
						//console.log(enemySpawnNumber);
						playerX = player.x;
						playerY = player.y;
						auraX = aura.x;
						auraY = aura.y;
						castleMusic.pause();
						castleMusic.currentTime = 0;
						fadeSound.play();
						setTimeout(() => fadeSound.pause(), 1500);
						setTimeout(() => fadeSound.currentTime = 0, 1500);
						player.body.velocity.x = 0;
						player.body.velocity.y = 0;
						canMove = false;
						game.camera.fade(0xffffff, 1500, false);
						setTimeout(() => game.state.start("battle"), 1500);
					};
				};
			};
	    } 
	    else if (cursors.down.isDown) {
	    	if (canMove) {
		    	if (!moving) {
					moving = true;
					player.animations.play("down");
				}
				player.body.velocity.y = 80;
				if (enemiesSpawning) {
					enemySpawnChance = Math.round(1+ Math.random() * 100000)
					if (enemySpawnChance <= 1000) {
						//console.log("Spawned!");
						enemySpawnNumber = Math.round(1 + Math.random() * 2);
						//console.log(enemySpawnNumber);
						playerX = player.x;
						playerY = player.y;
						auraX = aura.x;
						auraY = aura.y;
						castleMusic.pause();
						castleMusic.currentTime = 0;
						fadeSound.play();
						setTimeout(() => fadeSound.pause(), 1500);
						setTimeout(() => fadeSound.currentTime = 0, 1500);
						player.body.velocity.x = 0;
						player.body.velocity.y = 0;
						canMove = false;
						game.camera.fade(0xffffff, 1500, false);
						setTimeout(() => game.state.start("battle"), 1500);
					};
				};
			};
	    }

	    if (cursors.left.isDown) {
	    	if (canMove) {
		    	if (!moving) {
					moving = true;
					player.animations.play("left");
				}
				player.body.velocity.x = -80;
				if (enemiesSpawning) {
					enemySpawnChance = Math.round(1 + Math.random() * 100000)
					if (enemySpawnChance <= 1000) {
						//console.log("Spawned!");
						enemySpawnNumber = Math.round(1 + Math.random() * 2);
						//console.log(enemySpawnNumber);
						playerX = player.x;
						playerY = player.y;
						auraX = aura.x;
						auraY = aura.y;
						castleMusic.pause();
						castleMusic.currentTime = 0;
						fadeSound.play();
						setTimeout(() => fadeSound.pause(), 1500);
						setTimeout(() => fadeSound.currentTime = 0, 1500);
						player.body.velocity.x = 0;
						player.body.velocity.y = 0;
						canMove = false;
						game.camera.fade(0xffffff, 1500, false);
						setTimeout(() => game.state.start("battle"), 1500);
					};
				};
			};
	    }
	    else if (cursors.right.isDown) {
	    	if (canMove) {
		    	if (!moving) {
					moving = true;
					player.animations.play("right");
				}
				player.body.velocity.x = 80;
				if (enemiesSpawning) {
					enemySpawnChance = Math.round(1+ Math.random() * 100000)
					if (enemySpawnChance <= 1000) {
						//console.log("Spawned!");
						enemySpawnNumber = Math.round(1 + Math.random() * 2);
						//console.log(enemySpawnNumber);
						playerX = player.x;
						playerY = player.y;
						auraX = aura.x;
						auraY = aura.y;
						castleMusic.pause();
						castleMusic.currentTime = 0;
						fadeSound.play();
						setTimeout(() => fadeSound.pause(), 1500);
						setTimeout(() => fadeSound.currentTime = 0, 1500);
						player.body.velocity.x = 0;
						player.body.velocity.y = 0;
						canMove = false;
						game.camera.fade(0xffffff, 1500, false);
						setTimeout(() => game.state.start("battle"), 1500);
					};
				};
			};
	    } 
		
		game.physics.arcade.collide(player, castleWalls, function() {
		});
		if (player.overlap(castleEnemySpawn)) {
			enemiesSpawning = true;
			//debugging
			//console.log(enemiesSpawning);
		}
		else if (!player.overlap(castleEnemySpawn)) {
			enemiesSpawning = false;
		};
	},  //End of update

	render: function() {
		//These are for debugging...
		//game.debug.cameraInfo(game.camera, 32, 32);
   		//game.debug.spriteCoords(player, 32, 500);
	} //end of render
}