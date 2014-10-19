/**
 * フェード付きのロールオーバー機能
 */

(function($){

	ImgRollover.Fade = function(){
		ImgRollover.Base.apply(this, arguments);
	}

	$.extend(ImgRollover.Fade.prototype, ImgRollover.Base.prototype, {

		prepare: function(opt) {
			var that = this;
			opt = opt || {};

			// フェードエフェクトにかける時間
			that.time = (opt.time !== undefined) ? opt.time : 200;

			that.el.each(function(){
				var $self = $(this);

				// マウスオーバー用imgエレメントの生成
				var $clone  = $self.clone();
				$clone.attr('src', that.addSuffix($self));
				$clone.css({
					'position' : 'absolute',
					'display'  : 'block',
					'top'      : $self.offset().top,
					'left'     : $self.offset().left,
					'zIndex'   : -10
				});

				$self.after($clone);
			});
		},

		onMouseOverEffect: function($el){
			var that = this;
			$el.stop().fadeTo(that.time, 0);
		},

		onMouseLeaveEffect: function($el){
			var that = this;
			$el.stop().fadeTo(that.time, 1);
		}

	});

})(jQuery);
