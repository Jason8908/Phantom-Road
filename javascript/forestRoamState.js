var forestRoamState = {
	create: function() {
		//game.physics.p2.enable(player);
		//player.body.fixedRotation = true;
		//cursors = game.input.keyboard.createCursorKeys();
	},
	update: function() {
		/*if (player.overlap(treeLayer)) {
			player.body.velocity.x = 0;
		}; */
		player.body.setZeroVelocity();
		if (cursors.up.isDown) {
			if (!moving) {
				moving = true;
				player.animations.play("up");
			}
	        player.body.moveUp(100);
	    } 
	    else if (cursors.down.isDown) {
	    	if (!moving) {
				moving = true;
				player.animations.play("down");
			}
	        player.body.moveDown(100);
	    }

	    if (cursors.left.isDown) {
	    	if (!moving) {
				moving = true;
				player.animations.play("left");
			}
	        player.body.velocity.x = -100;
	    }
	    else if (cursors.right.isDown) {
	    	if (!moving) {
				moving = true;
				player.animations.play("right");
			}
	        player.body.moveRight(100);
	    }
	    if (cursors.up.onUp) {
	    	if (moving) {
		    	player.animations.stop();
		    	player.frame = 1;
		        moving = false;
		    };
	    } 
	    else if (cursors.down.onUp) {
	    	if (moving) {
		    	player.animations.stop();
		    	player.frame = 1;
		        moving = false;
		    };
	    }

	    if (cursors.left.onUp) {
	    	if (moving) {
		    	player.animations.stop();
		    	player.frame = 1;
		        moving = false;
		    };
	    }
	    else if (cursors.right.onUp) {
	    	if (moving) {
		    	player.animations.stop();
		    	player.frame = 1;
		    	moving = false;
		    };
	    }
	}
}