/**
 * @author: Qi
 * @date: 2016-09-26
 * @file: mip-html-os.js
 */

define('mip-html-os', ['require', 'customElement'], function (require) {
    var customElem = require('customElement').create();
	// 判断OS，执行显示移除操作
    function sethtmlos(ThisOs, OsType) {
        var IsOs = false;
        var OsUa = navigator.userAgent.toLowerCase();
        switch (OsType) {
            case 'android':
                // 判断是否为安卓
                IsOs = OsUa.indexOf('android') > -1;
                break;
            case 'ios':
                // 判断是否为IOS
                IsOs = !!OsUa.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);
                break;
        }
        if (IsOs) {
            // 真 显示元素
            ThisOs.style.display = 'block';
        }
        else {
            // 假 移除元素
            ThisOs.parentNode.removeChild(ThisOs);
        }
    }
    // build 方法，元素插入到文档时执行，仅会执行一次
    customElem.prototype.build = function () {
        var element = this.element;
        var OsType = element.attributes.getNamedItem('os').textContent;
        sethtmlos(element, OsType);
    };
    return customElem;
});

require(['mip-html-os'], function (plugindemo) {
    MIP.registerMipElement('mip-html-os', plugindemo);
});
