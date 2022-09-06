/* Jason Su, Danny Lin, Justin Lieu
	01/22/2019
	Main Javascript File
	This is the main javascript file that adds all the states 
	to the game and runs the boot state. */

let game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

//Here, the states of the game are added
game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("start", startState);
game.state.add("controls", controlsState);
game.state.add("menu", menuState);
game.state.add("prologue", prologueState);
game.state.add("forest", forestState);
game.state.add("battleBandit", battleBandit);
game.state.add("forestRoam", forestRoamState);
game.state.add("auraIntroduction", auraIntroductionState);
game.state.add("outsideCastle", outsideCastle);
game.state.add("castleState", castleState);
game.state.add("battle", battleState);
game.state.add("castleTop", castleTop);
game.state.add("finalBoss", finalBoss);
game.state.add("theEnd", theEnd);
game.state.add("gameOver", gameOver);

//Start the first state, which is boot
game.state.start("boot");
