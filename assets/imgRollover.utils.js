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
		}

	}

})(jQuery);
