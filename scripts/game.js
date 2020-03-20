let atb = 120;

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();

    buildActionBar(atb, 0, color_primary);
    buildHealth(0, player1.health);
    buildHealth(670, player2.health);

    background.draw();
    player1.draw();
    player2.draw();
    base.draw();
    rock1.draw();
    rock2.draw();
    rock3.draw();

    atb--;

    if (atb <= 10 && atb >= -60) {
        player1.canMove = true;
        atb = 120;
    }

    if (atb === 110) {
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
        // soundtrack_battle.play();

        // soundtrack_battle.addEventListener('timeupdate', function () {
        //     let buffer = .25;

        //     if (this.currentTime > this.duration - buffer) {
        //         this.currentTime = 0
        //         this.play()
        //     }
        // });

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