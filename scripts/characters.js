const velY = 0;
const velX = 0;
const speed = 1;
const friction = 0.75;

const sprites = {
    waiting: {
        src: "assets/character-1.png",
        width: 200,
        height: 200
    },
    jump: {
        src: "assets/character-1-jump.png",
        width: 200,
        height: 200
    }
};

class Character {
    constructor(name, life, power, range, x, y) {
        this.canMove = false;
        this.name = name;
        this.life = life;
        this.attack = power;
        this.range = range;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.image = new Image();
        this.image.src = sprites.waiting.src;
        this.sx = 0;
        this.sy = 0;
        this.sw = sprites.waiting.width;
        this.sh = sprites.waiting.height;
    }

    changeAction(action) {
        this.image.src = sprites[action].src;
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

    move(event) {
        const keyLeft = 37;
        const keyUp = 38;
        const keyRight = 39;
        const keyDown = 40;

        // this.changeAction("jump");

        if (event.keyCode === keyLeft && this.x !== 0) {
            this.x -= 100;
        }
        if (event.keyCode === keyUp && this.y !== 20) {
            this.y -= 100;
        }
        if (event.keyCode === keyRight && this.x !== 700) {
            this.x += 100;
        }
        if (event.keyCode === keyDown && this.y !== 420) {
            this.y += 100;
        }
    }

    attack() {
        return this.power;
    }
}

const bodvar = new Character("Bödvar", 8, 8, 1, 0, 420);