define(['jquery', 'template', 'util'], function($, template, util){
    /*==========方法的调用=============*/
    init();
    /*==========方法的定义==============*/

    /*初始化*/
    function init() {
        var brandTitleId = util.getQueryString("brandtitleid") || 0;
        getBrandTitle(brandTitleId);

        var brandTitle = localStorage.getItem('brandTitle');
        $('#title > a').html(brandTitle + '哪个牌子好');
        $('.hd:eq(0) > h3').html(brandTitle + '哪个牌子好');
        $('.hd:eq(1) > h3').html(brandTitle + '产品销量排行');
        $('.hd:eq(2) > h3').html(brandTitle + '最新评论');

    }

    /*����Ʒ�Ʊ�������*/
    function getBrandTitle(brandTitleId) {
        $.get("http://139.199.157.195:9090/api/getbrand?brandtitleid=" + brandTitleId, function (res) {
            var html = template("brandListTpl", res);
            $(".brand-list>ul").html(html);
            getBrandProductList(brandTitleId);
        });
    }

    // http://139.199.157.195:9090/api/getbrandproductlist?brandtitleid=0&pagesize=4
    /* ��ȡ��������*/
    function getBrandProductList(brandTitleId) {
        $.get("http://139.199.157.195:9090/api/getbrandproductlist?brandtitleid=" + brandTitleId + "&pagesize=4", function (res) {
            var html = template("productListTpl", res);
            $(".product-list").html(html);
            getProDuctcom(brandTitleId, res.result[0] || 0);
        });
    }

    /*��ȡ��Ʒ����*/
    function getProDuctcom(brandTitleId, product) {
        $.get("http://139.199.157.195:9090/api/getproductcom?productid=" + product.productId, function (res) {
            res.result.product = product;
            var html = template("productComTpl", res);
            $(".product-com ul").html(html);
        })

    }
});