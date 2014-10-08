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
					var $self = $(this);
					$self.attr('src', that.utils.addSuffix($self));
				},
				mouseleave: function(){
					var $self = $(this);
					$self.attr('src', that.utils.removeSuffix($self));
				}
			});
		},

		preload: function(){
			var that = this;
			that.el.each(function(){
				var $self = $(this);
				$('<img />').attr('src',that.utils.addSuffix($self));
			});
		}

	}

})(jQuery);
