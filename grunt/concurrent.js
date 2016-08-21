module.exports = {
	devProcess: {
		tasks: [
			'assemble:pages',
			'sass:prioritizedSassComponents',
			'sass:notPrioritizedSassComponents',
			'sass:sass'
		]
	}
}