document.addEventListener("DOMContentLoaded", function () {
    const balls = document.querySelectorAll('.balls > div');

    balls.forEach(ball => {
        randomizePosition(ball);
        animateBall(ball);
    });
});

function randomizePosition(element) {
    const maxX = window.innerWidth - element.clientWidth;
    const maxY = window.innerHeight - element.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
}

function animateBall(element) {
    const maxX = window.innerWidth - element.clientWidth;
    const maxY = window.innerHeight - element.clientHeight;

    let directionX = 1; // Initial direction right
    let directionY = 1; // Initial direction down

    let posX = parseFloat(element.style.left) || 0;
    let posY = parseFloat(element.style.top) || 0;

    function move() {
        posX += directionX * 2; // Konstante Geschwindigkeit in horizontaler Richtung
        posY += directionY * 2; // Konstante Geschwindigkeit in vertikaler Richtung

        // Überprüfen, ob der Ball den rechten oder linken Rand berührt
        if (posX > maxX || posX < 0) {
            directionX = -directionX; // Richtung umkehren
        }

        // Überprüfen, ob der Ball den oberen oder unteren Rand berührt
        if (posY > maxY || posY < 0) {
            directionY = -directionY; // Richtung umkehren
        }

        element.style.transition = "left 4s linear, top 4s linear";
        element.style.left = `${posX}px`;
        element.style.top = `${posY}px`;

        requestAnimationFrame(move); // Nutzen Sie requestAnimationFrame für eine flüssige Animation
    }

    move();
}

// JavaScript to handle the "Home" button click event
document.getElementById("homeButton").addEventListener("click", function() {
    // Replace "index.html" with the actual URL of your website's front page
    window.location.href = "index.html";
});

// JavaScript to handle the "Back" button click event
document.getElementById("backButton").addEventListener("click", function() {
    // Use the built-in browser "history" object to navigate back
    window.history.back();
});


