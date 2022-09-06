/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Loading State
	This is where all of the assets in the game are loaded
	and where a loading bar is displayed. */

//Initializing variables
let pressToStart = null;
let tryAgainYes = null;
let tryAgainNo = null;
let tryAgain = null;
let tryAgainYesFade = null;
let tryAgainNoFade = null;
let tryAgainFade = null;
let startSound = null;
let started = false;
let instructions = null;
let instructions2 = null;
let instructions3 = null;
let loadingBarBorder = null;
let loadingBarFill = null;
let loading = null;
let enter = null;
let right = null;
let left = null;
let down = null;
let up = null;
let z = null;
let windSound = null;
let auraText = null;
let textSound = null;
let swordSwing = null;
let dirtRun = null;
let battleMusic1 = null;
let battleMusic2 = null;
let fight = null;
let spell = null;
let item = null;
let run = null;
let background = null;
let startBackAnimation = null;
let mainTheme = null;
let title = null;
let fadeSound = null;
let startedEnter = false;
let songTimeout = null;
let player = null;
let moving = false;
let stationary = false;
let directionFacing = "down";
let cursors = null;
let map = null;
let groundLayer = null;
let treeLayer = null;
let wallLayer = null;
let bandit = null;
let alertBubble = null;
let aura = null;
let auraMoving = false;
let disabled = true;
let textbox = null;
let continueText = null;
let ping = null;
let fightFont = "textFontYellow";
let checkFont = "textFont";
let spellFont = "textFont";
let runFont = "textFont";
let selectedOption = 1;
let progressText = false;
let progressText1 = false;
let progressText2 = false;
let progressText3 = false;
let playerTurn = false;
let optionHighlighted = false;
let chosenOption = false;
let selectSound = null;
let battleChosen = true;
let choiceDisabled = false;
let updateTimeout = null;
let selector = null;
let selectorLocation = 110;
let optionSelected = null;
let playerLevel = 1;
let playerMaxHP = playerLevel * 20 + 99;
let playerHP = playerMaxHP;
let playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
let playerSP = 0;
let enemyLevel = playerLevel + 1;
let enemyMaxHP = enemyLevel * 15 + 99;
let enemyHP = enemyMaxHP;
let enemyHealthPercent = Math.round((enemyHP / enemyMaxHP)*100);
let enemyHPBar = null;
let HPBar = null;
let healthLabel = null;
let SPLabel = null;
let x = null;
let spellText = false;
let spellText2 = false;
let progressRun = false;
let fightAnimation = null;
let attackSound = null;
let banditDeath = null;
let slimeDeath = null;
let playerMinDamage = (playerLevel * 3) + 27;
let enemyMinDamage = (enemyLevel * 2) + 29;
let playerDamage = 0;
let playerDamageText = null;
let enemyDamage = 0;
let playerHitSound = null;
let enemyDamageText = null;
let gameOverText = null;
let enemyDeath = null;
let progressLevelUp = false;
let progressLevelUp2 = false;
let progressLevelUp3 = false;
let levelUpSound = null;
let currentState = null;
let gameOverMusic = null;
let selectorFade = null;
let gameOverOptionChosen = "";
let gameOverValue = false;
let progressAuraIntro1 = false;
let progressAuraIntro2 = false;
let progressAuraIntro3 = false;
let progressAuraIntro4 = false;
let progressAuraIntro5 = false;
let progressAuraIntro6 = false;
let progressAuraIntro7 = false;
let dirtWalkSound = null;
let mapOutsideCastle = null;
let outsideCastleGround = null;
let outsideCastleCrystals = null;
let outsideCastleBuilding = null;
let outsideCastleGargoyle = null;
let outsideCastleDetails = null;
let outsideCastleMusic = null;
let progressAuraCastle1 = false;
let progressAuraCastle2 = false;
let progressAuraCastle3 = false;
let progressAuraCastle4 = false;
let mapCastle = null;
let castleGround = null;
let castleWalls = null;
let castleEnemySpawn = null;
let castleDoor = null;
let palyerX = null;
let playerY = null;
let auraX = null;
let auraY = null;
let castleMusic = null;
let castleFirstTime = true;
let progressAura1 = false;
let progressAura2 = false;
let progressAura3 = false;
let progressAura4 = false;
let progressAura5 = false;
let progressAura6 = false;
let progressAura7 = false;
let progressAura8 = false;
let progressAura9 = false;
let progressAura10 = false;
let progressCastleText1 = false;
let progressCastleText2 = false;
let canMove = false;
let enemySpawnLayer = null;
let enemySpawnSprite = null;
let enemiesSpawning = false;
let enemySpawnChance = 0;
let enemySpawnNumber = 0;
let enemySpawnName = "";
let enemyFound = false;
let slime = null;
let progressSlime = false;
let progressSlimeCheck1 = false;
let progressSlimeCheck2 = false;
let enemyDefense = 0;
let auraFrame = 0;
let runChance = 0;
let progressSuccessRun = false;
let progressFailRun = false;
let adventurer = null;
let adventurerDeath = null;
let progressAdventurer = false;
let progressAdventurerCheck1 = false;
let progressAdventurerCheck2 = false;
let progressAdventurerCheck3 = false;
let adventurerCombo = 0;
let gladiator = null;
let progressGladiator = false;
let progressGladiatorCheck1 = false;
let progressGladiatorCheck2 = false;
let progressGladiatorCheck3 = false;
let gladiatorDeath = null;
let flamethrower = null;
let haveSpells = false;
let haveFlamethrower = false;
let flamethrowerLabel = null;
let selectedSpell = 1;
let chooseSpells = false;
let playerLevelLabel = null;
let fireBallDisappear = null;
let fireballSound = null;
let playerSPLabel = null;
let enemyName = "";
let progressNotEnoughSP = false;
let playerExtraDamage = 0;
let progressStoneSword = false;
let progressLeatherArmour = false;
let playerDefense = 0;
let progressFlamethrower = false;
let progressFlamethrower2 = false;
let progressFlamethrower3 = false;
let progressFlamethrower4 = false;
let progressFlamethrower5 = false;
let progressFlamethrower6 = false;
let progressFlamethrower7 = false;
let progressFinalSwordArmour = false;
let progressFinalSwordArmour2 = false;
let maxLevel = false;
let progressAuraMaxLevel = false;
let progressAuraMaxLevel2 = false;
let progressAuraMaxLevel3 = false;
let progressAuraMaxLevel4 = false;
let mapCastleTop = null;
let castleTopGround = null;
let castleTopWalls = null;
let gaurdian = null;
let castleTopMusic = null;
let progressAuraCastleTop = null;
let progressAuraCastleTop2 = null;
let progressAuraCastleTop3 = null;
let progressAuraCastleTop4 = null;
let progressAuraCastleTop5 = null;
let battleMusic3 = null;
let progressGuardianCheck1 = false;
let progressGuardianCheck2 = false;
let progressGuardianRun = false;
let progressGuardianDeath1 = false;
let theEndText = null;
let progressGuardianDeath = false;
let endingMusic = null;

