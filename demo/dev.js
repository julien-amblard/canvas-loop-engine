import "./core.scss"
import Engine from "../src/engine"

const drawBackground = ({ $canvas, ctx, data }) => {
	ctx.fillStyle = data.backgroundColor
	ctx.rect(0, 0, $canvas.width, $canvas.height)
	ctx.fill()
}
const drawCircle = ({ ctx, data }) => {
	ctx.beginPath()
	ctx.fillStyle = data.color;
	ctx.arc(data.x, data.y, 10, 0, 2 * Math.PI)
	ctx.fill()
}
const baseData = {
	speed: 3,
	height: 5, width: 5,
	backgroundColor: "#138078",
	color: "#c6ea22",
	x: -10,
	y: 100/2
}

const Canvas1 = new Engine({
	$canvas: document.querySelector(".canvas1"),
	data: baseData,
	onInit: ({ $canvas }) => {
		$canvas.height = 100
		$canvas.width = 300
	},
	onUpdate: ({ data }) => {
		if( data.x > 310 ) data.x = -10
		data.x += data.speed
	},
	onDraw: [drawBackground, drawCircle]
})
Canvas1.start()


const Canvas2 = new Engine({
	$canvas: document.querySelector(".canvas2"),
	data: baseData,
	onInit: ({ $canvas }) => {
		$canvas.height = 100
		$canvas.width = 300
	},
	onUpdate: ({ data }) => {
		if( data.x < -10 ) data.x = 310
		data.x -= data.speed
	},
	onDraw: [drawBackground, drawCircle]
})
Canvas2.start()



const Canvas3 = new Engine({
	$canvas: document.querySelector(".canvas3"),
	data: {
		speed: 6,
		height: 5, width: 5,
		backgroundColor: "#c6ea22",
		color: "#138078",
		x: 100/2,
		y: -10
	},
	onInit: ({ $canvas }) => {
		$canvas.height = 300
		$canvas.width = 100
	},
	onUpdate: ({ $canvas, data }) => {
		if( data.y > $canvas.height + data.height ) data.y = -data.height
		data.y += data.speed
	},
	onDraw: [drawBackground, drawCircle]
})
Canvas3.start()