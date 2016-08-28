module.exports.register = function(Handlebars) {
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

			// for first level
			data += '<li>';
			data += '<a href="#">first</a>';

			// for second level
			var childrenSecondLvl = firstLvlItem.children;
			if (childrenSecondLvl !== undefined) {
				var size = Object.keys(childrenSecondLvl).length;

				// if item has children
				if (size) {
					data += '<ul>';

					childrenSecondLvl.forEach(function(secondLvlItem) {
						data += '<li>';
						data += '<a href="#">second</a>';

						// for third level
						var childrenThirdLvl = secondLvlItem.children;
						if (childrenThirdLvl !== undefined) {
							var size = Object.keys(childrenThirdLvl).length;

							if (size) {
								data += '<ul>';

								childrenThirdLvl.forEach(function(thirdLvlItem) {
									data += '<li>';
									data += '<a href="#">third</a>';
									data += '</li>';
								});

								data += '</ul>';
							}
						}
						// END of third level

						data += '</li>';
					});

					data += '</ul>';
				}

			}
			// END of second level

			// END of first level
			data += '</li>';
		});

		return new Handlebars.SafeString(data);
	});
}
