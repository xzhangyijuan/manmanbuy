/**
 * Created by EP_ling on 2017/3/7.
 */
define(['jquery', 'template', 'util'], function($, template, util){
    //得是先把这个值拿到,再发给init()
    var productId=util.getQueryString("productid");
    //方法的调用(初始化)
    init();
    //方法的定义
    function init(){
        getShop(productId);
    }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function getShop(productId){
        $.ajax({
            url:"http://139.199.157.195:9090/api/getdiscountproduct",
            type:"get",
            data:{
                "productid":productId
            },
            success: function (data) {
                var html=template("gnzk-shop-tpl",data);
                $("#gnzk-shop-menu").html(html);
            }
        })
    }
});

