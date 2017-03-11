define(['jquery', 'template', 'util'], function($, template, util){
    //得是先把这个值拿到,再发给init()
    var productId=util.getQueryString("productId");
    //方法的调用(初始化)
    init();
    //方法的定义
    function init(){
        getShop(productId);

    }


    //设置 title
    function setTitle(){
        $('title').text($('.shopName-tit').text());
    }

    //截取前一句
    function getString1(data){
        var str = data;
        var arr = str.split('。');
        var str1 = '';
        arr.forEach(function (value,index) {
            if(index==0){
                str1=value;
            }
        })
        return str1+'。';
    }
    //截取后一句
    function getString(data){
        var str = data;
        var arr = str.split('。');
        var str1 = '';
        arr.forEach(function (value,index) {
            if(index==1&&!value){
                str1=value+'。';
            }
        })
        return str1;
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function getShop(productId){
        $.ajax({
            url:"http://139.199.157.195:9090/api/getmoneyctrlproduct",
            type:"get",
            data:{
                "productid":productId
            },
            success: function (data) {

                template.helper('getString',getString);
                template.helper('getString1',getString1);
                var html=template("gnzk-shop-tpl",{ result:data.result });
                $("#gnzk-shop-menu").html(html);
                setTitle();
                //如果有城市信息就显示
                if(data.result[0].productCity){
                    $('.address').show();
                }
            }
        })
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

});