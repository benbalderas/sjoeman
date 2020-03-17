const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const body = document.querySelector('body');
const container = document.getElementById('intro');

let timerId;
let frames = 0;

const controls = {
    controller1: {
        keyLeft: 65,
        keyUp: 87,
        keyRight: 68,
        keyDown: 83,
        attack: 18
    },

    controller2: {
        keyLeft: 37,
        keyUp: 38,
        keyRight: 39,
        keyDown: 40,
        attack: 70
    }
}

// Audio
const soundtrack_battle = new Audio('assets/battle.mp3');
soundtrack_battle.loop = true;
const bodvar_jump = new Audio('assets/bodvar-jump.mp3');

// Retina Canvas
canvas.width = 1600;
canvas.height = 1200;
canvas.style.width = "800px";
canvas.style.height = "600px";
canvas.style.display = 'none';
ctx.scale(2, 2);

// Theme
const color_primary = "#8b12ce";
const color_secondary = "#ea5665";
const color_beige = "#EEEBE7";
const color_beige_dark = "#E1DFDD";

// Draw board
const scenario = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

const buildScenario = () => {
    let x = 0;
    let y = 32;

    body.style.background = "#FFF";
    container.style.display = "none";
    canvas.style.display = 'block';

    ctx.fillStyle = color_beige;

    for (let i = 0; i < scenario.length; i++) {
        for (let j = 0; j < scenario[i].length; j++) {
            ctx.fillRect(x, y, 90, 90)
            x += 100
        }
        x = 0
        y += 100
    }
}

const graphics = {
    base: "assets/base.png",
    background: "assets/background.png",
    rock1: "assets/rock-1.png",
    rock2: "assets/rock-2.png",
    rock3: "assets/rock-3.png",
}

class Graphic {
    constructor(graphic, x, y, width, height) {
        this.image = new Image();
        this.image.src = graphic;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

const base = new Graphic(graphics.base, 0, 482, 800, 40);
const background = new Graphic(graphics.background, 0, 64, 790, 394);
const rock1 = new Graphic(graphics.rock1, 200, 371, 90, 51);
const rock2 = new Graphic(graphics.rock2, 300, 65, 90, 57);
const rock3 = new Graphic(graphics.rock3, 599, 162, 90, 59);

// Draw action bar
const buildActionBar = (width, x, color) => {
    ctx.fillStyle = "#c4c4c4";
    ctx.fillRect(x + 8, 8, 120, 8);

    ctx.fillStyle = color;
    ctx.fillRect(x + 8, 8, width, 8);
}