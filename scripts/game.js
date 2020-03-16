let p1Timer = 100;

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    buildActionBar(p1Timer);

    player1.draw();
    player2.draw();

    p1Timer--;

    if (p1Timer <= 0 && p1Timer >= -60) {
        player1.canMove = true;
        player2.canMove = true;
        p1Timer = 120;
    }

    if (p1Timer === 110) {
        player1.canMove = false;
        player2.canMove = false;
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
        soundtrack_battle.play()

        addEventListener('keydown', event => {
            if (player1.canMove) player1.move(event)
            if (player2.canMove) player2.move(event)
        })
        timerId = requestAnimationFrame(update);
    }
};

// const switchPlayers = () => {
//     disabilitar a jugador 1
//     activar jugador 2
// }