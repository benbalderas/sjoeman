let timerOut = 120

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    bodvar.draw();
    timerOut--;

    if (timerOut <= 0) {
        console.log('move!');
        timerOut = 120;
    }

    if (timerId) {
        timerId = requestAnimationFrame(update);
    }
}

window.onload = () => {
    document.getElementById('start').onclick = () => {
        startGame();
    };

    function startGame() {
        addEventListener('keydown', event => {
            bodvar.move(event)
        })
        timerId = requestAnimationFrame(update);
    }
};

// const switchPlayers = () => {
//     disabilitar a jugador 1
//     activar jugador 2
// }