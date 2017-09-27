const canvas = document.querySelector('.background')
const ctx = canvas.getContext('2d')

const ARC_NUMBER = 10
const ARC_WIDTH = window.innerWidth / ARC_NUMBER
const CANVAS_WIDTH = window.innerWidth
const CANVAS_HEIGHT = window.innerHeight
canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT
const WAVE_Y = window.screen.height / 2

function draw (ctx, angle, offset) {
  ctx.fillRect(0, 0, CANVAS_WIDTH, WAVE_Y - ARC_WIDTH / 2)
  let radius = ARC_WIDTH / Math.cos(Math.PI * angle) / 2

  ctx.beginPath()
  for (let i = 0; i < ARC_NUMBER + 1; i++) {
    ctx.arc(i * ARC_WIDTH + ARC_WIDTH / 2 + offset, WAVE_Y - radius, radius, 0, Math.PI * 2, true)
  }
  ctx.fill()
}

let factor = .001
let angle = .2
let offset = -ARC_WIDTH
let speed = .5
ctx.fillStyle = '#ffffc3'
function main (timestamp) {
  if (angle <= .1 + .01 || angle >= .4 - .01) {
    factor *= -1
  }
  angle += factor
  if (offset >= -.01) {
    offset = -ARC_WIDTH
  }
  offset += speed

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  draw(ctx, angle, offset)
  window.requestAnimationFrame(main)
}

window.requestAnimationFrame(main)
