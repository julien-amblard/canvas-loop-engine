import CheckFunc from "../src/helpers/checkFuncType"

describe("CheckFunc", () => {
	const funcTest1 = function () {} 
	const funcTest2 = function () {} 
	test("should return null", () => {
		expect(CheckFunc("lorem")).toBe(null)
	})
	test("should return array with one func", () => {
		expect(CheckFunc(funcTest1)).toEqual([funcTest1])
	})
	test("should return array with two func", () => {
		expect(CheckFunc([funcTest1, funcTest2])).toEqual([funcTest1, funcTest2])
	})
	test("should filter non func", () => {
		expect(CheckFunc([funcTest1, "lorem", 1, true, null, undefined, {}, [], funcTest2])).toEqual([funcTest1, funcTest2])
	})
})