//Variables for text
let guardianDeath1 = new Typewriter();
let guardianText1 = new Typewriter();
let guardianCheckText1 = new Typewriter();
let auraCastleTop = new Typewriter();
let auraCastleTop2 = new Typewriter();
let auraCastleTop3 = new Typewriter();
let auraCastleTop4 = new Typewriter();
let auraCastleTop5 = new Typewriter();
let auraMaxLevel = new Typewriter();
let auraMaxLevel2 = new Typewriter();
let auraMaxLevel3 = new Typewriter();
let auraMaxLevel4 = new Typewriter();
let finalSwordArmour = new Typewriter();
let finalSwordArmour2 = new Typewriter();
let notEnoughSP = new Typewriter();
let stoneSword = new Typewriter();
let leatherArmour = new Typewriter();
let flamethrowerLearn = new Typewriter();
let flamethrowerLearn2 = new Typewriter();
let flamethrowerLearn3 = new Typewriter();
let flamethrowerLearn4 = new Typewriter();
let flamethrowerLearn5 = new Typewriter();
let flamethrowerLearn6 = new Typewriter();
let flamethrowerLearn7 = new Typewriter();
let gladiatorCheckText = new Typewriter();
let gladiatorText1 = new Typewriter();
let adventurerCheckText = new Typewriter();
let adventurerText1 = new Typewriter();
let runFail = new Typewriter();
let runSuccess = new Typewriter();
let slimeCheckText = new Typewriter();
let slimeText1 = new Typewriter();
let castleText1 = new Typewriter();
let castleText2 = new Typewriter();
let auraCastle1 = new Typewriter();
let auraCastle2 = new Typewriter();
let auraCastle3 = new Typewriter();
let auraCastle4 = new Typewriter();
let auraCastle5 = new Typewriter();
let auraCastle6 = new Typewriter();
let auraCastle7 = new Typewriter();
let auraCastle8 = new Typewriter();
let auraCastle9 = new Typewriter();
let auraOutsideCastle1 = new Typewriter();
let auraOutsideCastle2 = new Typewriter();
let auraOutsideCastle3 = new Typewriter();
let auraOutsideCastle4 = new Typewriter();
let auraIntro7 = new Typewriter();
let auraIntro6 = new Typewriter();
let auraIntro5 = new Typewriter();
let auraIntro4 = new Typewriter();
let auraIntro3 = new Typewriter();
let auraIntro2 = new Typewriter();
let auraIntro1 = new Typewriter();
let playerLevelUpText = new Typewriter();
let playerLevelUpText2 = new Typewriter();
let playerLevelUpText3 = new Typewriter();
let noRun = new Typewriter();
let noSpellsText = new Typewriter();
let textForestDescribe = new Typewriter();
let textForestDescribe1 = new Typewriter();
let textForestDescribe2 = new Typewriter();
let helpAura1 = new Typewriter();
let helpAura2 = new Typewriter();
let helpAura3 = new Typewriter();
let banditText1 = new Typewriter();
let banditCheck = new Typewriter();
let checkEnemy = new Typewriter();
let banditCheckText = new Typewriter();


