module.exports = {
	devProcess: {
		tasks: [
			'assemble:pages',
			'sass:stylesPrioritizedBootstrap',
			'sass:stylesNotPrioritizedBootstrap',
			'sass:stylesPrioritizedMain',
			'sass:stylesNotPrioritizedMain',
	        'import:jsBootstrap',
	        'import:jsJquery',
	        'import:jsMain',
	        'imagemin:copyImages',
		]
	}
}