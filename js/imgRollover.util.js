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

		//mouseoverの画像パスを取得
		getOnSrc: function(self){
			return this.getSrc(self).replace(/^(.+)(\.[a-z]+)$/, '$1' + this.suffix + '$2');
		},

		//mouseleaveの画像パスを取得
		getOffSrc: function(self){
			return this.getSrc(self).replace(this.suffix,'');
		}
	}

})(jQuery);
