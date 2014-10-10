/**
 * 名前空間[imgRollover]
 */
var ImgRollover = ImgRollover || {};

/**
 * 共通の処理を管理
 */

(function($){

	ImgRollover.Utils = function(el,suffix,time){
		this.el = el || '.imgOver';
		this.suffix = suffix || '_o';
		if(time === undefined){
			this.time = 200;
		}else{
			this.time = time;
		}
	}


	ImgRollover.Utils.prototype = {

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
		}

	}

})(jQuery);

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
