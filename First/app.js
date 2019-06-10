var canvas = document.querySelector("canvas")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

var c = canvas.getContext("2d")
const gravity = 2
const friction = .9
var elements = []

function Ball(x, y, dx, dy, radius, f, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.f = f
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.update = function () {
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy;
            this.dy = this.dy * this.f;
            this.dx = this.dx * this.f;
        } else {
            this.dy += gravity;
        }

        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
            this.dx = -this.dx * friction;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    };
}


function init() {
    elements.push(new Ball(50, 50, 10, 0, 30, .8, "blue"))
    elements.push(new Ball(50, 50, 20, 0, 30, .8, "blue"))
    elements.push(new Ball(50, 50, 30, 0, 30, .8, "blue"))
    elements.push(new Ball(50, 50, 40, 0, 30, .8, "blue"))

}

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    elements.forEach(e => {
        e.update()
    })
    requestAnimationFrame(animate)

}
init()
animate()