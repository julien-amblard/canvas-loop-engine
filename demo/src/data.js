export const drawBackground = ({ $canvas, ctx, data }) => {
	ctx.fillStyle = data.backgroundColor
	ctx.rect(0, 0, $canvas.width, $canvas.height)
	ctx.fill()
}
export const drawCircle = ({ ctx, data }) => {
	ctx.beginPath()
	ctx.fillStyle = data.color;
	ctx.arc(data.x, data.y, 10, 0, 2 * Math.PI)
	ctx.fill()
}
export const baseData = {
	speed: 3,
	height: 5, width: 5,
	backgroundColor: "#138078",
	color: "#c6ea22",
	x: -20,
	y: 100/2
}