var loadState = {
	preload: function() {
		//loading bar
		loading = game.add.bitmapText(285, 260, 'textFont', 'Loading...', 60);

		loadingBarBorder = game.add.sprite(400, 390, 'loadBarBorder');
		loadingBarBorder.anchor.setTo(0.5);

		loadingBarFill = game.add.sprite(202, 375, 'loadBarFill');
		loadingBarBorder.anchor.setTo(0.5);
		game.load.setPreloadSprite(loadingBarFill);
		//loading bar ends

		//loading begins
		game.load.spritesheet('backgroundStart', 'assets/spriteSheets/startBackground.png', 800, 600, 119);
		game.load.spritesheet('gladiator', 'assets/spriteSheets/gladiator.png', 32, 32, 40);
		game.load.spritesheet('adventurer', 'assets/spriteSheets/adventurer.png', 50, 37, 109);
		game.load.spritesheet('slime', 'assets/spriteSheets/slime.png', 32, 25, 21);
		game.load.spritesheet('bandit', 'assets/spriteSheets/banditSpritesheet.png', 48, 48, 39);
		game.load.spritesheet('jeremy', 'assets/spriteSheets/jeremySpritesheet.png', 32, 32, 12);
		game.load.spritesheet('aura', 'assets/spriteSheets/marthaSpritesheet.png', 32, 32, 12);
		game.load.spritesheet('fireball', 'assets/spriteSheets/fireball.png', 256, 256, 2);
		game.load.spritesheet('guardian', 'assets/spriteSheets/guardian.png', 48, 48, 50);
		game.load.spritesheet('fightAnimation', 'assets/spriteSheets/attackAnimation.png', 540, 540, 4);
		game.load.audio('mainTheme', 'assets/audio/mainTheme.mp3');
		game.load.audio('fireballSound', 'assets/audio/fireballSound.mp3');
		game.load.audio('battleMusic1', 'assets/audio/battleMusic1.mp3');
		game.load.audio('battleMusic2', 'assets/audio/battleMusic2.mp3');
		game.load.audio('battleMusic3', 'assets/audio/battleMusic3.mp3');
		game.load.audio('gameOverMusic', 'assets/audio/gameOverMusic.mp3');
		game.load.audio('playerHitSound', 'assets/audio/playerHitSound.mp3');
		game.load.audio('castleMusic', 'assets/audio/castleMusic.mp3');
		game.load.image('title', 'assets/images/phantomRoad.png');
		game.load.image('selector', 'assets/images/selector.jpg');
		game.load.image('continueText', 'assets/images/downArrow.png');
		game.load.image('alertBubble', 'assets/images/alertBubble.png');
		game.load.image('HPBar', 'assets/images/HPBar.png');
		game.load.image('textbox', 'assets/images/dialogueBox.png');
		game.load.image('forest', 'assets/images/forestBackground.png');
		game.load.image('enemySpawnSprite', 'assets/images/enemySpawnSprite.png');
		game.load.image('forestLevel', 'assets/images/forestLevel.png');
		game.load.audio('dirtWalkSound', 'assets/audio/dirtWalkSound.mp3');
		game.load.audio('startSound', 'assets/audio/startSound.mp3');
		game.load.audio('castleTopMusic', 'assets/audio/castleTopMusic.mp3');
		game.load.audio('auraText', 'assets/audio/auraText.mp3');
		game.load.audio('dirtRun', 'assets/audio/dirtRun.mp3');
		game.load.audio('forestAura', 'assets/audio/forestAura.mp3');
		game.load.audio('windSounds', 'assets/audio/windSounds.mp3');
		game.load.audio('selectSound', 'assets/audio/selectSound.wav');
		game.load.audio('outsideCastleMusic', 'assets/audio/outsideCastleMusic.mp3');
		game.load.audio('endingMusic', 'assets/audio/endingMusic.mp3');//endingMusic
		game.load.audio('swordSwing', 'assets/audio/swordSwing.mp3');
		game.load.audio('fadeSound', 'assets/audio/fadeSound.mp3');
		game.load.audio('textSound', 'assets/audio/textSound.mp3');
		game.load.audio('attackSound', 'assets/audio/attackSound.mp3');
		game.load.audio('ping', 'assets/audio/pingSound.mp3');
		game.load.audio('levelUpSound', 'assets/audio/levelUpSound.mp3');
		game.load.tilemap('enemyAttack', 'assets/tilemaps/enemyAttack.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap('castleLevel', 'assets/tilemaps/castleLevel.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.tilemap('outsideCastle', 'assets/tilemaps/outsideCastle.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('castleTielset', 'assets/tilesets/castleTielset.png');
		game.load.image('ashlandsTileset', 'assets/tilesets/ashlandsTileset.png');
		game.load.image('darkDimensionTileset', 'assets/tilesets/darkDimensionTileset.png');
		game.load.bitmapFont('textFontRed', 'assets/fonts/bitmapFonts/textFontRed.png', 'assets/fonts/bitmapFonts/textFontRed.fnt');
		game.load.bitmapFont('textFontBlack', 'assets/fonts/bitmapFonts/textFontBlack.png', 'assets/fonts/bitmapFonts/textFontBlack.fnt');
		game.load.bitmapFont('textFontWhite', 'assets/fonts/bitmapFonts/textFontWhite.png', 'assets/fonts/bitmapFonts/textFontWhite.fnt');
		game.load.bitmapFont('textFontYellow', 'assets/fonts/bitmapFonts/textFontYellow.png', 'assets/fonts/bitmapFonts/textFontYellow.fnt');
		//loading ends
	}, //end of preload

		/* In the following function, we will load all our variables with their values. I.e. sprites, sounds, scores, lives, etc. */
	create: function() {
		//assinging audio to variables to they can be controled
		endingMusic = game.add.audio("endingMusic");
		battleMusic3 = game.add.audio("battleMusic3");
		battleMusic3.loop = true;
		castleTopMusic = game.add.audio("castleTopMusic");
		castleTopMusic.loop = true;
		fireballSound = game.add.audio("fireballSound");
		fadeSound = game.add.audio("fadeSound");
		mainTheme = game.add.audio("mainTheme");
		mainTheme.loop = true;
		castleMusic = game.add.audio("castleMusic");
		castleMusic.loop = true;
		outsideCastleMusic = game.add.audio("outsideCastleMusic");
		gameOverMusic = game.add.audio("gameOverMusic");
		dirtWalkSound = game.add.audio("dirtWalkSound");
		dirtWalkSound.loop = true;
		levelUpSound = game.add.audio("levelUpSound");
		playerHitSound = game.add.audio("playerHitSound");
		attackSound = game.add.audio("attackSound");
		selectSound = game.add.audio("selectSound");
		battleMusic1 = game.add.audio("battleMusic1");
		battleMusic2 = game.add.audio("battleMusic2");
		battleMusic1.loop = true;
		battleMusic2.loop = true;
		dirtRun = game.add.audio("dirtRun");
		dirtRun.loop = true;
		swordSwing = game.add.audio("swordSwing");
		ping = game.add.audio("ping");

		//Assigning key presses to variables so they can be used more easily
		down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		z = game.input.keyboard.addKey(Phaser.Keyboard.Z);
		x = game.input.keyboard.addKey(Phaser.Keyboard.X);
		windSound = game.add.audio("windSounds");
		auraText = game.add.audio("auraText");
		textSound = game.add.audio("textSound");
		forestAura = game.add.audio("forestAura");

		//assigning tweens (fading in/out/animtions) to variables so they can be started
		fireBallDisappear =  game.add.tween(flamethrower).to( { alpha: 0 }, 1000, "Linear", false);

		//Initializing typewriter variables to simulate letters appearing one by one
		//Uses Phaser - typewriter plugin
		textForestDescribe.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "It's dark... Very dark..."
		});
		textForestDescribe1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You're in a forest, and the trees are so thick that you can't even see the sky."
		});
		textForestDescribe2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You slowly get up off the ground..."
		});
		helpAura1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 80,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "???: Help!!"
		});
		helpAura2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 80,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "???: I found a sword on the ground, here take it!!"
		});
		helpAura3.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 80,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "*You received a wooden sword."
		});
		banditText1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 80,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "The bandit glares at you intensely..."
		});
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
		banditCheckText.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFontWhite",
		  time: 90,
	      fontSize: 20,
	      sound: textSound,
		  maxWidth: 500,
		  text: "He doesn't look like he's messing around..."
		});
		noSpellsText.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFontWhite",
		  time: 90,
	      fontSize: 20,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You don't have any spells to use. Please choose another option..."
		});
		noRun.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFontWhite",
		  time: 90,
	      fontSize: 20,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You can't run away from this battle!"
		});
		playerLevelUpText.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFontWhite",
		  time: 70,
	      fontSize: 20,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You defeated the enemy!"
		});
		playerLevelUpText2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFontWhite",
		  time: 70,
	      fontSize: 20,
	      sound: textSound,
		  maxWidth: 500,
		  text: "Your level went up by 1."
		});
		auraIntro1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "???: Thank you so much, I thought I was done for!"
		});
		auraIntro2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: My name is Aura, it's nice to meet you!"
		});
		auraIntro3.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "*She holds her hand out, and you two shake hands."
		});
		auraIntro4.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Welcome to the Underworld."
		});
		auraIntro5.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: You probably don't know this, but you're dead..."
		});
		auraIntro6.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: To get out of this place and move onto heaven, you have to defeat the guardian at the top of the grand castle."
		});
		auraIntro7.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Come on, I'll take you there. Follow me."
		});
		auraOutsideCastle1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Well, here we are."
		});
		auraOutsideCastle2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: I'm going to come with you."
		});
		auraOutsideCastle3.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: It's not like I have anything better to do!"
		});
		auraOutsideCastle4.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Are you ready? Let's go."
		});
		auraCastle1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Here's the inside of the castle."
		});
		auraCastle2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: It's not very large, or detailed, I wonder why?"
		});
		//Little joke making fun of the fact that no one in our group can draw
		castleText1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "*You know why... .-. "
		});
		auraCastle3.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Anyway, before you fight the guardian, you've gotta train."
		});
		auraCastle4.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: You see that giant red portion of the ground?"
		});
		auraCastle5.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Enemies will attack you whenever you're on top of that red area."
		});
		auraCastle6.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: The more enemies you defeat, the more powerful you will become."
		});
		auraCastle7.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Maybe if you defeat enough enemies, you might be able to learn some spells, or get new weapons and armour."
		});
		castleText2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "*You can defeat enemies to gain levels. As you level up, you will gain new weapons, learn new spells, and find better armour."
		});
		auraCastle8.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: I'll be waiting by that locked door. Don't worry I have a key."
		});
		auraCastle9.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: I'll call you once I think you're ready."
		});
		slimeText1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "The slime hops joyfully in the air."
		});
		slimeCheckText.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "It reminds you of jello."
		});
		runFail.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You failed to run away!"
		});
		runSuccess.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You successfully ran away!"
		});
		adventurerText1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "The man holds out his sword, ready to slice 'n dice."
		});
		adventurerCheckText.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You're nearly blinded by the man's sword."
		});
		gladiatorText1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "The gladiator looks really strong..."
		});
		gladiatorCheckText.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "His axe is very sharp."
		});
		notEnoughSP.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You don't have enough SP to use this spell."
		});
		stoneSword.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You found a stone sword on the ground. Your attack went up by 5!"
		});
		leatherArmour.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You found leather helmet on the ground. Your defense went up by 3!"
		});
		flamethrowerLearn.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You feel strange..."
		});
		flamethrowerLearn2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "Fire bursts out of your hands, and flames engulf you completely."
		});
		flamethrowerLearn3.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "The fire soon lets up, and you feel more powerful."
		});
		flamethrowerLearn4.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You learned a new spell! You learned Flamethrower!"
		});
		flamethrowerLearn5.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "To use spells, you need SP." 
		});
		flamethrowerLearn6.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "You gain 3 SP every time you attack an enemy with your weapon, and 5 SP every time an enemy attacks you." 
		});
		flamethrowerLearn7.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "The cost of each spell will be displayed on the spell menu, and you will lose the amount of SP that it costs to use the spell upon using it." 
		});
		finalSwordArmour.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "A dark black sword appears out of thin air along with a very shiny set of armour." 
		});
		finalSwordArmour2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "Your attack increased by 25 and your defense increased by 20."
		});
		auraMaxLevel.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Hey, looks like you're strong enough!"
		});
		auraMaxLevel2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: The guardian is waiting for us..." 
		});
		auraMaxLevel3.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Let's go..."
		});
		auraMaxLevel4.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "*You nod, and both you and Aura walk through the door."
		});
		auraCastleTop.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Well, here we are."
		});
		auraCastleTop2.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: There's the guardian, standing right in front of us."
		});
		auraCastleTop3.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: This is what you've been training for."
		});
		auraCastleTop4.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: You're ready right?"
		});
		auraCastleTop5.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: auraText,
		  maxWidth: 500,
		  text: "Aura: Let's go!"
		});
		guardianText1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "This is it..." 
		});
		guardianCheckText1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "It sends shivers down your spine."
		});
		guardianDeath1.init(game, {
		  x: 120,
		  y: 435,
		  fontFamily: "textFont",
		  time: 70,
	      fontSize: 30,
	      sound: textSound,
		  maxWidth: 500,
		  text: "Congratulations! You have defeated the guardian and finished Phantom Road: Unlimited!"
		});
		game.state.start('start');

	}, //end of create

	//The update function gets called for every frame of your game. It's where all the decision making and action takes place.
	update: function() {

	} //End of update
}
//functions that perform actions that can be called more than once
//Changes the position of the heart when selecting options in a fight
function highlightRight() {
	if (playerTurn) {
		if (!optionHighlighted) {
			selectedOption++;
			if (selectedOption >= 5) {
				selectedOption = 4;
			};
			if(selectedOption == 1) {
				selectSound.play();
				selector.x = 110;
			}
			else if (selectedOption == 2) {
				selectSound.play();
				selector.x = 250;
			}
			else if (selectedOption == 3) {
				selectSound.play();
				selector.x = 390;
			}
			else if (selectedOption == 4) {
				selectSound.play();
				selector.x = 540;
			};
		};
	};
}; //end of highlightRight
//Changes the position of the heart when selecting options in a fight
function highlightLeft() {
	if (playerTurn) {
		if (!optionHighlighted) {
			selectedOption -= 1;
			if (selectedOption <= 0) {
				selectedOption = 1;
			};
			if(selectedOption == 1) {
				selectSound.play();
				selector.x = 110;
			}
			else if (selectedOption == 2) {
				selectSound.play();
				selector.x = 250;
			}
			else if (selectedOption == 3) {
				selectSound.play();
				selector.x = 390;
			}
			else if (selectedOption == 4) {
				selectSound.play();
				selector.x = 540;
			};
		};
	};
}; //end of highlightLeft
//bandit attacking damage calculation and animation and sound playing
function banditAttack() {
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
	HPBar.visible = false;
	HPBar.setPercent(playerHealthPercent);
	HPBar.visible = true;
	enemyMinDamage = (enemyLevel * 2) + 18;
	enemyDamage = Math.round(enemyMinDamage + Math.random() * 4);
	enemyDamage = enemyDamage - playerDefense;
	playerHP = playerHP - enemyDamage;
	playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
	HPBar.setPercent(playerHealthPercent);
	healthLabel.visible = true;
	bandit.animations.play("attack");
	game.stage.backgroundColor = "#ff0000";
	playerHitSound.play();
	setTimeout(() => game.stage.backgroundColor = "#000000", 200)
	setTimeout(() => enemyDamageText = game.add.bitmapText(480, 496, "textFontRed", enemyDamage, 60), 10);
	setTimeout(() => enemyDamageText.visible = false, 350);

	if (playerHP <= 0) {
		HPBar.kill();
		enemyHPBar.kill();
		battleMusic1.pause();
		bandit.visible = false;
		game.camera.fade(0xff0000, 1700, false);
		currentState = "battleBandit";
		setTimeout(() => game.state.start("gameOver"), 1700);
		//console.log("Game Over!");
	}
	else {
		setTimeout(() => bandit.animations.play("battleIdle"), 1050);
		setTimeout(function() {
			playerTurn = true;
			optionHighlighted = false;
			selector.visible = true;
			fight.visible = true;
			spell.visible = true;
			check.visible = true;
			playerLevelLabel.visible = true;
			run.visible = true;
		}, 1050);
	};
}; //end of banditAttack

