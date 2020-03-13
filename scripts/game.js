let timerOut = 120;
let canMove = false;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildScenario();
    bodvar.draw();
    timerOut--;

    if (timerOut <= 0 && timerOut >= -60) {
        canMove = true
        console.log(canMove);
        timerOut = 120;
    }

    if (timerOut === 100 && timerOut > 0) {
        canMove = false;
        
        console.log(canMove);
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
        addEventListener('keydown', event => {
            if (canMove) bodvar.move(event)
        })
        timerId = requestAnimationFrame(update);
    }
};

// const switchPlayers = () => {
//     disabilitar a jugador 1
//     activar jugador 2
// }