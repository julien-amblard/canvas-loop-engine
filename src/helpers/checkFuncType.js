export default arg => {
	return typeof arg === "function" 
			? [arg]
			: Array.isArray(arg)
				? arg.filter( fn => typeof fn === "function" )
				: null
}