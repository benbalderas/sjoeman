let p1ATB = 250;
let p2ATB = 122;

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    buildActionBar(p1ATB / 2, 0, color_primary);
    buildHealth(0, player1.health);
    buildHealth(670, player2.health);
    buildActionBar(p2ATB / 2, 670, color_secondary);

    background.draw();
    player1.draw();
    player2.draw();
    base.draw();
    rock1.draw();
    rock2.draw();
    rock3.draw();

    p1ATB--;

    if (p1ATB <= 20 && p1ATB >= -60) {
        player1.canMove = true;
        p1ATB = 250;
    }

    if (p1ATB === 240) {
        player1.canMove = false;
    }

    p2ATB--;

    if (p2ATB <= 10 && p2ATB >= -60) {
        player2.canMove = true;
        p2ATB = 245;
    }

    if (p2ATB === 235) {
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
        soundtrack_battle.play();

        addEventListener('keydown', event => {
            if (player1.canMove) player1.action(event);
            if (player1.canMove) player1.attack(player2, event);
            if (player2.canMove) player2.action(event);
        })
        timerId = requestAnimationFrame(update);
    }
};

// const switchPlayers = () => {
//     disabilitar a jugador 1
//     activar jugador 2
// }