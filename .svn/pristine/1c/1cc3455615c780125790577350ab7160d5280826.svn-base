define(['jquery', 'template'], function($, template){
    //商品分类标题数据请求与模板渲染
    $.get('http://139.199.157.195:9090/api/getcategorytitle',function(data){
        $('#accordion').html(template('panel-default-tpl',{list:data.result}));

        //collapse插件使用
        $('.collapse').collapse('hide');

        //商品分类列表数据请求与模板渲染
        //模拟titleId的值
        var arr = [0,1,2,3,4,5,6,7]
        for(var i= 0,len=arr.length;i<len;i++){
            (function(){
                var index = arr[i];
                $.get('http://139.199.157.195:9090/api/getcategory',{titleid:i},function(data){
                    $('.panel-body'+index).html(template('panel-body-tpl',{list:data.result}));
                });
            })();
        }
    })
});
