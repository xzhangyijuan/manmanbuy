define(['jquery', 'template'], function($, template){
        /*获取商城列表数据并动态渲染*/
        $.get('http://139.199.157.195:9090/api/getsitenav', function (data) {
                var html= template('HzSite-link-tpl',{list:data.result});
                $(".HzSite-link").html(html);
        })
});




