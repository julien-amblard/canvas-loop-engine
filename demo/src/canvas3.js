import Engine from "../../src/engine"
import { drawCircle, drawBackground } from "./data"

new Engine({
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