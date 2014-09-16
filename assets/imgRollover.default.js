/**
 * 通常のロールオーバー機能
 */

(function($){

	ImgRollover.Default = function(el,suffix){
		this.el = el || '.imgOver';
		this.suffix = suffix || '_o';
		this.utils = new ImgRollover.Utils(this.el,this.suffix);
		this.preload();
		this.event();
	}

	ImgRollover.Default.prototype = {

		event: function(){
			var that = this;
			$(that.el).on({
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
			$(that.el).each(function(){
				$('<img />').attr('src',that.utils.addSuffix(this));
			});
		}

	}

})(jQuery);
