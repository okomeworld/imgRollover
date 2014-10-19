/**
 * 共通の処理を管理
 */

(function($){

	ImgRollover.Base = function(el,suffix,opt){
		this.el     = el     || $('.imgOver');
		this.suffix = suffix || '_o';

		this.prepare(opt);
		this.setEvent();
	}


	ImgRollover.Base.prototype = {

		//画像パスを取得
		getSrc: function($self){
			return $self.attr('src');
		},

		//画像のパスに接尾語を加える
		addSuffix: function($self){
			return this.getSrc($self).replace(/^(.+)(\.[a-z]+)$/, '$1' + this.suffix + '$2');
		},

		//画像のパスから接尾語を削除する
		removeSuffix: function($self){
			return this.getSrc($self).replace(this.suffix,'');
		},

		//イベントハンドラの追加
		setEvent: function(){
			var that = this;
			that.el.on({
				mouseover:  function(){
					var $el = $(this);
					that.onMouseOverEffect($el);
				},
				mouseleave: function(){
					var $el = $(this);
					that.onMouseLeaveEffect($el);
				}

			});
		},

		// [abstract] イベントハンドラに必要なパラメータを準備する
		prepare: function(opt){
			if (console) console.error("Must Implement prepare method!!");
		},

		// [abstract] mouseoverのイベントハンドラ
		onMouseOverEffect: function(){
			if (console) console.error("Must Implement onMouseOverEffect method!!");
		},

		// [abstract] mouseleaveのイベントハンドラ
		onMouseLeaveEffect: function(){
			if (console) console.error("Must Implement onMouseLeaveEffect method!!");
		}

	}

})(jQuery);
