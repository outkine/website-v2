const canvas = document.querySelector('.background')
const ctx = canvas.getContext('2d')

function draw (ctx, angle, offset) {
  ctx.fillRect(0, 0, CANVAS_WIDTH, WAVE_Y - ARC_WIDTH / 2)
  let radius = ARC_WIDTH / Math.cos(Math.PI * angle) / 2

  ctx.beginPath()
  for (let i = 0; i < ARC_NUMBER + 1; i++) {
    ctx.arc(i * ARC_WIDTH + ARC_WIDTH / 2 + offset, WAVE_Y - radius, radius, 0, Math.PI * 2, true)
  }
  ctx.fill()
}

const ARC_NUMBER = 10
let ARC_WIDTH, CANVAS_WIDTH, CANVAS_HEIGHT, WAVE_Y, offset
function setConstants () {
  ARC_WIDTH = window.innerWidth / ARC_NUMBER
  CANVAS_WIDTH = window.innerWidth
  CANVAS_HEIGHT = window.innerHeight
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT
  WAVE_Y = window.innerHeight / 2
  offset = -ARC_WIDTH * Math.random()
  ctx.fillStyle = '#c58787'
}
setConstants()
let factor = .0015 * (Math.random() < .5 ? -1 : 1)
let angle = Math.random() * .3 + .2
let speed = .5 * (Math.random() < .5 ? -1 : 1)
function main (timestamp) {
  if (angle <= .2 + .01 || angle >= .5 - .01) {
    factor *= -1
  }
  angle += factor
  if (offset > 0) {
    offset = -ARC_WIDTH
  } else if (offset < -ARC_WIDTH) {
    offset = 0
  }
  offset += speed

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  draw(ctx, angle, offset)
  window.requestAnimationFrame(main)
}

window.requestAnimationFrame(main)

window.addEventListener('resize', setConstants)
