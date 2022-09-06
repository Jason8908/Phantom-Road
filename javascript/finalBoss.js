/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Final Boss
	This is the final boss of the game. */

var finalBoss = {
	create: function() {
		battleMusic3.play(); 
		enemyLevel = playerLevel + 1;
		enemyMinDamage = (enemyLevel * 2) + 29;
		enemyMaxHP = 500;
		enemyHP = enemyMaxHP
		playerMaxHP = playerLevel * 20 + 99;
		playerHP = playerMaxHP;

		//adding textbox and continue arrow
		textbox = game.add.image(100, 420, "textbox");
		continueText = game.add.image(620, 530, "continueText");
		continueText.width = 45;
		continueText.height = 45;
		continueText.visible = false;

		//resetting variables
		playerMinDamage = (playerLevel * 3) + 27;
		progressFinalSwordArmour = false;
		progressFinalSwordArmour2 = false;
		progressFlamethrower = false;
		progressStoneSword = false;
		progressNotEnoughSP = false;
		progressLeatherArmour = false;
		progressFlamethrower2 = false;
		progressFlamethrower3 = false;
		progressFlamethrower4 = false;
		progressFlamethrower5 = false;
		progressFlamethrower6 = false;
		progressFlamethrower7 = false;
		playerTurn = false;
		optionSelected = 1;
		optionHighlighted = false;
		progressSuccessRun = false;
		progressFailRun = false;
		progressguardian = false;
		progressguardianCheck1 = false;
		progressguardianCheck2 = false;
		progressguardianCheck3 = false;
		progressLevelUp = false;
		progressLevelUp2 = false;
		progressLevelUp3 = false;
		playerSP = 0;

		//adding the guardian into the game
		guardian = game.add.sprite(250, 151, "guardian");
		guardian.width = 200;
		guardian.height = 200;

		//animations
		guardian.animations.add('battleIdle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 7, true);
		guardian.animations.add('attack', [30,31, 32, 33, 34, 35, 36, 37, 38, 39], 8, false);
		guardian.animations.add('death', [40,41, 42, 43, 44, 45, 46, 47, 48, 49], 8, false);
		guardian.animations.play("battleIdle");
		guardianText1.start();

		//flamethrower animations
		flamethrower = game.add.sprite(300, 211, "fireball");
		flamethrower.visible = false;
		flamethrower.width = 90;
		flamethrower.height = 90;
		flamethrower.animations.add('fireball', [0, 1], 5, true);

		selector = game.add.image(110, 440, "selector");
		selector.width = 20;
		selector.height = 20;
		selector.visible = false;
		setTimeout(() => continueText.visible = true, 1010);
		setTimeout(() => progressGuardianText = true, 1010);

		//changing position of heart
		right.onDown.add(highlightRight);
		left.onDown.add(highlightLeft);

		//fight slashing animation
		fightAnimation = game.add.sprite(230, 151, "fightAnimation");
		fightAnimation.visible = false;
		fightAnimation.width = 300;
		fightAnimation.height = 300;
		fightAnimation.animations.add('fight', [0, 1, 2, 3], 7, false);

		z.onDown.add(function(){
			if (progressGuardianText) {
				ping.play();
				guardianText1.destroy();
				progressGuardianText = false;
				selector.x = 110;
				selector.y = 440;
				selector.visible = true;
				continueText.visible = false;
		    	fight = game.add.bitmapText(130, 435, "textFont", 'Fight', 50);
				spell = game.add.bitmapText(270, 435, "textFont", 'Spell', 50);
				check = game.add.bitmapText(410, 435, "textFont", 'Check', 50);
				run = game.add.bitmapText(560, 435, "textFont", 'Run', 50);
				healthLabel = game.add.bitmapText(140, 480, "textFont", 'HP:', 50);
				playerLevelLabel = game.add.bitmapText(140, 525, "textFont", 'Lv: ' + playerLevel, 45);
				playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
				//using the health bar plugin to include a health bar for the player, and later on, the enemy as well
				HPBar = new HealthBar(game, {
					width: 220,
   					height: 30,
					x: 320, 
					y: 496,
					bg: {
				      color: '#FF0000'
				    },
				    bar: {
				      color: '#008000'
				    },
				    animationDuration: 200,
				    flipped: false
				});
				HPBar.width = 220;
				HPBar.height = 30;
				playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
				HPBar.setPercent(playerHealthPercent);
				enemyHPBar = new HealthBar(game, {
					width: 80,
   					height: 10,
					x: 360, 
					y: 200,
					bg: {
				      color: '#FF0000'
				    },
				    bar: {
				      color: '#008000'
				    },
				    animationDuration: 200,
				    flipped: false
				});
				enemyHealthPercent = Math.round((enemyHP / enemyMaxHP)*100);
				enemyHPBar.setPercent(enemyHealthPercent);
				setTimeout(() => playerTurn = true, 200);
			}
			else if (progressNotEnoughSP) {
				ping.play();
				setTimeout(function() {
					progressNotEnoughSP = false;
					notEnoughSP.destroy();
					continueText.visible = false;
					playerTurn = true;
					optionHighlighted = false;
					selector.visible = true;
					fight.visible = true;
					spell.visible = true;
					check.visible = true;
					selector.x = 110;
					selector.y = 440;
					playerLevelLabel.visible = true;
					run.visible = true;
					selectedOption = 1;
					healthLabel.visible = true;
					playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
					HPBar = new HealthBar(game, {
						width: 220,
							height: 30,
						x: 320, 
						y: 496,
						bg: {
					      color: '#FF0000'
					    },
					    bar: {
					      color: '#008000'
					    },
					    animationDuration: 200,
					    flipped: false
					});
				}, 100);
			}
			else if (progressGuardianCheck1) {
				ping.play();
		    	progressGuardianCheck1 = false;
		    	checkEnemy.destroy();
		    	guardianCheckText1.start();
		    	continueText.visible = false;
		    	setTimeout(() => continueText.visible = true, 2410);
				setTimeout(() => progressGuardianCheck2 = true, 2410);
			}
			else if (progressGuardianCheck2) {
				ping.play();
				progressGuardianCheck2 = false;
				guardianCheckText1.destroy();
				guardianAttack();
				continueText.visible = false;
			}
			else if (progressGuardianDeath) {
				ping.play();
				progressGuardianDeath = false;
				guardianDeath1.destroy();
				textbox.visible = false;
				continueText.visible = false;
				game.camera.fade(0xffffff, 1700, false);
				setTimeout(() => game.state.start("theEnd"), 1700);
			}
			else if (progressGuardianRun) {
				ping.play();
				continueText.visible = false;
				progressGuardianRun = false;
				noRun.destroy();
				selector.visible = true;
				fight.visible = true;
				spell.visible = true;
				check.visible = true;
				run.visible = true;
				playerLevelLabel = game.add.bitmapText(140, 525, "textFont", 'Lv: ' + playerLevel, 45);
				playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
				HPBar.visible = false;
				healthLabel.visible = false;
				healthLabel = game.add.bitmapText(140, 480, "textFont", 'HP:', 50);
				HPBar = new HealthBar(game, { 
					width: 220,
   					height: 30,
					x: 320, 
					y: 496,
					bg: {
				      color: '#FF0000'
				    },
				    bar: {
				      color: '#008000'
				    },
				    animationDuration: 200,
				    flipped: false
				});
				HPBar.width = 220;
				HPBar.height = 30;
				setTimeout(() => playerTurn = true, 200);
				setTimeout(() => optionHighlighted = false, 200);
				HPBar.setPercent(playerHealthPercent);
			}
			if (playerTurn)	{
				selectSound.play();
				playerTurn = false;
				optionHighlighted = true;
				if (selectedOption == 1) {
					optionSelected = "fight";
					selector.visible = false;
					playerTurn = false;
					fight.visible = false;
					spell.visible = false;
					check.visible = false;
					run.visible = false;
					healthLabel.visible = false;
					playerLevelLabel.visible = false;
					HPBar.kill();
					fightAnimation.visible = true;
					fightAnimation.animations.play("fight");
					attackSound.play();
					guardian.animations.stop();
					guardian.frame = 42;
					setTimeout(() => playerDamageText = game.add.bitmapText(263, 153, "textFontRed", playerDamage, 60), 10);
					setTimeout(() => playerDamageText.visible = false, 350);
					playerDamage = Math.round(playerMinDamage + Math.random() * 7);
					playerDamage += playerExtraDamage;
					enemyHP = enemyHP - playerDamage;
					enemyHealthPercent = Math.round((enemyHP / enemyMaxHP)*100);
					enemyHPBar.setPercent(enemyHealthPercent);
					playerSP += 3;
					playerSPLabel.destroy();
					playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
					setTimeout(() => fightAnimation.visible = false, 350);
					//console.log("You chose: " + optionSelected);
					if (enemyHP <= 0) {
						playerSPLabel.destroy();
						battleMusic3.stop();
						guardian.animations.stop();
						guardian.frame = 26;
						guardian.animations.play("death");
						guardianDeath1.start();
						setTimeout(function() {
							continueText.visible = true;
							progressGuardianDeath = true;
						}, 6050);
					}
					else {
						setTimeout(() => guardianAttack(), 1000);
						setTimeout(() => guardian.animations.play("battleIdle"), 350);
					};
				}
				else if (selectedOption == 2) {
					optionSelected = "spell";
					selector.visible = false;
					playerTurn = false;
					fight.visible = false;
					spell.visible = false;
					check.visible = false;
					run.visible = false;
					HPBar.kill();
					healthLabel.visible = false;
					playerLevelLabel.visible = false;
					setTimeout(() => chooseSpells = true, 100);

					//Spell check starts
					//checks for an X press
					x.onDown.add(function() {
						if (haveSpells) {
							if (chooseSpells) {
								chooseSpells = false;
								selectSound.play();
								continueText.visible = false;
								spellText = false;
								//makes all spells disappear
								flamethrowerLabel.visible = false;
								selector.width = 20;
								selector.height = 20;
								selector.x = 110;
								selector.y = 440;
								selector.visible = true;
								fight.visible = true;
								spell.visible = true;
								check.visible = true;
								run.visible = true;
								HPBar.visible = false;
								healthLabel.visible = false;
								healthLabel = game.add.bitmapText(140, 480, "textFont", 'HP:', 50);
								playerLevelLabel = game.add.bitmapText(140, 525, "textFont", 'Lv: ' + playerLevel, 45);
								playerSPLabel.destroy();
								playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
								HPBar = new HealthBar(game, {
									width: 220,
										height: 30,
									x: 320, 
									y: 496,
									bg: {
								      color: '#FF0000'
								    },
								    bar: {
								      color: '#008000'
								    },
								    animationDuration: 200,
								    flipped: false
								});
								HPBar.width = 220;
								HPBar.height = 30;
								HPBar.setPercent(playerHealthPercent);
								setTimeout(() => playerTurn = true, 100);
								setTimeout(() => optionHighlighted = false, 100);
								setTimeout(() => selectedOption = 1, 100);
							}
						};
					});

					//checks for a Z press
					z.onDown.add(function(){
						if (chooseSpells) {
							chooseSpells = false;
							if (spellText) {
								ping.play();
								continueText.visible = false;
								spellText = false;
								noSpellsText.destroy();
								selector.y = 110;
								selector.y = 440;
								selector.visible = true;
								fight.visible = true;
								spell.visible = true;
								check.visible = true;
								run.visible = true;
								HPBar.visible = false;
								healthLabel.visible = false;
								healthLabel = game.add.bitmapText(140, 480, "textFont", 'HP:', 50);
								playerLevelLabel = game.add.bitmapText(140, 525, "textFont", 'Lv: ' + playerLevel, 45);
								playerSPLabel.destroy();
								playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
								HPBar = new HealthBar(game, {
									width: 220,
										height: 30,
									x: 320, 
									y: 496,
									bg: {
								      color: '#FF0000'
								    },
								    bar: {
								      color: '#008000'
								    },
								    animationDuration: 200,
								    flipped: false
								});
								HPBar.width = 220;
								HPBar.height = 30;
								setTimeout(() => playerTurn = true, 200);
								setTimeout(() => optionHighlighted = false, 200);
								setTimeout(() => selectedOption = 1, 100);
								HPBar.setPercent(playerHealthPercent);
							}
							else if (selectedSpell == 1) {
								if (haveSpells) {
									if (playerSP >= 20) {
										playerSP = playerSP - 20;
										playerSPLabel.destroy();
										playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
	 									playerDamage = Math.round(playerMinDamage + Math.random() * 7);
										playerDamage = playerDamage * 2;
										fireballSound.play();
										flamethrower.visible = true;
										enemyHP = enemyHP - playerDamage;
										enemyHealthPercent = Math.round((enemyHP / enemyMaxHP)*100);
										enemyHPBar.setPercent(enemyHealthPercent);
										setTimeout(() => playerDamageText = game.add.bitmapText(263, 153, "textFontRed", playerDamage, 60), 10);
										setTimeout(() => playerDamageText.visible = false, 550);
										flamethrower.animations.play("fireball");
										guardian.animations.stop();
										guardian.frame = 18;
										selector.visible = false;
										flamethrowerLabel.visible = false;
										setTimeout(function() {
											flamethrower.visible = false;
											fireballSound.stop();
											if (enemyHP <= 0) {
												playerSPLabel.destroy();
												battleMusic3.stop();
												guardian.animations.stop();
												guardian.frame = 26;
												guardian.animations.play("death");
												guardianDeath1.start();
												setTimeout(function() {
													continueText.visible = true;
													progressGuardianDeath = true;
												}, 6050);
											}
											else {
												guardian.animations.play("battleIdle");
												guardianAttack();
											};
										}, 1100);
									}
									else {
										ping.play();
										flamethrowerLabel.destroy();
										playerSPLabel.destroy();
										selector.visible = false;
										selector.x = 110;
										selector.y = 440;
										notEnoughSP.start();
										chooseSpells = false;
										setTimeout(function() {
											continueText.visible = true;
											progressNotEnoughSP = true;
										}, 3110);
									};
								};
							}
						};
					});

					//checks if the player has any spells to use
					if (!haveSpells) {
						playerSPLabel.destroy();
						noSpellsText.start();
						setTimeout(() => continueText.visible = true, 6170);
						setTimeout(() => spellText = true, 6170);
					}
					else if (haveFlamethrower) {
						selectedSpell = 1;
						flamethrowerLabel = game.add.bitmapText(160, 435, "textFont", 'Flamethrower | Cost: 20SP', 40);
						selector.x = 135;
						selector.y = 439;
						selector.visible = true;
						selector.width = 20;
						selector.height = 20;
					}
				} //spell check ends

				else if (selectedOption == 3) {
					optionSelected = "check";
					selector.visible = false;
					playerTurn = false;
					HPBar.kill();
					playerSPLabel.destroy();
					healthLabel.visible = false;
					playerLevelLabel.visible = false;
					fight.visible = false;
					spell.visible = false;
					check.visible = false;
					run.visible = false;
					checkEnemy.init(game, {
					  x: 120,
					  y: 435,
					  fontFamily: "textFontWhite",
					  time: 90,
				      fontSize: 30,
				      sound: textSound,
					  maxWidth: 500,
					  text: "Attack: " + enemyMinDamage + "               Defense: " + enemyDefense
					});
					checkEnemy.start();
					setTimeout(() => continueText.visible = true, 3100);
					setTimeout(() => progressGuardianCheck1 = true, 3100);
					//console.log("You chose: " + optionSelected);
				}
				else if (selectedOption == 4) {
					optionSelected = "run";
					selector.visible = false;
					playerTurn = false;
					HPBar.kill();
					healthLabel.visible = false;
					fight.visible = false;
					spell.visible = false;
					check.visible = false;
					run.visible = false;
					playerSPLabel.destroy();
					playerLevelLabel.destroy();
					noRun.start();
					setTimeout(() => continueText.visible = true, 3100);
					setTimeout(() => progressGuardianRun = true, 3100);
				};
			};
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