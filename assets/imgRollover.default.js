/**
 * 通常のロールオーバー機能
 */

(function($){

	ImgRollover.Default = function(){
		ImgRollover.Base.apply(this, arguments);
	};

	$.extend(ImgRollover.Default.prototype, ImgRollover.Base.prototype, {

		prepare: function(opt){
			// 画像のプレロード
			// これもどのパターンでも使いそうなんでBaseに定義したよさげ
			var that = this;
			that.el.each(function(){
				var $self = $(this);
				$('<img />').attr('src',that.addSuffix($self));
			});
		},

		onMouseOverEffect: function($el){
			$el.attr('src', this.addSuffix($el));
		},

		onMouseLeaveEffect: function($el){
			$el.attr('src', this.removeSuffix($el));
		}

	});

})(jQuery);
