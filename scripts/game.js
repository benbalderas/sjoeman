function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    bodvar.draw();

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
            const keyLeft = 37;
            const keyUp = 38;
            const keyRight = 39;
            const keyDown = 40;

            if (event.keyCode === keyLeft) {
                bodvar.x -= 100
            }

            if (event.keyCode === keyUp) {
                bodvar.y -= 100
            }

            if (event.keyCode === keyRight) {
                bodvar.x += 100
            }

            if (event.keyCode === keyDown) {
                bodvar.y += 100
            }
        })

        timerId = requestAnimationFrame(update);
    }
};