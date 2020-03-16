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

canvas.width = 1600;
canvas.height = 1200;
canvas.style.width = "800px";
canvas.style.height = "600px";
canvas.style.display = 'none';
ctx.scale(2, 2);

// Theme
const color_orange = "#FB5A00";
const color_beige = "#EEEBE7";
const color_beige_dark = "#E1DFDD";

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

// Draw action bar

const buildActionBar = (width) => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 136, 24);

    ctx.fillStyle = color_beige;
    ctx.fillRect(8, 8, 120, 8);

    ctx.fillStyle = color_orange;
    ctx.fillRect(8, 8, width, 8);
}