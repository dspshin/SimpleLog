/*
 SimpleLog is for logging messages on mobile web browsers.
 This module needs jQuery. Also it works with jQuery Mobile.
 created by cybrshin@gmail.com
*/

;( function( $ ){

var slog = function(msg, level) {
	var header = '<div>',
		footer = '</div>';
	if (level) {
		header = '<div class="' + level + '">';
	}
	$('body').append(header + msg + footer);
}

var slog_jqm = function(msg, level) {
	if ($.mobile.activePage) {
		var id = $.mobile.activePage[0].id,
			header = '<div>',
			footer = '</div>';

		if (level) {
			header = '<div class="' + level + '">';
		}

		$('#'+id).append(header + msg + footer);
	}
}

if ($.mobile) { // if jqm is installed
	window.slog = slog_jqm;
} else {
	window.slog = slog;
}

})( jQuery );