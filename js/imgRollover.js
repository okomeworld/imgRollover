/**
 * 名前空間[imgRollover]
 */
var ImgRollover = ImgRollover || {};

/**
 * 共通の処理を管理
 *
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

		//画像の幅を取得
		getImgWidth: function(){
			return $(this.el).width();
		},

		//画像の高さを取得
		getImgHeight: function(){
			return $(this.el).height();
		},

		//画像パスを取得
		getSrc: function(self){
			return $(self).attr('src');
		},

		//画像のパスに接尾語を加える
		addSuffix: function(self){
			return this.getSrc(self).replace(/^(.+)(\.[a-z]+)$/, '$1' + this.suffix + '$2');
		},

		//画像のパスから接尾語を削除する
		removeSuffix: function(self){
			return this.getSrc(self).replace(this.suffix,'');
		},

		//画像をプリロード
		preload: function(){
			var that = this;
			$(this.el).each(function(){
				$('<img />').attr('src',that.addSuffix(this,that.suffix));
			});
		}

	}

})(jQuery);

/**
 * 通常のロールオーバー機能
 */

(function($){

	ImgRollover.Default = function(el,suffix){
		this.utils = new ImgRollover.Utils(el,suffix);
		this.utils.preload();
		this.event(el);
	}

	ImgRollover.Default.prototype.event = function(el){
		var that = this;
		$(el).on({
			mouseover: function(){
				$(this).attr('src', that.utils.addSuffix(this));
			},
			mouseleave: function(){
				$(this).attr('src', that.utils.removeSuffix(this));
			}
		});
	}

})(jQuery);

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

			var that = this;
			$(el).each(function(){
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
					'width': that.utils.getImgWidth(),
					'height': that.utils.getImgHeight(),
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
