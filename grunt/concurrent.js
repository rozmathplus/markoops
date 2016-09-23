module.exports = {
	// dev
	prepareTempFiles: {
		tasks: [
			'sass:stylesPrioritizedBootstrap',
			'sass:stylesNotPrioritizedBootstrap',
			'sass:stylesPrioritizedMain',
			'sass:stylesNotPrioritizedMain',
	        'import:jsBootstrap',
	        'import:jsJquery',
	        'import:jsMain',
	        'imagemin:copyImages',
		]
	},
	// end of dev

	// push site
	minifyStyles: {
		tasks: [
			'cssmin:stylesHead',
			'cssmin:stylesFooter'
		]
	}
	// end of push site
}