function slimeAttack() {
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
	HPBar.visible = false;
	HPBar.setPercent(playerHealthPercent);
	HPBar.visible = true;
	enemyMinDamage = (enemyLevel * 2) + 18;
	enemyDamage = Math.round(enemyMinDamage + Math.random() * 4);
	enemyDamage = enemyDamage - playerDefense;
	playerHP = playerHP - enemyDamage;
	playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
	HPBar.setPercent(playerHealthPercent);
	healthLabel.visible = true;
	slime.animations.play("attack");
	game.stage.backgroundColor = "#ff0000";
	playerHitSound.play();
	playerSP += 5;
	playerSPLabel.destroy();
	playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
	setTimeout(() => game.stage.backgroundColor = "#000000", 200)
	setTimeout(() => enemyDamageText = game.add.bitmapText(480, 496, "textFontRed", enemyDamage, 60), 10);
	setTimeout(() => enemyDamageText.visible = false, 350);

	if (playerHP <= 0) {
		healthLabel.visible = false;
		battleMusic2.stop();
		game.camera.fade(0xff0000, 1700, false);
		currentState = "battle";
		setTimeout(() => game.state.start("gameOver"), 1700);
		//console.log("Game Over!");
	}
	else {
		setTimeout(() => slime.animations.play("battleIdle"), 1050);
		setTimeout(function() {
			selectedOption = "1";
			playerTurn = true;
			optionHighlighted = false;
			selector.visible = true;
			fight.visible = true;
			spell.visible = true;
			check.visible = true;
			playerLevelLabel.visible = true;
			run.visible = true;
			selector.x = 110;
			selector.y = 440;
		}, 1050);
	};
}; //end of slimeAttack

