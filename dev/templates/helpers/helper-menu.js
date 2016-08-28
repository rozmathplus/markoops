module.exports.register = function(Handlebars) {
	'use strict'

    var pagesDefaultFolder = /dev\/templates\/pages\//;

    function search(key, array) {
    	for (var i = 0; i < array.length; i++) {
    		if (array[i].basename === key) {
    			return array[i];
    		}
    	}
    }

	Handlebars.registerHelper('menu', function() {
		// var collection = this.pages.slice().sort(function(a, b) {
		// 		return a.data.sortOrder - b.data.sortOrder;
		// 	}),
		var collection = this.pages,
			allLevelsCollection = [];

		for (var i in collection) {
			var item = collection[i],
				element = {},
				data = item.data,
				basename = item.basename,
				srcArray = item.src.replace(pagesDefaultFolder, '').split('/'),
				level = srcArray.indexOf(basename + '.hbs'),
				isCurrentPage = item.isCurrentPage;

			element['index'] = i;
			element['data'] = data;
			element['basename'] = basename;
			element['srcArray'] = srcArray;
			element['level'] = level;
			element['isCurrentPage'] = isCurrentPage;

			if (!(level in allLevelsCollection)) {
				allLevelsCollection[level] = [];
			}

			allLevelsCollection[level].push(element);
		}

		// for each menu level
		// in descending mode
		for (var i = allLevelsCollection.length - 1; i > 0 ; i--) {
			var currentLevel = allLevelsCollection[i];

			// for each item in current level
			for (var j = 0; j < currentLevel.length; j++) {
				var childElement = currentLevel[j];

				var parentName = childElement.srcArray[i - 1],
					parentLevel = allLevelsCollection[i - 1],
					parentNode = search(parentName, parentLevel);

				// if parent node has no 'children' property
				// add empty property
				if (!('children' in parentNode)) {
					parentNode['children'] = [];
				}

				// remove item from level before sending to parent node
				// as a child element
				currentLevel.splice(j, 1);
				parentNode['children'].push(childElement);
				j--;
			}
		}

		// remove empty levels
		allLevelsCollection = allLevelsCollection.filter(function(level) {
			return level.length;
		});

		// Data to return
		var data = '';
		allLevelsCollection[0].forEach(function(firstLvlItem) {
			var activeClass = firstLvlItem.isCurrentPage ? ' active' : '';

			// for first level
			data += '<li class="nav-item">';
			data += '<a class="nav-link' + activeClass + '" href="' + firstLvlItem.basename + '.html">' + firstLvlItem.data.title + '</a>';

			// for second level
			var childrenSecondLvl = firstLvlItem.children;
			if (childrenSecondLvl !== undefined) {
				var size = Object.keys(childrenSecondLvl).length;

				// if item has children
				if (size) {
					data += '<ul class="second-level">';

					childrenSecondLvl.forEach(function(secondLvlItem) {
						var activeClass = secondLvlItem.isCurrentPage ? ' active' : '';

						data += '<li>';
						data += '<a class="nav-link' + activeClass + '" href="' + secondLvlItem.basename + '.html">' + secondLvlItem.data.title + '</a>';

						// for third level
						var childrenThirdLvl = secondLvlItem.children;
						if (childrenThirdLvl !== undefined) {
							var size = Object.keys(childrenThirdLvl).length;

							// if item has children
							if (size) {
								data += '<ul class="third-level">';

								childrenThirdLvl.forEach(function(thirdLvlItem) {
									var activeClass = thirdLvlItem.isCurrentPage ? ' active' : '';
									
									data += '<li>';
									data += '<a class="nav-link' + activeClass + '" href="' + thirdLvlItem.basename + '.html">' + thirdLvlItem.data.title + '</a>';
									data += '</li>';
								});

								data += '</ul>';
							}
						}
						data += '</li>';
						// END of third level
					});

					data += '</ul>';
				}

			}
			// END of second level

			data += '</li>';
			// END of first level
		});

		return new Handlebars.SafeString(data);
	});
}
