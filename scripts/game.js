let atb = 60;

const gameOver = (winner) => {
    clearInterval(timerId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.font = "500 24px Avenir";
    ctx.fillText(`${winner} wins!`, 320, 356);
    gameOverMessage.style.opacity = '1';
    timerId = undefined;

    soundtrack_battle.stop();

    return true;
}

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

    if (player1.health === 0) {
        gameOver(player2.name);
    }

    if (player2.health === 0) {
        gameOver(player1.name);
    }
}

window.onload = () => {
    document.getElementById("story-trigger").onclick = () => {
        container.style.display = "none";
        courtain1.classList.add('courtain-animation-1');
        courtain2.classList.add('courtain-animation-2');
        story.style.display = "block";
        story.style.opacity = 1;
    };

    document.getElementById("start").onclick = () => {
        courtain1.classList.remove('courtain-animation-1');
        courtain2.classList.remove('courtain-animation-2');

        startGame();

        courtain1.classList.add('courtain-animation-1');
        courtain2.classList.add('courtain-animation-2');
    };

    function startGame() {
        story.style.display = "none";
        soundtrack_battle.play();

        soundtrack_battle.addEventListener('timeupdate', function () {
            let buffer = .25;

            if (this.currentTime > this.duration - buffer) {
                this.currentTime = 0;
                this.play();
            }
        });

        addEventListener("keydown", event => {
            if (player1.canMove) player1.action(event);
            if (player1.canMove) player1.attack(player2, event);

            if (player2.canMove) player2.action(event);
            if (player1.canMove) player2.attack(player1, event);
        });
        timerId = requestAnimationFrame(update);
    }
};