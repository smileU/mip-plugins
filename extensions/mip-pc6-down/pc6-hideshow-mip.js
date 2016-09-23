define('mip-plugindemo/mip-pc6-hideshow', ['require', 'customElement', 'zepto'], function(require) {
    // mip 组件开发支持 zepto
    var $ = require('zepto');

    var customElem = require('customElement').create();

    /* 生命周期 function list，根据组件情况选用，（一般情况选用 build、inviewCallback） start */
    // build 方法，元素插入到文档时执行，仅会执行一次
    customElem.prototype.build = function () {
        // this.element 可取到当前实例对应的 dom 元素
        var element = this.element;
		var hsId=$(element).attr("hsId");
		
		if (hsId==0){
			hideshow(
				 element,
				 {
					fn:function(flag){
					    $('.bdcs-search-form').show();
						$('.xq-top .title ,#mcate em').remove();
						$('#mcate').css('width','35px');
						$('.xq-top').css('padding-right','51px')
					}
				}
			)
		} else if (hsId==1){
			hideshow(
				 element,
				 {
					fn:function(flag){
					    $('.xq-nav').fadeToggle(200);
					}
				}
			)
		} else if (hsId==2){
		    hideshow(
				 element,
				 {
					text:"\u6536\u8d77\u5185\u5bb9",
					fn:function(flag){
						if (flag==true){
							$('#summary').hide();
							$('#details').show();
						} else {
							$('#summary').show();
							$('#details').hide();
						}
					}
				}
			)
		}
		//console.log($(element).attr("hsId"))
    };
    
	var hideshow=function(element,options){
            var defaults={
                event:"click",
                isFn:true,
				text:null,
				fn:function(){}
            }
            var option=$.extend({},defaults,options);
			var temp=true;
			var obj=$(element).find(".hideshow-btn")
			var ohtml=obj.text();

			obj.on(option.event,function(){
				temp==true ? $(this).html(option.text).addClass('active') : $(this).html(ohtml).removeClass('active');
				
				if (option.isFn){
				    option.fn(temp)
				}
				
				temp=!temp ;
			});
		};
		
    /* 生命周期 function list，根据组件情况选用 end */
    return customElem;
});
require(['mip-plugindemo/mip-pc6-hideshow'], function (plugindemo) {
    MIP.registerMipElement('mip-pc6-hideshow', plugindemo);
});