
/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Bandit Battle
	This is the first batttle of the game. */

var battleBandit = {
	create: function() {
		//setting all of the variables and adding them to the game
		currentState = "battleBandit";
		enemyLevel = playerLevel + 1;
		enemyMinDamage = (enemyLevel * 2) + 29;
		enemyMaxHP = enemyLevel * 15 + 90;
		enemyHP = enemyMaxHP
		playerMaxHP = playerLevel * 20 + 99;
		playerHP = playerMaxHP;
		textbox = game.add.image(100, 420, "textbox");
		banditText1.start();
		battleMusic1.loop = true;
		battleMusic1.play();

		//adding the bandit into the game
		bandit = game.add.sprite(250, 151, "bandit");
		bandit.width = 220;
		bandit.height = 220;

		//loading its animations from a spritesheet
		bandit.animations.add('battleIdle', [4, 5, 6, 7], 5, true);
		bandit.animations.add('attack', [19, 20, 21, 22, 23], 9, false);
		bandit.animations.play("battleIdle");
		banditDeath = game.add.tween(bandit).to( { alpha: 0 }, 1000, "Linear", false);
		enemyDeath = game.add.tween(enemyHPBar).to( { alpha: 0 }, 1000, "Linear", false);
		continueText = game.add.image(620, 530, "continueText");
		continueText.width = 45;
		continueText.height = 45;
		continueText.visible = false;

		//the heart that shows which option is selected
		selector = game.add.image(110, 440, "selector");
		selector.width = 20;
		selector.height = 20;
		selector.visible = false;
		setTimeout(() => continueText.visible = true, 3000);
		setTimeout(() => progressText = true, 3000);

		//calling the functions created in the load state
		right.onDown.add(highlightRight);
		left.onDown.add(highlightLeft);

		//adding animations from the spritesheet for when the player attacks
		fightAnimation = game.add.sprite(230, 151, "fightAnimation");
		fightAnimation.visible = false;
		fightAnimation.width = 300;
		fightAnimation.height = 300;
		fightAnimation.animations.add('fight', [0, 1, 2, 3], 7, false);
		
		//fightAnimation.animations.play("fight");
		//checks for a Z press, then checks if it should do anything (progress text, select option, etc).
		z.onDown.add(function(){
		    if (progressText) {
		    	ping.play();
		    	battle = true;
		    	progressText = false;
		    	banditText1.destroy();
		    	continueText.visible = false;
		    	selector.visible = true;
		    	fight = game.add.bitmapText(130, 435, "textFont", 'Fight', 50);
				spell = game.add.bitmapText(270, 435, "textFont", 'Spell', 50);
				check = game.add.bitmapText(410, 435, "textFont", 'Check', 50);
				run = game.add.bitmapText(560, 435, "textFont", 'Run', 50);
				healthLabel = game.add.bitmapText(140, 480, "textFont", 'HP:', 50);
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
					x: 370, 
					y: 180,
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
			else if (progressText2) {
		    	ping.play();
		    	progressText2 = false;
		    	banditCheck.destroy();
		    	continueText.visible = false;
		    	banditCheckText.start();
		    	setTimeout(() => continueText.visible = true, 3620);
				setTimeout(() => progressText3 = true, 3620);
			}
			else if (progressText3) {
				ping.play();
		    	progressText3 = false;
		    	banditCheckText.destroy();
		    	continueText.visible = false;
				setTimeout(banditAttack(), 400);
			}
			else if (spellText) {
				ping.play();
				continueText.visible = false;
				spellText = false;
				noSpellsText.destroy();
				selector.visible = true;
				fight.visible = true;
				spell.visible = true;
				check.visible = true;
				run.visible = true;
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
			else if (progressRun) {
				ping.play();
				continueText.visible = false;
				progressRun = false;
				noRun.destroy();
				selector.visible = true;
				fight.visible = true;
				spell.visible = true;
				check.visible = true;
				run.visible = true;
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
				game.camera.fade(0x000000, 1700, false);
				setTimeout(() => game.state.start("auraIntroduction"), 1700);
			}
		});
		//x.onDown.add(function(){
			//debugging
			//for debugging, was used to check if the health bar plugin worked by manually deceasing player's HP
			/* if(x) {
				playerHP = playerHP - 50;
				playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
				HPBar.setPercent(playerHealthPercent);
			}; */
		//}); 
		/*checks if Z is pressed, then checks if player is selecting options, then checks what option selected, 
		then performs actions based on option selected */
		z.onDown.add(function() {
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
					HPBar.kill();
					fightAnimation.visible = true;
					fightAnimation.animations.play("fight");
					attackSound.play();
					bandit.animations.stop();
					bandit.frame = 32;
					setTimeout(() => playerDamageText = game.add.bitmapText(263, 153, "textFontRed", playerDamage, 60), 10);
					setTimeout(() => playerDamageText.visible = false, 350);
					playerMinDamage = (playerLevel * 3) + 27;
					playerDamage = Math.round(playerMinDamage + Math.random() * 7);
					enemyHP = enemyHP - playerDamage;
					enemyHealthPercent = Math.round((enemyHP / enemyMaxHP)*100);
					enemyHPBar.setPercent(enemyHealthPercent);
					setTimeout(() => fightAnimation.visible = false, 350);
					//console.log("You chose: " + optionSelected);
					if (enemyHP <= 0) {
						battleMusic1.stop();
						bandit.animations.stop();
						bandit.frame = 26;
						banditDeath.start();
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
						setTimeout(() => banditAttack(), 1000);
						setTimeout(() => bandit.animations.play("battleIdle"), 350);
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
					noSpellsText.start();
					setTimeout(() => continueText.visible = true, 6170);
					setTimeout(() => spellText = true, 6170);
					//console.log("You chose: " + optionSelected);

				}
				else if (selectedOption == 3) {
					optionSelected = "check";
					selector.visible = false;
					playerTurn = false;
					HPBar.kill();
					healthLabel.visible = false;
					fight.visible = false;
					spell.visible = false;
					check.visible = false;
					run.visible = false;
					banditCheck.init(game, {
					  x: 120,
					  y: 435,
					  fontFamily: "textFontWhite",
					  time: 90,
				      fontSize: 30,
				      sound: textSound,
					  maxWidth: 500,
					  text: "Attack: " + enemyMinDamage + "               Defense: " + enemyDefense
					});
					banditCheck.start();
					setTimeout(() => continueText.visible = true, 3100);
					setTimeout(() => progressText2 = true, 3100);
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
					noRun.start();
					setTimeout(() => continueText.visible = true, 3100);
					setTimeout(() => progressRun = true, 3100);
					//console.log("You chose: " + optionSelected);
				}
				else {
					//debugging
					console.log("Error: Invalid option... Selection Option is " + selectedOption);
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