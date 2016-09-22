module.exports = {
	// dev
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
	},
	// end of dev

	// push site
	prepareSiteFiles: {
		tasks: [
			'sass:stylesPrioritizedBootstrap',
			'sass:stylesNotPrioritizedBootstrap',
			'sass:stylesPrioritizedMain',
			'sass:stylesNotPrioritizedMain',
	        'import:jsBootstrap',
	        'import:jsJquery',
	        'import:jsMain',
	        'imagemin:copySiteImages',
		]
	},
	minifyStyles: {
		tasks: [
			'cssmin:stylesHead',
			'cssmin:stylesFooter'
		]
	}
	// end of push site
}