define(['jquery', 'template'], function($, template){
    //��Ʒ�����������������ģ����Ⱦ
    $.get('http://139.199.157.195:9090/api/getcategorytitle',function(data){
        $('#accordion').html(template('panel-default-tpl',{list:data.result}));

        //collapse���ʹ��
        $('.collapse').collapse('hide');

        //��Ʒ�����б�����������ģ����Ⱦ
        //ģ��titleId��ֵ
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
