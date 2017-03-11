define(['jquery', 'template', 'util'], function($, template, util) {

    var productId = util.getQueryString('productId');

    //tab������Ʒ�б���Ⱦ
    $.get('http://139.199.157.195:9090/api/getproduct',
        {productid:productId},
        function(data){
        template.helper('ProductPrice2',ProductPrice2);
        $('#nav-product').html(template('product-detail-tpl',{list:data.result}));
    });

    //����������Ⱦ
    $.get('http://139.199.157.195:9090/api/getproductcom',
        {productid:productId},
        function(data){
        $('.bijia-pj_m').html(template('friend-comment-tpl',{list:data.result}));
    })

    function ProductPrice2(data){
        var str= data.slice(0,14);
        return str;
    }

})
