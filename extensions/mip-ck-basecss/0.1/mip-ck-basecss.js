/**
 * @file: mip-ck-basecss.js
 * @author: yanglei07
 * @description ..
 * @create data:   2016-10-08 18:02:31
 * @last modified by:   yanglei07
 * @last modified time: 2016-10-09 13:44:42
 */
/* global Vue, _, yog, MIP */

define('mip-ck-basecss', ['require', 'customElement'], function (require) {
    var customElem = require('customElement').create();

    return customElem;
});
require(['mip-ck-basecss'], function (basecss) {
    var css = __inline('./css/reset.css')
        + __inline('./css/base.css')
        + __inline('./css/head.css')
        + __inline('./css/footer.css')
        + __inline('./css/page.css')
        + __inline('./css/dialog.css');

    MIP.css.mipckbasecss = css;
    MIP.registerMipElement('mip-ck-basecss', basecss, MIP.css.mipckbasecss);
});
