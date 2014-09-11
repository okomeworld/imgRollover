/**
 * 通常のロールオーバー機能
 */

(function($){

	ImgRollover.Default = function(el,suffix){
		this.utils = new ImgRollover.Utils(el,suffix);
		this.utils.preload();
		this.event(el);
	}

	ImgRollover.Default.prototype.event = function(el){
		var that = this;
		$(el).on({
			mouseover: function(){
				$(this).attr('src', that.utils.addSuffix(this));
			},
			mouseleave: function(){
				$(this).attr('src', that.utils.removeSuffix(this));
			}
		});
	}

})(jQuery);
