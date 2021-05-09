class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 5;
        this.color = color;
    }

    draw(ctx) {

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.strokeStyle = 'black';
        ctx.closePath();
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }
}



function clearC() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    circle.draw(ctx)
}

setInterval(clearC, 50)


