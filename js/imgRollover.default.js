/**
 * 通常のロールオーバー機能
 */

(function($){

	ImgRollover.Default = function(el,suffix){
		this.event(el,suffix);
	}

	ImgRollover.Default.prototype.event = function(el,suffix){

		var utils = new ImgRollover.Utils(el,suffix);

		$(el).on({
			mouseover: function(){
				$(this).attr('src', utils.getOnSrc(this));
			},
			mouseleave: function(){
				$(this).attr('src', utils.getOffSrc(this));
			}
		});
	}

})(jQuery);
