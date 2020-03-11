ctx.fillStyle = "#EEEEEE"

const buildScenario = () => {
    let x = 0
    let y = 0

    for (row in scenario) {
        // switch (scenario.indexOf(scenario[row])) {
        //     case 0:
        //         ctx.fillRect(x, 0, 90, 90)
        //         break;

        // }
        // x += 100
        console.log(scenario[0])
    }
}



document.getElementById('start').addEventListener('click', function () {
    body.style.background = "#FFF";
    container.style.display = "none";
    canvas.style.display = 'block'

    buildScenario();
})