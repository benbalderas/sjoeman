const buildScenario = () => {
    let x = 0;
    let y = 0;

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



document.getElementById('start').addEventListener('click', function () {
    body.style.background = "#FFF";
    container.style.display = "none";
    canvas.style.display = 'block'

    buildScenario();
    bodvar.draw();
})