function gladiatorAttack() {
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
	HPBar.visible = false;
	HPBar.setPercent(playerHealthPercent);
	HPBar.visible = true;
	enemyMinDamage = (enemyLevel * 2) + 18;
	enemyDamage = Math.round(enemyMinDamage + Math.random() * 4);
	enemyDamage = enemyDamage - playerDefense;
	playerHP = playerHP - enemyDamage;
	playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
	HPBar.setPercent(playerHealthPercent);
	healthLabel.visible = true;
	gladiator.animations.play("attack");
	game.stage.backgroundColor = "#ff0000";
	playerHitSound.play();
	playerSP += 5;
	playerSPLabel.destroy();
	playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
	setTimeout(() => game.stage.backgroundColor = "#000000", 200)
	setTimeout(() => enemyDamageText = game.add.bitmapText(480, 496, "textFontRed", enemyDamage, 60), 10);
	setTimeout(() => enemyDamageText.visible = false, 350);

	if (playerHP <= 0) {
		healthLabel.visible = false;
		battleMusic2.stop();
		game.camera.fade(0xff0000, 1700, false);
		currentState = "battle";
		setTimeout(() => game.state.start("gameOver"), 1700);
		//console.log("Game Over!");
	}
	else {
		setTimeout(() => gladiator.animations.play("battleIdle"), 1050);
		setTimeout(function() {
			playerTurn = true;
			optionHighlighted = false;
			selector.visible = true;
			fight.visible = true;
			spell.visible = true;
			check.visible = true;
			playerLevelLabel.visible = true;
			run.visible = true;
		}, 1050);
	};
}; //end of gladiatorAttack

