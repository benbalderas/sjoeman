let timerOut = 120; // need to pair to music bpm
const soundtrack_battle = new Audio('assets/battle.mp3');
soundtrack_battle.loop = true;

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    buildActionBar(timerOut);

    // player1.draw()
    // player2.draw()

    player1.draw();

    timerOut--;

    if (timerOut <= 0 && timerOut >= -60) {
        player1.canMove = true;
        timerOut = 120;
    }

    if (timerOut === 110) {
        player1.canMove = false;
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
            if (player1.canMove) player1.move(event)
        })
        timerId = requestAnimationFrame(update);
    }
};

// const switchPlayers = () => {
//     disabilitar a jugador 1
//     activar jugador 2
// }