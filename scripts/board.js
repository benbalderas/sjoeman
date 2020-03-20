const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const body = document.querySelector('body');
const container = document.getElementById('intro');
const header = document.getElementById('player-names');

let timerId;
let frames = 0;

const controls = {
    controller1: {
        keyLeft: 65,
        keyUp: 87,
        keyRight: 68,
        keyDown: 83,
        attack: 70
    },

    controller2: {
        keyLeft: 37,
        keyUp: 38,
        keyRight: 39,
        keyDown: 40,
        attack: 18
    }
}

// Audio
const soundtrack_battle = new Audio('assets/audio/battle.ogg');

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
const color_beige = "#EFF3F3";
const color_beige_dark = "#E1DFDD";
const cornerRadius = 10;

// Draw board
const scenario = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

const buildScenario = () => {
    let x = 8;
    let y = 63;

    body.style.background = "#FFF";
    container.style.display = "none";
    canvas.style.display = 'block';
    header.style.opacity = '1';

    ctx.fillStyle = color_beige;

    for (let i = 0; i < scenario.length; i++) {
        for (let j = 0; j < scenario[i].length; j++) {
            ctx.fillRect(x, y, 91, 91);
            x += 100
        }
        x = 8;
        y += 99;
    }
}

const graphics = {
    base: "assets/board/base.png",
    background: "assets/board/background.png",
    rock1: "assets/board/rock-1.png",
    rock2: "assets/board/rock-2.png",
    rock3: "assets/board/rock-3.png",
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

const base = new Graphic(graphics.base, 8, 510, 800, 40);
const background = new Graphic(graphics.background, 8, 97, 790, 394);
const rock1 = new Graphic(graphics.rock1, 208, 400, 90, 51);
const rock2 = new Graphic(graphics.rock2, 308, 97, 90, 57);
const rock3 = new Graphic(graphics.rock3, 607, 194, 90, 59);

// Draw action bar
const buildActionBar = (width, x, color) => {
    ctx.fillStyle = "#C1CACA";
    ctx.fillRect(x, 40, 120, 3);

    ctx.fillStyle = color;
    ctx.fillRect(x, 40, width, 3);
}

const buildHealth = (x, health) => {
    const image = new Image();
    image.src = "assets/board/lyfe.png";

    for (let i = 0; i < health; i++) {
        ctx.drawImage(image, x, 8, 18, 15);
        x += 22;
    }
}

const buildFunkMeter = (x, funkAmount) => {
    ctx.fillStyle = "#C1CACA";
    ctx.fillRect(x, 40, 96, 3);

    if (funkAmount < 4) {
        ctx.fillStyle = "#000000";
    } else {
        ctx.fillStyle = "#9F17EA";
    }
    ctx.fillRect(x, 40, funkAmount * 24, 3);
}