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
		var collection = this.pages.slice().sort(function(a, b) {
				return a.data.sortOrder - b.data.sortOrder;
			}),
		// var collection = this.pages,
			allLevelsCollection = [];

		// creating new short collection
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
			element['hasActiveChild'] = false;

			if (!(level in allLevelsCollection)) {
				allLevelsCollection[level] = [];
			}

			allLevelsCollection[level].push(element);
		}

		// sorting items in new short collection
		// to childrens and parents
		// for each menu level in descending mode
		for (var i = allLevelsCollection.length - 1; i > 0 ; i--) {
			var currentLevel = allLevelsCollection[i];

			// for each item in current level
			for (var j = 0; j < currentLevel.length; j++) {
				var childElement = currentLevel[j];

				var parentName = childElement.srcArray[i - 1],
					parentLevel = allLevelsCollection[i - 1],
					parentNode = search(parentName, parentLevel);

				if (childElement.isCurrentPage || childElement.hasActiveChild) {
					parentNode['hasActiveChild'] = true;
				}

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

		var dataToReturn = '',
			count = 1;
		function renderChildren(node) {
	    	dataToReturn += '<li class="nav-item ' + (node.hasActiveChild ? ' active' : '') + '">';
	    	dataToReturn += '<a class="nav-link ' + (node.isCurrentPage ? ' active' : '') + '" href="' + node.basename + '.html">' + node.data.title + '</a>';

	    	var children = node.children;
	    	if (children !== undefined && Object.keys(children).length) {
	    		count++;
	    		dataToReturn += '<ul class="level-' + count + '">';

	    		children.forEach(function(child) {
	    			renderChildren(child);
	    		});
	    		dataToReturn += '</ul>';
	    	}
	    	dataToReturn += '</li>';
	    	count = 1;
	    	return dataToReturn;
	    }

	    allLevelsCollection[0].forEach(function(firstLvlItem) {
	    	renderChildren(firstLvlItem);
	    });

	    return new Handlebars.SafeString(dataToReturn);
	});
}
