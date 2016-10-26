/**
 * @file: mip-ck-course-detail.js
 * @author: yanglei07
 * @description ..
 * @create data:   2016-10-09 11:54:03
 * @last modified by:   yanglei07
 * @last modified time: 2016-10-17 15:59:41
 */
/* global Vue, _, yog, MIP */

// 上线前准备：
//     ./js/util.js:
//         domain

//     清除注释

__inline('./js/index.js');

define('mip-ck-course-detail', ['require', 'customElement'], function (require) {

    var $ = require('zepto');

    var init = require('./js/index');
    var customElem = require('customElement').create();

    customElem.prototype.init = function () {

        $('#down_float_div').hide();
        $('.init-page-inner').removeClass('init-page-inner');

        $(init);
    };

    return customElem;
});
require(['mip-ck-course-detail'], function (coursedetail) {
    var css = __inline('./css/video-js.css')
        + __inline('./css/main.less')
        + __inline('./css/detail.less');

    MIP.css.mipckcoursedetail = css;
    MIP.registerMipElement('mip-ck-course-detail', coursedetail, MIP.css.mipckcoursedetail);
});