function adventurerAttack() {
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
	HPBar.visible = false;
	healthLabel.visible = true;
	HPBar.visible = true;
	HPBar.setPercent(playerHealthPercent);
	enemyMinDamage = (enemyLevel * 2) + 18;
	enemyDamage = Math.round(enemyMinDamage + Math.random() * 4);
	enemyDamage = enemyDamage - playerDefense;
	adventurerCombo = Math.round(enemyDamage / 3);
	adventurer.animations.play("attack");
	playerHP = playerHP - adventurerCombo;
	playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
	HPBar.setPercent(playerHealthPercent);
	game.stage.backgroundColor = "#ff0000";
	playerHitSound.play();
	playerSP += 5;
	playerSPLabel.destroy();
	playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
	setTimeout(() => game.stage.backgroundColor = "#000000", 200)
	setTimeout(() => enemyDamageText = game.add.bitmapText(480, 496, "textFontRed", adventurerCombo, 60), 10);
	setTimeout(() => enemyDamageText.visible = false, 350);
	setTimeout(function() {
		playerHP = playerHP - adventurerCombo;
		playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
		HPBar.setPercent(playerHealthPercent);
		game.stage.backgroundColor = "#ff0000";
		playerHitSound.play();
		setTimeout(() => game.stage.backgroundColor = "#000000", 200)
		setTimeout(() => enemyDamageText = game.add.bitmapText(480, 496, "textFontRed", adventurerCombo, 60), 10);
		setTimeout(() => enemyDamageText.visible = false, 350);
	}, 500);
	setTimeout(function() {
		playerHP = playerHP - adventurerCombo;
		playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
		HPBar.setPercent(playerHealthPercent);
		game.stage.backgroundColor = "#ff0000";
		playerHitSound.play();
		setTimeout(() => game.stage.backgroundColor = "#000000", 200)
		setTimeout(() => enemyDamageText = game.add.bitmapText(480, 496, "textFontRed", adventurerCombo, 60), 10);
		setTimeout(() => enemyDamageText.visible = false, 350);
	}, 1000);

	if (playerHP <= 0) {
		healthLabel.visible = false;
		battleMusic2.stop();
		game.camera.fade(0xff0000, 1700, false);
		currentState = "battle";
		setTimeout(() => game.state.start("gameOver"), 1700);
		//console.log("Game Over!");
	}
	else {
		setTimeout(() => adventurer.animations.play("battleIdle"), 1050);
		setTimeout(function() {
			playerTurn = true;
			optionHighlighted = false;
			selector.visible = true;
			fight.visible = true;
			spell.visible = true;
			check.visible = true;
			playerLevelLabel.visible = true;
			run.visible = true;
		}, 1050);
	};
}; //end of adventurerAttack

