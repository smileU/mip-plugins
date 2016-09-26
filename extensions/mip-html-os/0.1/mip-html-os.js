/**
 * @author: Qi
 * @date: 2016-09-26
 * @file: mip-html-os.js
 */

define('mip-html-os', ['require', 'customElement', 'zepto'], function (require) {
    var $ = require('zepto');
    var customElem = require('customElement').create();
	// 判断OS，执行显示移除操作
    var a = function (o, t) {
        var s = false;
        var u = navigator.userAgent.toLowerCase();
        switch (t) {
            case 'android':
                // 判断是否为安卓
                s = u.indexOf('android') > -1;
                break;
            case 'ios':
                // 判断是否为IOS
                s = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);
                break;
        }
        if (s) {
            // 真 显示元素
            o.show();
        }
        else {
            // 假 移除元素
            o.remove();
        }
    };
    // build 方法，元素插入到文档时执行，仅会执行一次
    customElem.prototype.build = function () {
        var element = this.element;
        var t = $(element);
        var s = t.attr('os');
        a(t, s);
    };
    return customElem;
});

require(['mip-html-os'], function (plugindemo) {
    MIP.css.htmlos = '.mip-html-os {display: none;}';
    MIP.registerMipElement('mip-html-os', plugindemo, MIP.css.htmlos);
});
