import Engine from "../src/engine"
import 'jest-canvas-mock'
import waitForExpect from "wait-for-expect"

// const MockInitFunc1 = jest.fn()
// const MockInitFunc2 = jest.fn()
// const MockStartFunc1 = jest.fn()
// const MockStartFunc2 = jest.fn()
// const MockStopFunc1 = jest.fn()
// const MockStopFunc2 = jest.fn()
// const MockUpdateFunc1 = jest.fn()
// const MockUpdateFunc2 = jest.fn()
// const MockDrawFunc1 = jest.fn()
// const MockDrawFunc2 = jest.fn()

describe("Engine 1", () => {
	const MockInitFunc1 = jest.fn()
	const MockStartFunc1 = jest.fn()
	const MockStopFunc1 = jest.fn()
	const MockUpdateFunc1 = jest.fn()
	const MockDrawFunc1 = jest.fn()
	const canvas = document.createElement("canvas")
	canvas.id = "el"
	const e = new Engine({
		$canvas: canvas,
		autoStart: false,
		onInit: MockInitFunc1,
		onStart: MockStartFunc1,
		onStop: MockStopFunc1,
		onUpdate: MockUpdateFunc1,
		onDraw: MockDrawFunc1,
	})

	test("should not be running", () => {
		expect(e.isRunning).toBe(false)
	})
	
	test("should call MockInitFunc1 one time", () => {
		expect(MockInitFunc1.mock.calls.length).toBe(1)
	})
	
	test("should not call other function", () => {
		expect(MockStartFunc1.mock.calls.length).toBe(0)
		expect(MockStopFunc1.mock.calls.length).toBe(0)
		expect(MockUpdateFunc1.mock.calls.length).toBe(0)
		expect(MockDrawFunc1.mock.calls.length).toBe(0)
	})
	
	test("should call MockUpdateFunc1", () => {
		e.update()
		expect(MockUpdateFunc1.mock.calls.length).toBe(1)
	})
	test("should call MockDrawFunc1", () => {
		e.draw()
		expect(MockDrawFunc1.mock.calls.length).toBe(1)
	})
	test("should start the engine", () => {
		expect(e.isRunning).toBe(false)
		e.start()
		expect(e.isRunning).toBe(true)
		expect(MockStartFunc1.mock.calls.length).toBe(1)
		expect(MockUpdateFunc1.mock.calls.length).toBe(2)
		expect(MockDrawFunc1.mock.calls.length).toBe(2)
	})
	
	test("should stop the engine", () => {
		expect(e.isRunning).toBe(true)
		e.stop()
		expect(e.isRunning).toBe(false)
		expect(MockStartFunc1.mock.calls.length).toBe(1)
		expect(MockStopFunc1.mock.calls.length).toBe(1)
		expect(MockUpdateFunc1.mock.calls.length).toBe(2)
		expect(MockDrawFunc1.mock.calls.length).toBe(2)
	})
	test("should toggle the engine", () => {
		expect(e.isRunning).toBe(false)
		e.toggle()
		expect(e.isRunning).toBe(true)
		expect(MockStartFunc1.mock.calls.length).toBe(1)
		expect(MockStopFunc1.mock.calls.length).toBe(1)
		expect(MockUpdateFunc1.mock.calls.length).toBe(3)
		expect(MockDrawFunc1.mock.calls.length).toBe(3)
	})
})

describe("Engine 2", () => {
	const MockInitFunc1 = jest.fn()
	const MockStartFunc1 = jest.fn()
	const MockStopFunc1 = jest.fn()
	const MockUpdateFunc1 = jest.fn()
	const MockDrawFunc1 = jest.fn()
	const canvas = document.createElement("canvas")
	canvas.id = "el"
	const e = new Engine({
		$canvas: canvas,
		onInit: MockInitFunc1,
		onStart: MockStartFunc1,
		onStop: MockStopFunc1,
		onUpdate: MockUpdateFunc1,
		onDraw: MockDrawFunc1,
	})

	test("should be running", () => {
		expect(e.isRunning).toBe(true)
	})

	test("should call MockInitFunc1 one time", () => {
		expect(MockInitFunc1.mock.calls.length).toBe(1)
	})

	test("should call MockStartFunc1", () => {
		expect(MockStartFunc1.mock.calls.length).toBe(1)
	})
	test("should not call MockStopFunc1", () => {
		expect(MockStopFunc1.mock.calls.length).toBe(0)
	})
	test("should call MockUpdateFunc1", () => {
		expect(MockUpdateFunc1.mock.calls.length).toBe(1)
	})
	test("should call MockDrawFunc1", () => {
		expect(MockDrawFunc1.mock.calls.length).toBe(1)
	})
	test("should call MockStopFunc1", () => {
		e.stop()
		expect(MockStopFunc1.mock.calls.length).toBe(1)
	})
})