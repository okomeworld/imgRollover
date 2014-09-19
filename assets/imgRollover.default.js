/**
 * 通常のロールオーバー機能
 */

(function($){

	ImgRollover.Default = function(el,suffix){
		this.utils = new ImgRollover.Utils(el,suffix);
		this.el = $(this.utils.el);
		this.preload();
		this.event();
	}

	ImgRollover.Default.prototype = {

		event: function(){
			var that = this;
			that.el.on({
				mouseover: function(){
					$(this).attr('src', that.utils.addSuffix(this));
				},
				mouseleave: function(){
					$(this).attr('src', that.utils.removeSuffix(this));
				}
			});
		},

		preload: function(){
			var that = this;
			that.el.each(function(){
				$('<img />').attr('src',that.utils.addSuffix(this));
			});
		}

	}

})(jQuery);
