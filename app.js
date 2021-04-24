const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = "256";
canvas.height = "224";

function init() {

    if (canvas.getContext){
        setInterval(draw, 1000 / 30);
        console.log("Here!");
    }
}

function drawTile(x, y, color){ 
    ctx.fillStyle = color;
    ctx.fillRect(x * 16, y * 16, 16, 16);
}

function draw(){
    drawTile(
        (Math.floor(Math.random() * 16)),
        (Math.floor(Math.random() * 14)),
        'rgb(' + (Math.floor(Math.random() * 255)) + ", " +
            (Math.floor(Math.random() * 255)) + ", " +
            (Math.floor(Math.random() * 255)) + ")"
    );
}

init();