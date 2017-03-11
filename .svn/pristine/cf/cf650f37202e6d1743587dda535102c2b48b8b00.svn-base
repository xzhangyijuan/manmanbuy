/**
 * Created by Administrator on 2017/3/7.
 */
define(['jquery', 'template'], function($, template){
    //获取数据，渲染到下拉
    $.get('http://139.199.157.195:9090/api/getgsshop', function (data) {
        var html = template('select-tpl', {list: data.result});
        $('.shop').html(html);
    });

    $.get('http://139.199.157.195:9090/api/getgsshoparea', function (data) {
        var html1 = template('select-two-tpl', {list: data.result});
        $('.area').html(html1)
    });

    //切换下拉
    $('.filter .sel').on('click', '> li', function (e) {
        var index = $(this).index();
        $('.bh .popbox').eq(index).toggle().siblings(".popbox").hide();
        $('.sel li i').eq(index).toggleClass("glyphicon-triangle-bottom active");

    });
    $('.bh').on('click', '.search', function () {
        $('.bh .popbox').eq(3).toggle().siblings(".popbox").hide();
    });

    var shopId = 0,areaId=0;
    (function () {

        $.get('http://139.199.157.195:9090/api/getgsproduct?areaid='+shopId+'&shopid='+areaId, function (data) {
            var tempHtml = template('product-tpl', {list: data.result});
            $('.product').html(tempHtml);
        })
    })();


    $('.shop').on('click', 'a', function (e) {
        shopId = $(this).parent().attr('data-shopId');
        var tag = e.target.innerHTML;
        $('#shop-name > a > span').html(tag);
        $.get('http://139.199.157.195:9090/api/getgsproduct?areaid=' + areaId + '&shopid=' + shopId, function (data) {
            var tempHtml = template('product-tpl', {list: data.result});
            $('.product').html(tempHtml);
        })

    })

    $('.area').on('click', 'a', function (e) {
        areaId = $(this).parent().attr('data-areaId');
        var tag2 = e.target.innerHTML;
        $('#area-name > a > span').html(tag2);
        $.get('http://139.199.157.195:9090/api/getgsproduct?areaid=' + areaId + '&shopid=' + shopId, function (data) {
            var tempHtml = template('product-tpl', {list: data.result});
            $('.product').html(tempHtml);
        })
    })
});