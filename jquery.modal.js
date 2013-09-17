/*! Copyright (c) 2013 Nancle from CAU CS101
 * Licensed under the MIT License.
 *
 * copyright: Nancle from CAU CS 101
 *	 version: 1.0
 */
;(function($){
	$.modal = function(options){
		var defaults = {
			dialogWidth:'300',
			dialogContent:'请以自己的内容代替',
			hideDelay:'none',
			showCloseButton:1
		}
		options = $.extend(defaults, options);
		//屏幕高度
		var clientHeight = $(window).height();
		//获取文档的宽高
		var docWidth = $(document).width();
		var docHeight = $(document).height();
		var html_str = '<div id="modal"></div>';
		html_str += '<div id="modal-dialog">';
		html_str += options.dialogContent;
		if(options.showCloseButton === 1){
			html_str += '<div id="modal-close">关闭</div>';
		}
		html_str += '</div>';
		$('body').append(html_str);
		if(options.showCloseButton === 1){
			var $modalClose = $('#modal-close');
			$modalClose.css({
				position:'absolute',
				top:'10px',
				right:'10px',
				cursor:'pointer',
				border:'1px solid #fff',
				lineHeight:'12px',
				borderRadius:'3px',
				padding:'2px',
				opacity:0.5
			})
		}
		var $modal = $('#modal');
		$modal.css({
			width:docWidth,
			height:docHeight,
			background:'#000',
			opacity:0.5,
			position:'fixed',
			left:0,
			top:0,
			zIndex:9999
		})
		//dialog的宽高
		var $dialog = $('#modal-dialog');
		var dialogWidth = options.dialogWidth;
		$dialog.css({
			width:dialogWidth,
			color:'#fff',
			position:'fixed',
			left:(docWidth-dialogWidth)/2,
			top:clientHeight/4,
			background:'#000',
			opacity:0.8,
			zIndex:10000,
			padding:10,
			lineHeight:'50px',
			borderRadius:'5px',
			fontSize:'13px'
		})
		//呈现modal
		$modal.hide();
		if(options.showCloseButton === 1){
			$modalClose.hide();
		}
		$dialog.hide();
		$modal.fadeIn();
		$dialog.fadeIn();
		if(options.showCloseButton === 1){
			$modalClose.fadeIn();
		}
		
		if(options.hideDelay !== 'none'){
			$dialog.delay(options.hideDelay).fadeOut();
			$modal.delay(options.hideDelay).fadeOut();
			$modalClose.delay(options.hideDelay).fadeOut()
		}
		
		//关闭modal
		if(options.showCloseButton === 1){
			$modalClose.click(function(){
				 $modal.fadeOut().remove();
				 $dialog.fadeOut().remove();
			})
			$modalClose.hover(function(){
				$(this).css('opacity', 0.6);
			}, function(){
				$(this).css('opacity',0.5);
			})
		}
		$modal.click(function(){
			 $modal.fadeOut().remove();
			 $dialog.fadeOut().remove();
		});	
	}
})(jQuery);