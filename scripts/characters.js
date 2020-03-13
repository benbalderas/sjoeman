class Character {
    constructor(name, life, power, range, x, y) {
        this.canMove = false;
        this.name = name;
        this.life = life;
        this.attack = power;
        this.range = range;
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 90;
        this.img = new Image();
        this.img.src = 'assets/test-bodvar.png';
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    move(event) {
        const keyLeft = 37;
        const keyUp = 38;
        const keyRight = 39;
        const keyDown = 40;

        if (event.keyCode === keyLeft && this.x !== 12) this.x -= 100
        if (event.keyCode === keyUp && this.y !== 25) this.y -= 100
        if (event.keyCode === keyRight && this.x !== 712) this.x += 100
        if (event.keyCode === keyDown && this.y !== 425) this.y += 100
    }

    attack() {
        return this.power;
    }
}

const bodvar = new Character("Bödvar", 8, 8, 1, 12, 425);