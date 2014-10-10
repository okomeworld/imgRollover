/**
 * フェード付きのロールオーバー機能
 */

(function($){

	ImgRollover.Fade = function(el,suffix,time){
		this.utils = new ImgRollover.Utils(el,suffix,time);
		this.el = $(this.utils.el);
		this.time = this.utils.time;
		this.setting();
		this.event();
	}

	ImgRollover.Fade.prototype = {

		event: function(){
			var that = this;
			that.el.on({
				mouseover: function(){
					$(this).stop().fadeTo(that.time, 0);
				},
				mouseleave: function(){
					$(this).stop().fadeTo(that.time, 1);
				}
			});
		},

		setting: function(){
			var that = this;
			that.el.each(function(){
				var $self = $(this);
				var $parent = $self.parent();
				var $overImg = that.cloneImg($self);
				that.setOverImg($parent, $overImg);
				that.setParentStyle($parent);
				that.setImgStyle($self, 'absolute', 20);
				that.setImgStyle($overImg, 'relative', 10);
			});
		},

		cloneImg: function($self){
			return $self.clone().attr('src', this.utils.addSuffix($self));
		},

		setOverImg: function($parent, $overImg){
			$parent.append($overImg)
		},

		setParentStyle: function($parent){
			$parent.css({
				'position': 'relative',
				'display': 'block'
			});
		},

		setImgStyle: function($el,position,z){
			$el.css({
				'position': position,
				'zIndex': z,
				'top': 0,
				'left': 0
			});
		}

	}

})(jQuery);
