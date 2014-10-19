/**
 * 名前空間[imgRollover]
 */
var ImgRollover = ImgRollover || {};

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
