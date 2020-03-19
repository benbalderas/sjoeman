let p1ATB = 90;
let p2ATB = 120;

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();

    buildActionBar(p1ATB, 0, color_primary);
    buildHealth(0, player1.health);

    buildActionBar(p2ATB, 670, color_secondary);
    buildHealth(670, player2.health);

    background.draw();
    player1.draw();
    player2.draw();
    base.draw();
    rock1.draw();
    rock2.draw();
    rock3.draw();

    p1ATB--;

    if (p1ATB <= 10 && p1ATB >= -60) {
        player1.canMove = true;
        p1ATB = 120;
    }

    if (p1ATB === 110) {
        player1.canMove = false;
    }

    p2ATB--;

    if (p2ATB <= 10 && p2ATB >= -60) {
        player2.canMove = true;
        p2ATB = 120;
    }

    if (p2ATB === 110) {
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

        soundtrack_battle.addEventListener('timeupdate', function () {
            let buffer = .44;

            if (this.currentTime > this.duration - buffer) {
                this.currentTime = 0
                this.play()
            }
        });

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