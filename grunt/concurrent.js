module.exports = {
	devProcess: {
		tasks: [
			'assemble:allTemplates',
			'sass:prioritizedSassComponents',
			'sass:notPrioritizedSassComponents',
			'sass:sass'
		]
	}
}