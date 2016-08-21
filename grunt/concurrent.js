module.exports = {
	devProcess: {
		tasks: [
			'assemble:pages',
			'sass:stylesPrioritizedBootstrap',
			'sass:stylesNotPrioritizedBootstrap',
			'sass:stylesPrioritizedMain',
			'sass:stylesNotPrioritizedMain'
		]
	}
}