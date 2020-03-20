let atb = 60;

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    buildActionBar(atb * 2, 352, color_primary);

    buildFunkMeter(32, player1.funkMeter);
    buildFunkMeter(676, player2.funkMeter);

    buildHealth(32, player1.health);
    buildHealth(676, player2.health);

    background.draw();
    player1.draw();
    player2.draw();
    base.draw();
    rock1.draw();
    rock2.draw();
    rock3.draw();

    atb--;

    if (atb <= 5 && atb >= -60) {
        player1.canMove = true;
        player2.canMove = true;
        atb = 60;
    }

    if (atb === 55) {
        player1.canMove = false;
        player2.canMove = false;
    }

    if (timerId) {
        timerId = requestAnimationFrame(update);
    }
}

window.onload = () => {
    document.getElementById("start").onclick = () => {
        startGame();
    };

    function startGame() {
        // soundtrack_battle.play();

        // soundtrack_battle.addEventListener('timeupdate', function () {
        //     let buffer = .25;

        //     if (this.currentTime > this.duration - buffer) {
        //         this.currentTime = 0;
        //         this.play();
        //     }
        // });

        addEventListener("keydown", event => {
            if (player1.canMove) player1.action(event);
            if (player1.canMove) player1.attack(player2, event);

            if (player2.canMove) player2.action(event);
            if (player1.canMove) player2.attack(player1, event);
        });
        timerId = requestAnimationFrame(update);
    }
};