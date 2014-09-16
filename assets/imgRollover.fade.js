/**
 * フェード付きのロールオーバー機能
 */

(function($){

	ImgRollover.Fade = function(el,suffix,time){
		this.el = el || '.imgOverWithFade';
		this.suffix = suffix || '_o';
		if(time === undefined){
			this.time = 200;
		}else{
			this.time = time;
		}
		this.utils = new ImgRollover.Utils(this.el,this.suffix);
		this.setImg();
		this.event();
	}

	ImgRollover.Fade.prototype = {

		event: function(){
			var that = this;
			$(that.el).on({
				mouseover: function(){
					$(this).stop().fadeTo(that.time, 0);
				},
				mouseleave: function(){
					$(this).stop().fadeTo(that.time, 1);
				}
			});
		},

		setImg: function(){

			var that = this;
			var $el = $(that.el);
			var imgWitdh = $el.width();
			var imgHeight = $el.height();

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
					'width': imgWitdh,
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
