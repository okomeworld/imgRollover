/**
 * フェード付きのロールオーバー機能
 */

(function($){

	ImgRollover.Fade = function(el,suffix,time){
		this.setImg(el,suffix);
		this.event(el,time);
	}

	ImgRollover.Fade.prototype = {

		event: function(el,time){

			$(el).on({
				mouseover: function(){
					$(this).fadeTo(time, 0);
				},
				mouseleave: function(){
					$(this).fadeTo(time, 1);
				}
			});
		},

		setImg: function(el,suffix){

			var utils = new ImgRollover.Utils(el,suffix);

			var that = this;
			$(el).each(function(){
				var $self = $(this);
				var $parent = $self.parent();
				$self.css({
					'position': 'absolute',
					'zIndex': 20
				});
				var overImg = $self.clone().attr({
					'src': utils.getOnSrc(this, suffix)
				}).css({
					'position': 'absolute',
					'zIndex': 10
				});
				$parent.append(overImg).css({
					'position': 'relative',
					'display': 'block',
					'width': utils.getImgWidth(),
					'height': utils.getImgHeight(),
					'overflow': 'hidden'
				});
			});
		},

	}

})(jQuery);
