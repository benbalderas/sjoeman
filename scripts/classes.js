class Character {
    constructor(name, life, attack, range) {
        this.name = name
        this.life = life
        this.attack = attack
        this.range = range
    }

    draw() {

    }

    move() {

    }

    attack() {

    }
}

const bodvar = new Character("Bödvar", 8, 8, 1)
const sigrun = new Character("Sigrun", 4, 4, 4)
const loki = new Character("Loki", 2, 2, 8)

console.log(loki)