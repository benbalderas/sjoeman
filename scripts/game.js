let timerOut = 120;
const soundtrack_battle = new Audio('assets/for-battle.mp3');

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    buildActionBar(timerOut);
    bodvar.draw();

    timerOut--;

    if (timerOut <= 0 && timerOut >= -60) {
        bodvar.canMove = true;
        timerOut = 120;
    }

    if (timerOut === 100 && timerOut > 0) {
        bodvar.canMove = false;
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
        // soundtrack_battle.play()

        addEventListener('keydown', event => {
            if (bodvar.canMove) bodvar.move(event)
        })
        timerId = requestAnimationFrame(update);
    }
};

// const switchPlayers = () => {
//     disabilitar a jugador 1
//     activar jugador 2
// }