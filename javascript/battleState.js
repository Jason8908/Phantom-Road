/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Battle State
	This is the game's battle screen */

var battleState = {
	create: function() {
		enemyLevel = playerLevel + 1;
		enemyMinDamage = (enemyLevel * 2) + 29;
		enemyMaxHP = enemyLevel * 15 + 90;
		enemyHP = enemyMaxHP
		playerMaxHP = playerLevel * 20 + 99;
		playerHP = playerMaxHP;
		battleMusic2.play();

		//adding textbox and continue arrow
		textbox = game.add.image(100, 420, "textbox");
		continueText = game.add.image(620, 530, "continueText");
		continueText.width = 45;
		continueText.height = 45;
		continueText.visible = false;

		//checking which enemy to spawn based on random number
		if (enemySpawnNumber == 1) {
			enemyName = "slime";
			enemyMinDamage = (enemyLevel * 2) + 18;
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
			progressSlime = false;
			progressSlimeCheck1 = false;
			progressSlimeCheck2 = false;
			progressSlimeCheck3 = false;
			progressLevelUp = false;
			progressLevelUp2 = false;
			progressLevelUp3 = false;
			playerSP = 0;

			//adding the slime into the game
			slime = game.add.sprite(250, 151, "slime");
			slime.width = 200;
			slime.height = 200;

			//slime animations
			slime.animations.add('battleIdle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8, true);
			slime.animations.add('attack', [10, 11, 12, 13, 14, 15], 9, false);
			slime.animations.play("battleIdle");
			slimeText1.start();

			//the animation for flamethrower
			flamethrower = game.add.sprite(300, 211, "fireball");
			flamethrower.visible = false;
			flamethrower.width = 90;
			flamethrower.height = 90;
			flamethrower.animations.add('fireball', [0, 1], 5, true);

			//tweens for when the slime dies
			slimeDeath = game.add.tween(slime).to( { alpha: 0 }, 1000, "Linear", false);
			enemyDeath = game.add.tween(enemyHPBar).to( { alpha: 0 }, 1000, "Linear", false);

			//the heart that shows which option is selected
			selector = game.add.image(110, 440, "selector");
			selector.width = 20;
			selector.height = 20;
			selector.visible = false;

			//calling the functions created in the load state
			right.onDown.add(highlightRight);
			left.onDown.add(highlightLeft);
			setTimeout(function(){
				continueText.visible = true;
				progressSlime = true;
			}, 3075);

			//adding animations from the spritesheet for when the player attacks
			fightAnimation = game.add.sprite(230, 151, "fightAnimation");
			fightAnimation.visible = false;
			fightAnimation.width = 300;
			fightAnimation.height = 300;
			fightAnimation.animations.add('fight', [0, 1, 2, 3], 7, false);

			z.onDown.add(function(){
				if (progressSlime) {
					ping.play();
					slimeText1.destroy();
					progressSlime = false;
					selector.x = 110;
					selector.y = 440;
					selector.visible = true;
					selector.x = 110;
					selector.y = 440;
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
						x: 345, 
						y: 210,
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
				else if (progressLevelUp) {
					ping.play();
					progressLevelUp = false;
					continueText.visible = false;
					playerLevelUpText.destroy();
					playerLevelUpText2.start();
					setTimeout(() => levelUpSound.play(), 1070);
					setTimeout(() => continueText.visible = true, 2070);
					setTimeout(() => progressLevelUp2 = true, 2070);
				}
				else if (progressLevelUp2) {
					ping.play();
					progressLevelUp2 = false;
					continueText.visible = false;
					playerLevelUpText2.destroy();
					playerLevelUpText3.start();
					setTimeout(() => continueText.visible = true, 2070);
					setTimeout(() => progressLevelUp3 = true, 2070)
				}
				else if (progressLevelUp3) {
					ping.play();
					playerLevelUpText3.destroy();
					progressLevelUp3 = false;
					continueText.visible = false;

					//checks what level the player is, and checks to see if they've unlocked something
					//Ex: Weapons, armour, spells
					if (playerLevel == 3) {
						stoneSword.start();
						setTimeout(function() {
							continueText.visible = true;
							progressStoneSword = true;
						}, 4580);
					}
					else if (playerLevel == 5) {
						leatherArmour.start();
						setTimeout(function() {
							continueText.visible = true;
							progressLeatherArmour = true;
						}, 4720);
					}
					else if (playerLevel == 9) {
						flamethrowerLearn.start();
						setTimeout(function() {
							continueText.visible = true;
							progressFlamethrower = true;
						}, 1430);
					}
					else if (playerLevel == 10) {
						finalSwordArmour.start();
						setTimeout(function() {
							continueText.visible = true;
							progressFinalSwordArmour = true;
						}, 5840);
					}
					else {
						game.camera.fade(0x000000, 1700, false);
						canMove = true;
						setTimeout(() => game.state.start("castleState"), 1700);
					};
				}
				else if (progressSlimeCheck1) {
					ping.play();
			    	progressSlimeCheck1 = false;
			    	checkEnemy.destroy();
			    	slimeCheckText.start();
			    	continueText.visible = false;
			    	setTimeout(() => continueText.visible = true, 1780);
					setTimeout(() => progressSlimeCheck2 = true, 1780);
				}
				else if (progressSlimeCheck2) {
					ping.play();
					progressSlimeCheck2 = false;
					slimeCheckText.destroy();
					slimeAttack();
					continueText.visible = false;
				}
				else if (progressSuccessRun) {
					ping.play();
			    	progressSuccessRun = false;
			    	continueText.visible = false;
			    	runSuccess.destroy();
			    	battleMusic2.stop();
			    	game.camera.fade(0x000000, 1700, false);
			    	canMove = true;
			    	setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressFailRun) {
					ping.play();
					progressFailRun = false;
			    	progressSuccessRun = false;
			    	continueText.visible = false;
			    	runFail.destroy();
			    	slimeAttack();
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
				else if (progressStoneSword) {
					ping.play();
					progressStoneSword = false;
					stoneSword.destroy();
					playerExtraDamage += 5;
					continueText.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressLeatherArmour) {
					ping.play();
					progressLeatherArmour = false;
					leatherArmour.destroy();
					playerDefense += 3;
					continueText.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressFlamethrower) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower = false;
					flamethrowerLearn.destroy();
					flamethrowerLearn2.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower2 = true;
					}, 4580)
				}
				else if (progressFlamethrower2) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower2 = false;
					flamethrowerLearn2.destroy();
					flamethrowerLearn3.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower3 = true;
					}, 3600);
				}
				else if (progressFlamethrower3) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower3 = false;
					flamethrowerLearn3.destroy();
					flamethrowerLearn4.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower4 = true;
					}, 3600);
				}
				else if (progressFlamethrower4) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower4 = false;
					flamethrowerLearn4.destroy();
					flamethrowerLearn5.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower5 = true;
					}, 1990);
				}
				else if (progressFlamethrower5) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower5 = false;
					flamethrowerLearn5.destroy();
					flamethrowerLearn6.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower6 = true;
					}, 7380);
				}
				else if (progressFlamethrower6) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower6 = false;
					flamethrowerLearn6.destroy();
					flamethrowerLearn7.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower7 = true;
					}, 9900);
				}
				else if (progressFlamethrower7) {
					continueText.visible = false;
					ping.play();
					haveSpells = true;
					haveFlamethrower = true;
					flamethrowerLearn7.destroy();
					selector.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
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
				else if (progressFinalSwordArmour) {
					ping.play();
					continueText.visible = false;
					progressFinalSwordArmour = false;
					finalSwordArmour.destroy();
					finalSwordArmour2.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFinalSwordArmour2 = true;
					}, 4370);
				}
				else if (progressFinalSwordArmour2) {
					ping.play();
					continueText.visible = false;
					progressFinalSwordArmour2 = false;
					finalSwordArmour2.destroy();
					auraMaxLevel.start();
					setTimeout(function() {
						continueText.visible = true;
						progressAuraMaxLevel = true;
					}, 3110);
					playerExtraDamage += 25;
					playerDefense += 20;
					canMove = false;
					maxLevel = true;
				};

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
						slime.animations.stop();
						slime.frame = 18;
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
							battleMusic2.stop();
							slime.animations.stop();
							slime.frame = 26;
							slimeDeath.start();
							playerLevel += 1;
							playerLevelUpText3.init(game, {
							  x: 120,
							  y: 435,
							  fontFamily: "textFontWhite",
							  time: 70,
						      fontSize: 20,
						      sound: textSound,
							  maxWidth: 500,
							  text: "You are now level " + playerLevel + "."
							});
							console.log("Player Level: " + playerLevel);
							setTimeout(() => enemyHPBar.kill(), 100);
							setTimeout(function(){
								playerLevelUpText.start();
							}, 300);
							setTimeout(function() {
								continueText.visible = true;
								progressLevelUp = true;
							}, 1550)
							console.log("You won!");
						}
						else {
							setTimeout(() => slimeAttack(), 1000);
							setTimeout(() => slime.animations.play("battleIdle"), 350);
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
									selectedOption = 1;
									continueText.visible = false;
									spellText = false;
									noSpellsText.destroy();
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
											slime.animations.stop();
											slime.frame = 18;
											selector.visible = false;
											flamethrowerLabel.visible = false;
											setTimeout(function() {
												flamethrower.visible = false;
												fireballSound.stop();
												if (enemyHP <= 0) {
													playerSPLabel.destroy();
													battleMusic2.stop();
													slime.animations.stop();
													slime.frame = 26;
													slimeDeath.start();
													playerLevel += 1;
													playerLevelUpText3.init(game, {
													  x: 120,
													  y: 435,
													  fontFamily: "textFontWhite",
													  time: 70,
												      fontSize: 20,
												      sound: textSound,
													  maxWidth: 500,
													  text: "You are now level " + playerLevel + "."
													});
													console.log("Player Level: " + playerLevel);
													setTimeout(() => enemyHPBar.kill(), 100);
													setTimeout(function(){
														playerLevelUpText.start();
													}, 300);
													setTimeout(function() {
														continueText.visible = true;
														progressLevelUp = true;
													}, 1550)
													console.log("You won!");
												}
												else {
													slime.animations.play("battleIdle");
													slimeAttack();
												};
											}, 1100);
										}
										else {
											ping.play();
											flamethrowerLabel.destroy();
											playerSPLabel.destroy();
											selector.visible = false;
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
						setTimeout(() => progressSlimeCheck1 = true, 3100);
						//console.log("You chose: " + optionSelected);

					}
					else if (selectedOption == 4) {
						optionSelected = "run";
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
						runChance = Math.round(1 + Math.random() * 9);
						if (runChance <= 2) {
							runSuccess.start();
							setTimeout(function() {
								progressSuccessRun = true;
								continueText.visible = true;
							}, 1920);
						}
						else {
							runFail.start();
							setTimeout(function() {
								progressFailRun = true;
								continueText.visible = true;
							}, 1710);
						}
					};
				};
			});
		}
		else if (enemySpawnNumber == 2) {
			enemyName = "adventurer";
			enemyMinDamage = (enemyLevel * 2) + 18;
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
			progressAdventurer = false;
			progressAdventurerCheck1 = false;
			progressAdventurerCheck2 = false;
			progressAdventurerCheck3 = false;
			progressLevelUp = false;
			progressLevelUp2 = false;
			progressLevelUp3 = false;
			playerSP = 0;

			//adding the slime into the game
			adventurer = game.add.sprite(250, 151, "adventurer");
			adventurer.width = 200;
			adventurer.height = 200;

			//adventurer animations
			adventurer.animations.add('battleIdle', [0, 1, 2, 3], 4, true);
			adventurer.animations.add('attack', [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], 8, false);
			adventurer.animations.play("battleIdle");
			adventurerText1.start();

			//the animation for flamethrower
			flamethrower = game.add.sprite(300, 211, "fireball");
			flamethrower.visible = false;
			flamethrower.width = 90;
			flamethrower.height = 90;
			flamethrower.animations.add('fireball', [0, 1], 5, true);
			flamethrower.animations.play("fireball");

			//tweens for when the adventurer dies
			adventurerDeath = game.add.tween(adventurer).to( { alpha: 0 }, 1000, "Linear", false);
			enemyDeath = game.add.tween(enemyHPBar).to( { alpha: 0 }, 1000, "Linear", false);

			//the heart that shows which option is selected
			selector = game.add.image(110, 440, "selector");
			selector.width = 20;
			selector.height = 20;
			selector.visible = false;

			//calling the functions created in the load state
			right.onDown.add(highlightRight);
			left.onDown.add(highlightLeft);
			setTimeout(function(){
				continueText.visible = true;
				progressAdventurer = true;
			}, 3740);

			//adding animations from the spritesheet for when the player attacks
			fightAnimation = game.add.sprite(230, 151, "fightAnimation");
			fightAnimation.visible = false;
			fightAnimation.width = 300;
			fightAnimation.height = 300;
			fightAnimation.animations.add('fight', [0, 1, 2, 3], 7, false);

			z.onDown.add(function(){
				if (progressAdventurer) {
					ping.play();
					adventurerText1.destroy();
					progressAdventurer = false;
					selector.x = 110;
					selector.y = 440;
					selector.visible = true;
					selector.x = 110;
					selector.y = 440;
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
						x: 345, 
						y: 170,
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
				else if (progressLevelUp) {
					ping.play();
					progressLevelUp = false;
					continueText.visible = false;
					playerLevelUpText.destroy();
					playerLevelUpText2.start();
					setTimeout(() => levelUpSound.play(), 1070);
					setTimeout(() => continueText.visible = true, 2070);
					setTimeout(() => progressLevelUp2 = true, 2070);
				}
				else if (progressLevelUp2) {
					ping.play();
					progressLevelUp2 = false;
					continueText.visible = false;
					playerLevelUpText2.destroy();
					playerLevelUpText3.start();
					setTimeout(() => continueText.visible = true, 2070);
					setTimeout(() => progressLevelUp3 = true, 2070)
				}
				else if (progressLevelUp3) {
					ping.play();
					playerLevelUpText3.destroy();
					progressLevelUp3 = false;
					continueText.visible = false;

					//checks what level the player is, and checks to see if they've unlocked something
					//Ex: Weapons, armour, spells
					if (playerLevel == 3) {
						stoneSword.start();
						setTimeout(function() {
							continueText.visible = true;
							progressStoneSword = true;
						}, 4580);
					}
					else if (playerLevel == 5) {
						leatherArmour.start();
						setTimeout(function() {
							continueText.visible = true;
							progressLeatherArmour = true;
						}, 4720);
					}
					else if (playerLevel == 9) {
						flamethrowerLearn.start();
						setTimeout(function() {
							continueText.visible = true;
							progressFlamethrower = true;
						}, 1430);
					}
					else if (playerLevel == 10) {
						finalSwordArmour.start();
						setTimeout(function() {
							continueText.visible = true;
							progressFinalSwordArmour = true;
						}, 5840);
					}
					else {
						game.camera.fade(0x000000, 1700, false);
						canMove = true;
						setTimeout(() => game.state.start("castleState"), 1700);
					};
				}
				else if (progressAdventurerCheck1) {
					ping.play();
			    	progressAdventurerCheck1 = false;
			    	checkEnemy.destroy();
			    	adventurerCheckText.start();
			    	continueText.visible = false;
			    	setTimeout(() => continueText.visible = true, 2970);
					setTimeout(() => progressAdventurerCheck2 = true, 2970);
				}
				else if (progressAdventurerCheck2) {
					ping.play();
					progressAdventurerCheck2 = false;
					adventurerCheckText.destroy();
					adventurerAttack();
					continueText.visible = false;
				}
				else if (progressSuccessRun) {
					ping.play();
			    	progressSuccessRun = false;
			    	continueText.visible = false;
			    	runSuccess.destroy();
			    	battleMusic2.stop();
			    	game.camera.fade(0x000000, 1700, false);
			    	canMove = true;
			    	setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressFailRun) {
					ping.play();
					progressFailRun = false;
			    	progressSuccessRun = false;
			    	continueText.visible = false;
			    	runFail.destroy();
			    	adventurerAttack();
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
				else if (spellText) {
					ping.play();
					continueText.visible = false;
					spellText = false;
					noSpellsText.destroy();
					selector.visible = true;
					selector.x = 110;
					selector.y = 440;
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
				else if (progressStoneSword) {
					ping.play();
					progressStoneSword = false;
					stoneSword.destroy();
					playerExtraDamage += 5;
					continueText.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressLeatherArmour) {
					ping.play();
					progressLeatherArmour = false;
					leatherArmour.destroy();
					playerDefense += 3;
					continueText.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressFlamethrower) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower = false;
					flamethrowerLearn.destroy();
					flamethrowerLearn2.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower2 = true;
					}, 4580)
				}
				else if (progressFlamethrower2) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower2 = false;
					flamethrowerLearn2.destroy();
					flamethrowerLearn3.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower3 = true;
					}, 3600);
				}
				else if (progressFlamethrower3) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower3 = false;
					flamethrowerLearn3.destroy();
					flamethrowerLearn4.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower4 = true;
					}, 3600);
				}
				else if (progressFlamethrower4) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower4 = false;
					flamethrowerLearn4.destroy();
					flamethrowerLearn5.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower5 = true;
					}, 1990);
				}
				else if (progressFlamethrower5) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower5 = false;
					flamethrowerLearn5.destroy();
					flamethrowerLearn6.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower6 = true;
					}, 7380);
				}
				else if (progressFlamethrower6) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower6 = false;
					flamethrowerLearn6.destroy();
					flamethrowerLearn7.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower7 = true;
					}, 9900);
				}
				else if (progressFlamethrower7) {
					continueText.visible = false;
					ping.play();
					haveSpells = true;
					haveFlamethrower = true;
					flamethrowerLearn7.destroy();
					selector.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
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
			    	auraMaxLevel4.destroy();
			    	textbox.visible = false;
			    	game.camera.fade(0x000000, 1700, false);
			    	setTimeout(() => game.state.start("castleTop"), 1700);
			    }
				else if (progressFinalSwordArmour) {
					ping.play();
					continueText.visible = false;
					progressFinalSwordArmour = false;
					finalSwordArmour.destroy();
					finalSwordArmour2.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFinalSwordArmour2 = true;
					}, 4370);
				}
				else if (progressFinalSwordArmour2) {
					ping.play();
					continueText.visible = false;
					progressFinalSwordArmour2 = false;
					finalSwordArmour2.destroy();
					auraMaxLevel.start();
					setTimeout(function() {
						continueText.visible = true;
						progressAuraMaxLevel = true;
					}, 3110);
					playerExtraDamage += 25;
					playerDefense += 20;
					canMove = false;
					maxLevel = true;
				}; 

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
						adventurer.animations.stop();
						adventurer.frame = 67;
						playerDamage = Math.round(playerMinDamage + Math.random() * 7);
						playerDamage += playerExtraDamage;
						enemyHP = enemyHP - playerDamage;
						setTimeout(() => playerDamageText = game.add.bitmapText(263, 153, "textFontRed", playerDamage, 60), 10);
						setTimeout(() => playerDamageText.visible = false, 350);
						enemyHealthPercent = Math.round((enemyHP / enemyMaxHP)*100);
						enemyHPBar.setPercent(enemyHealthPercent);
						playerSP += 3;
						playerSPLabel.destroy();
						playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
						setTimeout(() => fightAnimation.visible = false, 350);
						//console.log("You chose: " + optionSelected);
						if (enemyHP <= 0) {
							playerSPLabel.destroy();
							battleMusic2.stop();
							adventurer.animations.stop();
							adventurer.frame = 26;
							adventurerDeath.start();
							playerLevel += 1;
							playerLevelUpText3.init(game, {
							  x: 120,
							  y: 435,
							  fontFamily: "textFontWhite",
							  time: 70,
						      fontSize: 20,
						      sound: textSound,
							  maxWidth: 500,
							  text: "You are now level " + playerLevel + "."
							});
							console.log("Player Level: " + playerLevel);
							setTimeout(() => enemyHPBar.kill(), 100);
							setTimeout(function(){
								playerLevelUpText.start();
							}, 300);
							setTimeout(function() {
								continueText.visible = true;
								progressLevelUp = true;
							}, 1550)
							console.log("You won!");
						}
						else {
							setTimeout(() => adventurerAttack(), 1000);
							setTimeout(() => adventurer.animations.play("battleIdle"), 350);
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
									selectedOption = 1;
									continueText.visible = false;
									spellText = false;
									noSpellsText.destroy();
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
											slime.animations.stop();
											slime.frame = 18;
											selector.visible = false;
											flamethrowerLabel.visible = false;
											setTimeout(function() {
												flamethrower.visible = false;
												fireballSound.stop();
												if (enemyHP <= 0) {
													playerSPLabel.destroy();
													battleMusic2.stop();
													slime.animations.stop();
													slime.frame = 26;
													slimeDeath.start();
													playerLevel += 1;
													playerLevelUpText3.init(game, {
													  x: 120,
													  y: 435,
													  fontFamily: "textFontWhite",
													  time: 70,
												      fontSize: 20,
												      sound: textSound,
													  maxWidth: 500,
													  text: "You are now level " + playerLevel + "."
													});
													console.log("Player Level: " + playerLevel);
													setTimeout(() => enemyHPBar.kill(), 100);
													setTimeout(function(){
														playerLevelUpText.start();
													}, 300);
													setTimeout(function() {
														continueText.visible = true;
														progressLevelUp = true;
													}, 1550)
													console.log("You won!");
												}
												else {
													slime.animations.play("battleIdle");
													slimeAttack();
												};
											}, 1100);
										}
										else {
											ping.play();
											flamethrowerLabel.destroy();
											playerSPLabel.destroy();
											selector.visible = false;
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
						setTimeout(() => progressAdventurerCheck1 = true, 3100);
						//console.log("You chose: " + optionSelected);

					}
					else if (selectedOption == 4) {
						optionSelected = "run";
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
						runChance = Math.round(1 + Math.random() * 9);
						if (runChance <= 2) {
							runSuccess.start();
							setTimeout(function() {
								progressSuccessRun = true;
								continueText.visible = true;
							}, 1920);
						}
						else {
							runFail.start();
							setTimeout(function() {
								progressFailRun = true;
								continueText.visible = true;
							}, 1710);
						}
					};
				};
			});
		}
		else if (enemySpawnNumber == 3) {
			enemyName = "gladiator";
			enemyMinDamage = (enemyLevel * 2) + 18;
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
			progressGladiator = false;
			progressGladiatorCheck1 = false;
			progressGladiatorCheck2 = false;
			progressGladiatorCheck3 = false;
			progressLevelUp = false;
			progressLevelUp2 = false;
			progressLevelUp3 = false;
			playerSP = 0;


			//adding the slime into the game
			gladiator = game.add.sprite(250, 151, "gladiator");
			gladiator.width = 200;
			gladiator.height = 200;

			//gladiator animations
			gladiator.animations.add('battleIdle', [0, 1, 2, 3, 4], 4, true);
			gladiator.animations.add('attack', [16, 17, 18, 19, 20, 21], 7, false);
			gladiator.animations.play("battleIdle");
			gladiatorText1.start();

			//the animation for flamethrower
			flamethrower = game.add.sprite(300, 211, "fireball");
			flamethrower.visible = false;
			flamethrower.width = 90;
			flamethrower.height = 90;
			flamethrower.animations.add('fireball', [0, 1], 5, true);
			flamethrower.animations.play("fireball");

			//tweens for when the adventurer dies
			gladiatorDeath = game.add.tween(gladiator).to( { alpha: 0 }, 1000, "Linear", false);
			enemyDeath = game.add.tween(enemyHPBar).to( { alpha: 0 }, 1000, "Linear", false);

			//the heart that shows which option is selected
			selector = game.add.image(110, 440, "selector");
			selector.width = 20;
			selector.height = 20;
			selector.visible = false;

			//calling the functions created in the load state
			right.onDown.add(highlightRight);
			left.onDown.add(highlightLeft);
			setTimeout(function(){
				continueText.visible = true;
				progressGladiator = true;
			}, 2620);

			//adding animations from the spritesheet for when the player attacks
			fightAnimation = game.add.sprite(230, 151, "fightAnimation");
			fightAnimation.visible = false;
			fightAnimation.width = 300;
			fightAnimation.height = 300;
			fightAnimation.animations.add('fight', [0, 1, 2, 3], 7, false);

			z.onDown.add(function(){
				if (progressGladiator) {
					ping.play();
					gladiatorText1.destroy();
					progressGladiator = false;
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
						x: 345, 
						y: 170,
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
				else if (progressLevelUp) {
					ping.play();
					progressLevelUp = false;
					continueText.visible = false;
					playerLevelUpText.destroy();
					playerLevelUpText2.start();
					setTimeout(() => levelUpSound.play(), 1070);
					setTimeout(() => continueText.visible = true, 2070);
					setTimeout(() => progressLevelUp2 = true, 2070);
				}
				else if (progressLevelUp2) {
					ping.play();
					progressLevelUp2 = false;
					continueText.visible = false;
					playerLevelUpText2.destroy();
					playerLevelUpText3.start();
					setTimeout(() => continueText.visible = true, 2070);
					setTimeout(() => progressLevelUp3 = true, 2070)
				}
				else if (progressLevelUp3) {
					ping.play();
					playerLevelUpText3.destroy();
					progressLevelUp3 = false;
					continueText.visible = false;

					//checks what level the player is, and checks to see if they've unlocked something
					//Ex: Weapons, armour, spells
					if (playerLevel == 3) {
						stoneSword.start();
						setTimeout(function() {
							continueText.visible = true;
							progressStoneSword = true;
						}, 4580);
					}
					else if (playerLevel == 5) {
						leatherArmour.start();
						setTimeout(function() {
							continueText.visible = true;
							progressLeatherArmour = true;
						}, 4720);
					}
					else if (playerLevel == 9) {
						flamethrowerLearn.start();
						setTimeout(function() {
							continueText.visible = true;
							progressFlamethrower = true;
						}, 1430);
					}
					else if (playerLevel == 10) {
						finalSwordArmour.start();
						setTimeout(function() {
							continueText.visible = true;
							progressFinalSwordArmour = true;
						}, 5840);
					}
					else {
						game.camera.fade(0x000000, 1700, false);
						canMove = true;
						setTimeout(() => game.state.start("castleState"), 1700);
					};
				}
				else if (progressGladiatorCheck1) {
					ping.play();
			    	progressGladiatorCheck1 = false;
			    	checkEnemy.destroy();
			    	gladiatorCheckText.start();
			    	continueText.visible = false;
			    	setTimeout(() => continueText.visible = true, 1640);
					setTimeout(() => progressGladiatorCheck2 = true, 1640);
				}
				else if (progressGladiatorCheck2) {
					ping.play();
					progressGladiatorCheck2 = false;
					gladiatorCheckText.destroy();
					gladiatorAttack();
					continueText.visible = false;
				}
				else if (progressSuccessRun) {
					ping.play();
			    	progressSuccessRun = false;
			    	continueText.visible = false;
			    	runSuccess.destroy();
			    	battleMusic2.stop();
			    	game.camera.fade(0x000000, 1700, false);
			    	canMove = true;
			    	setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressFailRun) {
					ping.play();
					progressFailRun = false;
			    	progressSuccessRun = false;
			    	continueText.visible = false;
			    	runFail.destroy();
			    	gladiatorAttack();
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
				else if (progressStoneSword) {
					ping.play();
					progressStoneSword = false;
					stoneSword.destroy();
					playerExtraDamage += 5;
					continueText.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressLeatherArmour) {
					ping.play();
					progressLeatherArmour = false;
					leatherArmour.destroy();
					playerDefense += 3;
					continueText.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
				}
				else if (progressFlamethrower) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower = false;
					flamethrowerLearn.destroy();
					flamethrowerLearn2.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower2 = true;
					}, 4580)
				}
				else if (progressFlamethrower2) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower2 = false;
					flamethrowerLearn2.destroy();
					flamethrowerLearn3.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower3 = true;
					}, 3600);
				}
				else if (progressFlamethrower3) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower3 = false;
					flamethrowerLearn3.destroy();
					flamethrowerLearn4.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower4 = true;
					}, 3600);
				}
				else if (progressFlamethrower4) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower4 = false;
					flamethrowerLearn4.destroy();
					flamethrowerLearn5.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower5 = true;
					}, 1990);
				}
				else if (progressFlamethrower5) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower5 = false;
					flamethrowerLearn5.destroy();
					flamethrowerLearn6.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower6 = true;
					}, 7380);
				}
				else if (progressFlamethrower6) {
					continueText.visible = false;
					ping.play();
					progressFlamethrower6 = false;
					flamethrowerLearn6.destroy();
					flamethrowerLearn7.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFlamethrower7 = true;
					}, 9900);
				}
				else if (progressFlamethrower7) {
					continueText.visible = false;
					ping.play();
					haveSpells = true;
					haveFlamethrower = true;
					flamethrowerLearn7.destroy();
					selector.visible = false;
					game.camera.fade(0x000000, 1700, false);
					canMove = true;
					setTimeout(() => game.state.start("castleState"), 1700);
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
				else if (progressFinalSwordArmour) {
					ping.play();
					continueText.visible = false;
					progressFinalSwordArmour = false;
					finalSwordArmour.destroy();
					finalSwordArmour2.start();
					setTimeout(function() {
						continueText.visible = true;
						progressFinalSwordArmour2 = true;
					}, 4370);
				}
				else if (progressFinalSwordArmour2) {
					ping.play();
					continueText.visible = false;
					progressFinalSwordArmour2 = false;
					finalSwordArmour2.destroy();
					auraMaxLevel.start();
					setTimeout(function() {
						continueText.visible = true;
						progressAuraMaxLevel = true;
					}, 3110);
					playerExtraDamage += 25;
					playerDefense += 20;
					canMove = false;
					maxLevel = true;
				}; 

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
						gladiator.animations.stop();
						gladiator.frame = 34;
						playerDamage = Math.round(playerMinDamage + Math.random() * 7);
						playerDamage += playerExtraDamage;
						setTimeout(() => playerDamageText = game.add.bitmapText(263, 153, "textFontRed", playerDamage, 60), 10);
						setTimeout(() => playerDamageText.visible = false, 350);
						enemyHP = enemyHP - playerDamage;
						enemyHealthPercent = Math.round((enemyHP / enemyMaxHP)*100);
						enemyHPBar.setPercent(enemyHealthPercent);
						playerSP += 3;
						playerSPLabel.destroy();
						playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
						playerSPLabel.visible = false;
						setTimeout(() => fightAnimation.visible = false, 350);
						//console.log("You chose: " + optionSelected);
						if (enemyHP <= 0) {
							playerSPLabel.destroy();
							battleMusic2.stop();
							gladiator.animations.stop();
							gladiator.frame = 34;
							gladiatorDeath.start();
							playerLevel += 1;
							playerLevelUpText3.init(game, {
							  x: 120,
							  y: 435,
							  fontFamily: "textFontWhite",
							  time: 70,
						      fontSize: 20,
						      sound: textSound,
							  maxWidth: 500,
							  text: "You are now level " + playerLevel + "."
							});
							console.log("Player Level: " + playerLevel);
							setTimeout(() => enemyHPBar.kill(), 100);
							setTimeout(function(){
								playerLevelUpText.start();
							}, 300);
							setTimeout(function() {
								continueText.visible = true;
								progressLevelUp = true;
							}, 1550)
							console.log("You won!");
						}
						else {
							setTimeout(() => gladiatorAttack(), 1000);
							setTimeout(() => gladiator.animations.play("battleIdle"), 350);
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
											slime.animations.stop();
											slime.frame = 18;
											selector.visible = false;
											flamethrowerLabel.visible = false;
											setTimeout(function() {
												flamethrower.visible = false;
												fireballSound.stop();
												if (enemyHP <= 0) {
													playerSPLabel.destroy();
													battleMusic2.stop();
													slime.animations.stop();
													slime.frame = 26;
													slimeDeath.start();
													playerLevel += 1;
													playerLevelUpText3.init(game, {
													  x: 120,
													  y: 435,
													  fontFamily: "textFontWhite",
													  time: 70,
												      fontSize: 20,
												      sound: textSound,
													  maxWidth: 500,
													  text: "You are now level " + playerLevel + "."
													});
													console.log("Player Level: " + playerLevel);
													setTimeout(() => enemyHPBar.kill(), 100);
													setTimeout(function(){
														playerLevelUpText.start();
													}, 300);
													setTimeout(function() {
														continueText.visible = true;
														progressLevelUp = true;
													}, 1550)
													console.log("You won!");
												}
												else {
													slime.animations.play("battleIdle");
													slimeAttack();
												};
											}, 1100);
										}
										else {
											ping.play();
											flamethrowerLabel.destroy();
											playerSPLabel.destroy();
											selector.visible = false;
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
						setTimeout(() => progressGladiatorCheck1 = true, 3100);
						//console.log("You chose: " + optionSelected);

					}
					else if (selectedOption == 4) {
						optionSelected = "run";
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
						runChance = Math.round(1 + Math.random() * 9);
						if (runChance <= 2) {
							runSuccess.start();
							setTimeout(function() {
								progressSuccessRun = true;
								continueText.visible = true;
							}, 1920);
						}
						else {
							runFail.start();
							setTimeout(function() {
								progressFailRun = true;
								continueText.visible = true;
							}, 1710);
						}
					};
				};
			});
		};
	},

	update: function() {


	} //End of update
}
