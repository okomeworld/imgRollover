/**
 * 通常のロールオーバー機能
 */

(function($){

	$.extend(ImgRollover.Default, ImgRollover.Base, {

		prepare: function(opt){
			// 画像のプレロード
			// これもどのパターンでも使いそうなんでBaseに定義したよさげ
			var that = this;
			that.el.each(function(){
				var $self = $(this);
				$('<img />').attr('src',that.addSuffix($self));
			});
		},

		onMouseOverEvent: function(that){
			var $self = $(this);
			$self.attr('src', that.addSuffix($self));
		},

		onMouseLeaveEvent: function(that){
			var $self = $(this);
			$self.attr('src', that.removeSuffix($self));
		}
	});

})(jQuery);
