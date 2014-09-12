/**
 * フェード付きのロールオーバー機能
 */

(function($){

	ImgRollover.Fade = function(el,suffix,time){
		this.utils = new ImgRollover.Utils(el,suffix);
		this.setImg(el);
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

		setImg: function(el){

			var $el = $(el);
			var imgWidth = $el.width();
			var imgHeight = $el.height();

			var that = this;
			$el.each(function(){
				var $self = $(this);
				var $parent = $self.parent();
				var $overImg = $self.clone().attr({
					'src': that.utils.addSuffix(this)
				});

				that.setImgStyle($self,20);
				that.setImgStyle($overImg, 10);

				$parent.append($overImg).css({
					'position': 'relative',
					'display': 'block',
					'width': imgWidth,
					'height': imgHeight,
					'overflow': 'hidden'
				});
			});
		},

		setImgStyle: function($el,z){
			$el.css({
				'position': 'absolute',
				'zIndex': z,
				'top': 0,
				'left': 0
			});
		}

	}

})(jQuery);
