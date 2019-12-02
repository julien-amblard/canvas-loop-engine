import cloneDeep from 'clone-deep'
const DEFAULT_FUNC = ({ $canvas, ctx, data }) => void 0
class Engine {
	constructor({ 
		$canvas = null, 
		autoStart = true,
		clearOnUpdate = true,
		data = {},

		onUpdate = DEFAULT_FUNC,
		onInit = DEFAULT_FUNC,
		onDraw = DEFAULT_FUNC,
		onStart = DEFAULT_FUNC,
		onStop = DEFAULT_FUNC
	} = {}) {

		this.$canvas = $canvas instanceof HTMLElement && $canvas.tagName.toLowerCase() === "canvas" 
			? $canvas : null
		
		this.data = !!data ? cloneDeep(data) : null
		this.clearOnUpdate = !!clearOnUpdate
		
		this.onInit = typeof onInit === "function" 
			? [onInit]
			: Array.isArray(onInit)
				? onInit.filter( fn => typeof fn === "function" )
				: null
		
		this.onUpdate = typeof onUpdate === "function" 
			? [onUpdate]
			: Array.isArray(onUpdate)
				? onUpdate.filter( fn => typeof fn === "function" )
				: null

		this.onDraw = typeof onDraw === "function" 
			? [onDraw]
			: Array.isArray(onDraw)
				? onDraw.filter( fn => typeof fn === "function" )
				: null

		this.onStart = typeof onStart === "function" 
			? [onStart]
			: Array.isArray(onStart)
				? onStart.filter( fn => typeof fn === "function" )
				: null

		this.onStop = typeof onStop === "function" 
			? [onStop]
			: Array.isArray(onStop)
				? onStop.filter( fn => typeof fn === "function" )
				: null
		
		if( !!!this.$canvas ) console.error("canvas-engine : invalid canvas element")
		else {

			this.arg = {
				$canvas: this.$canvas,
				ctx: this.$canvas.getContext('2d'),
				data: this.data
			}

			if( !!this.onInit && this.onInit.length ) 
				this.onInit.forEach( fn => fn( this.arg ) )

			if( autoStart === true ) this._start()

		}
	}
	_isRunning = false

	_run () {
		if( !this._isRunning ) return
		this._update()
		this._draw()
		requestAnimationFrame( this._run.bind(this) )
	}
	_update () {
		if( !!this.onUpdate && this.onUpdate.length ) 
			this.onUpdate.forEach( fn => fn( this.arg ) )
	}
	_draw () {
		if( !!this.clearOnUpdate ) this._clearCanvas()
		if( !!this.onDraw && this.onDraw.length ) 
			this.onDraw.forEach( fn => fn( this.arg ) )
	}
	_stop () {
		if( !!this.onStop && this.onStop.length ) 
			this.onStop.forEach( fn => fn( this.arg ) )

		this._isRunning = false
	}
	_start () {
		if( !!this.onStart && this.onStart.length ) 
			this.onStart.forEach( fn => fn( this.arg ) )

		this._isRunning = true
		this._run()
	}
	_toggle () {
		this._isRunning = !this._isRunning
		this._run()
	}

	_clearCanvas () { this.arg.ctx.clearRect(0, 0, this.arg.$canvas.width, this.arg.$canvas.height) }


	get isRunning () { return this._isRunning }
	update () { this._update() }
	draw () { this._draw() }
	toggle () { this._toggle() }
	stop () { this._stop() }
	start () { this._start() }
}
export default Engine