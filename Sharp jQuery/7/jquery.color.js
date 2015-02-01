;(function($) {
	$.fn.extend({
		"color": function(value) {
			// 1.1
			if (value == undefined) {
				return this.css("color");
			} else {
				return this.css("color", value); // 插件内部的this指向的是jQuery对象，而非普通的DOM对象
			}
		}
	});
})(jQuery);