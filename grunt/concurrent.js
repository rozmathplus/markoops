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
	},
	pushSiteFirst: {
		tasks: [
			'assemble:pagesSmall',
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
	pushSiteSecond: {
		tasks: [
			'cssmin:stylesHead',
			'cssmin:stylesFooter',
		]
	}
}