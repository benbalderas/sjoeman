const characters = {
    bodvar: {
        waiting: {
            src: "assets/bodvar-waiting.png",
            width: 200,
            height: 200
        },
        jump: {
            src: "assets/bodvar-jump.png",
            width: 200,
            height: 200
        },
        attack: {
            src: "assets/bodvar-jump.png",
            width: 200,
            height: 200
        }
    },
    sigrun: {
        waiting: {
            src: "assets/sigrun-waiting.png",
            width: 200,
            height: 200
        },
        jump: {
            src: "assets/bodvar-jump.png",
            width: 200,
            height: 200
        },
        attack: {
            src: "assets/bodvar-jump.png",
            width: 200,
            height: 200
        }
    }

};

class Character {
    constructor(character, life, power, range, x, y, controller) {
        this.character = character;
        this.life = life;
        this.attack = power;
        this.range = range;
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
        // TODO
        // change the sx,sy,sw,sh attributes
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

    stepOn(square) {
        const toleranceWidth = this.width - 10
        const toleranceHeight = this.width - 10

        if (this.x < square.x + square.width &&
            this.x + toleranceWidth > obstacle.x &&
            this.y < square.y + square.height &&
            this.y + toleranceHeight > square.y) {
            return true
        }
    }

    move(event) {
        // this.changeAction(jump);
        // TODO: Make voice dynamic depending on character
        // bodvar_jump.play()

        if (event.keyCode === this.controller.keyLeft && this.x !== 0) {
            this.x -= 100;
        }
        if (event.keyCode === this.controller.keyUp && this.y !== 20) {
            this.y -= 100;
        }
        if (event.keyCode === this.controller.keyRight && this.x !== 700) {
            this.x += 100
        }
        if (event.keyCode === this.controller.keyDown && this.y !== 420) {
            this.y += 100;
        }
    }

    attack() {
        // this.changeAction(attack);
        return this.power;
    }
}

const player1 = new Character(characters.bodvar, 8, 8, 1, 0, 420, controls.controller1);
const player2 = new Character(characters.sigrun, 4, 4, 8, 700, 20, controls.controller2);