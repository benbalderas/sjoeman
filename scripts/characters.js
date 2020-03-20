const characters = {
    p1: {
        waiting: {
            src: "assets/characters/p1-waiting.png",
            width: 200,
            height: 200
        },
        jump: {
            src: "assets/characters/p1-jump.png",
            width: 200,
            height: 200
        },
        attack: {
            src: "assets/characters/p1-jump.png",
            width: 200,
            height: 200
        }
    },
    p2: {
        waiting: {
            src: "assets/characters/p2-waiting.png",
            width: 200,
            height: 200
        },
        jump: {
            src: "assets/characters/p1-jump.png",
            width: 200,
            height: 200
        },
        attack: {
            src: "assets/characters/p1-jump.png",
            width: 200,
            height: 200
        }
    }

};

class Character {
    constructor(character, health, power, x, y, controller) {
        this.character = character;
        this.health = health;
        this.power = power;
        this.funkMeter = 0;
        this.x = x;
        this.y = y;
        this.controller = controller;
        this.canMove = false;
        this.width = 100;
        this.height = 100;
        this.image = new Image();
        this.image.src = this.character.waiting.src;
        this.sx = 0;
        this.sy = 0;
        this.sw = this.character.waiting.width;
        this.sh = this.character.waiting.height;
    }

    changeAction(action) {
        this.image.src = this.character[action].src;
    }

    draw() {
        if (this.sx > 5800) this.sx = 0;

        ctx.drawImage(
            this.image,
            this.sx,
            this.sy,
            this.sw,
            this.sh,
            this.x,
            this.y,
            this.width,
            this.height
        );
        if (frames % 1 === 0) this.sx += 200;
    }

    action(event) {
        if (event.keyCode === this.controller.keyLeft && this.x !== 0) {
            this.x -= 100;
            if (this.funkMeter !== 4) this.funkMeter++
        }
        if (event.keyCode === this.controller.keyUp && this.y !== 20) {
            this.y -= 100;
            if (this.funkMeter !== 4) this.funkMeter++
        }
        if (event.keyCode === this.controller.keyRight && this.x !== 700) {
            this.changeAction("jump");
            this.x += 100;
            if (this.funkMeter !== 4) this.funkMeter++
        }
        if (event.keyCode === this.controller.keyDown && this.y !== 420) {
            this.changeAction("waiting");
            this.y += 100;
            if (this.funkMeter !== 4) this.funkMeter++
        }
    }

    attack(receiver, event) {
        if (event.keyCode === this.controller.attack && this.funkMeter === 4) {
            // this.changeAction("attack");
            receiver.health -= this.power;
            this.funkMeter = 0;
        }
    }
}

const player1 = new Character(characters.p1, 4, 1, 0, 440, controls.controller1);
const player2 = new Character(characters.p2, 3, 2, 700, 40, controls.controller2);