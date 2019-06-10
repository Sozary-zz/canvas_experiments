var canvas = document.querySelector("canvas")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

var c = canvas.getContext("2d")

c.fillRect(0, 0, 10, 10)
c.stroke()