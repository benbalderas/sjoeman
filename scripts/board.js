const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const body = document.querySelector('body');
const container = document.getElementById('intro');
let timerId;

canvas.width = 1600;
canvas.height = 1200;
canvas.style.width = "800px";
canvas.style.height = "600px";
canvas.style.display = 'none';
ctx.scale(2, 2);

// Theme
const color_orange_0 = "#F6F4F2";

const scenario = [
    [0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0]
];

const buildScenario = () => {
    let x = 0;
    let y = 0;

    body.style.background = "#FFF";
    container.style.display = "none";
    canvas.style.display = 'block';

    ctx.fillStyle = color_orange_0;

    for (let i = 0; i < scenario.length; i++) {
        for (let j = 0; j < scenario[i].length; j++) {
            ctx.fillRect(x, y, 90, 90)
            x += 100
        }
        x = 0
        y += 100
    }
}