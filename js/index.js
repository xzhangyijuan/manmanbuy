/**
 * Created by Chen-ACER on 2017/3/7.
 */
define(['jquery', 'template'], function($, template){
    template.helper('getCount', function(common){
        return common.match(/\d+/)[0];
    });

    // 用ajax获取导航栏内容
    $.get('http://139.199.157.195:9090/api/getindexmenu', function(data){
        var html = template('index-nav-tpl', data);
        $('.index-nav > .row').html(html);
    });

    // 点击更多显示剩余的导航标签
    $('.index-nav > .row').on('click', '>.index-inner:nth-child(8)', function(){
        $('.index-inner:nth-last-child(-n+4)').slideToggle();
    });

    // 用ajax获取折扣推荐中的商品内容
    $.get('http://139.199.157.195:9090/api/getmoneyctrl', function(data){
        var html = template('index-cuxiao-tpl', data);
        $('.index-cuxiaoPro-list > ul').html(html);
    });
});