function highlightDown() {
	if (gameOverOptionChosen != "No") {
		selectSound.play();
		gameOverOptionChosen = "No";
		selector.y = 420;
	};
}; //end of highlightDown

function highlightUp() {
	if (gameOverOptionChosen != "Yes") {
		selectSound.play();
		gameOverOptionChosen = "Yes";
		selector.y = 370;
	}; 
}; //end of highlightUp

function guardianAttack() {
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
	HPBar.visible = false;
	HPBar.setPercent(playerHealthPercent);
	HPBar.visible = true;
	enemyMinDamage = (enemyLevel * 2) + 18;
	enemyDamage = Math.round(enemyMinDamage + Math.random() * 4);
	enemyDamage = enemyDamage - playerDefense;
	guardian.animations.play("attack");
	healthLabel.visible = true;
	setTimeout(() => game.stage.backgroundColor = "#ff0000", 1200);
	setTimeout(() => playerHitSound.play(), 1200);
	setTimeout(function() {
		playerHP = playerHP - enemyDamage;
		playerHealthPercent = Math.round((playerHP / playerMaxHP)*100);
		HPBar.setPercent(playerHealthPercent);
	}, 1200);
	playerSP += 5;
	playerSPLabel.destroy();
	playerSPLabel = game.add.bitmapText(250, 525, "textFont", 'SP: ' + playerSP, 45);
	setTimeout(() => game.stage.backgroundColor = "#000000", 1400);
	setTimeout(() => enemyDamageText = game.add.bitmapText(480, 496, "textFontRed", enemyDamage, 60), 1200);
	setTimeout(() => enemyDamageText.visible = false, 1550);

	if (playerHP <= 0) {
		healthLabel.visible = false;
		battleMusic2.stop();
		game.camera.fade(0xff0000, 1700, false);
		currentState = "finalBoss";
		setTimeout(() => game.state.start("gameOver"), 1700);
		//console.log("Game Over!");
	}
	else {
		setTimeout(() => guardian.animations.play("battleIdle"), 1050);
		setTimeout(function() {
			selectedOption = 1;
			playerTurn = true;
			optionHighlighted = false;
			selector.x = 110;
			selector.y = 440;
			selector.visible = true;
			fight.visible = true;
			spell.visible = true;
			check.visible = true;
			playerLevelLabel.visible = true;
			run.visible = true;
		}, 1050);
	};
}; //end of gladiatorAttack

