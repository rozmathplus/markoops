// header
var BODYMODIFIER = '_opened-mobile-menu';

jQuery(function($) {
	var domClassList = document.getElementsByTagName('body')[0].classList;

	$('#mainNavbar').on({
		'show.bs.collapse': function() {
			domClassList.add(BODYMODIFIER);
		},
		'hide.bs.collapse': function() {
			domClassList.remove(BODYMODIFIER);
		}
	});
});
