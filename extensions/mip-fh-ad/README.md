# mip-fh-ad 

mip-fh-ad 用来支持m.fh21.com.cn问答详情页的直投广告显示

| 描述 | 展示页面直投广告|
|---|---|
|可用性	|完成 |
|所需脚本| - |

# 使用方法

在MIP HTML中,直接使用标签, 用于正常显示直投的广告。示例如下:
```
 <mip-fh-ad></mip-fh-ad>
```

~~mip-fh-ad目录没有自带属性,直接按照正常的html标签使用即可~~


# 属性
组件涉及的属性字段:飞华广告位id(fh-ad-pid)、飞华广告位关键词(fh-ad-keywords)、懒加载(lazy)。

+ 飞华广告位id(fh-ad-pid)
    - 是否必填: 是
    - 说明: 指定飞华直投广告位唯一ID
    
+ 飞华广告位关键字(fh-ad-keywords)
    - 是否必填: 否
    - 说明: 飞华直投广告关键词组,多词用,分隔例:`fh-ad-keywords="瘦身,性病,减肥"`, 如果没有指定则直接获取`#adParam`的`data-keyword`
    
+ 懒加载(lazy) (true | false)
    - 是否必填: 否
    - 说明: 加载广告的方式,默认是true,执行懒加载,如果设置false,则表示加载渲染页面时,直接加载对应的直投广告