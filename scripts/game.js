let p1ATB = 245;
let p2ATB = 122;

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    buildActionBar(p1ATB / 2, 0, color_primary);
    buildActionBar(p2ATB / 2, 655, color_secondary);

    background.draw();
    player1.draw();
    player2.draw();
    base.draw();
    rock1.draw();
    rock2.draw();
    rock3.draw();

    p1ATB--;

    if (p1ATB <= 0 && p1ATB >= -60) {
        player1.canMove = true;
        p1ATB = 245;
    }

    if (p1ATB === 225) {
        player1.canMove = false;
    }

    p2ATB--;

    if (p2ATB <= 0 && p2ATB >= -60) {
        player2.canMove = true;
        p2ATB = 245;
    }

    if (p2ATB === 225) {
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