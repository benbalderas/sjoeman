class Character {
    constructor(name, life, attack, range, x, y) {
        this.name = name;
        this.life = life;
        this.attack = attack;
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

    move() {

    }

    attack() {

    }
}

const bodvar = new Character("Bödvar", 8, 8, 1, 212, 395)