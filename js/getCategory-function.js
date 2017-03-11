define(['jquery', 'template', 'util'], function($, template, util){


//�����˵���������������������
var categoryId = util.getQueryString('categoryId');
var pageCount,page=1;
$.get('http://139.199.157.195:9090/api/getcategorybyid',{categoryid:categoryId},function(data){
    $('.menuBar').html(template('menuBar-tpl',{list:data.result}))
});

//��Ʒ�б��չʾ
getBrandProductList(page);
function getBrandProductList(page){
    $.ajax({
        url:'http://139.199.157.195:9090/api/getproductlist',
        type:'get',
        data:{categoryid:categoryId,pageid:page},
        success: function (data){
            template.helper('ProductPrice1',ProductPrice1);
            template.helper('ProductPrice2',ProductPrice2);
            $('.product').html(template('fptv-shop-tpl',{result:data.result}));
            pageCount = Math.ceil(data.totalCount/data.pagesize);
            //��ҳ��li
            var html='';
            for(var i=0;i<pageCount;i++){
                html +='<li page="'+(i+1)+'" class="'+(i==0?"active":"")+'">'+(i+1)+'/'+pageCount+'</li>'
            }
            $('#selectPage').html(html);
            //��ÿ��liע���¼�
            $("#selectPage li").on('click',function(){
                $('.page-box').text($(this).text());
                $(this).parent().slideUp();
                $(window).scrollTop(0);

                var pageLi = $(this).attr('page');
                $.get('http://139.199.157.195:9090/api/getproductlist',{categoryid:categoryId,pageid:pageLi},
                    function(data){
                        template.helper('ProductPrice1',ProductPrice1);
                        template.helper('ProductPrice2',ProductPrice2);
                        $('.product').html(template('fptv-shop-tpl',{result:data.result}));
                    })
            });
        }
    })
}
//��ʼ���ײ���ҳ
pageFuc();
function pageFuc(){
    $('#selectPage-parent').on('click', function () {
        $('#selectPage').show();
    });

    $('#Next').on('click',function(){
        if(page<pageCount){
            console.log()
            page++;
            $.get('http://139.199.157.195:9090/api/getproductlist',{categoryid:categoryId,pageid:page},
                function(data){
                    template.helper('ProductPrice1',ProductPrice1);
                    template.helper('ProductPrice2',ProductPrice2);
                    $('.product').html(template('fptv-shop-tpl',{result:data.result}));
                })
            $('.page-box').text(page+'/'+pageCount);
        }else{
            alert('the last page');
        }
    })
    $('#previous').on('click',function(){
        if(page>=2){
            page--;
            $.get('http://139.199.157.195:9090/api/getproductlist',{categoryid:categoryId,pageid:page},
                function(data){
                    template.helper('ProductPrice1',ProductPrice1);
                    template.helper('ProductPrice2',ProductPrice2);
                    $('.product').html(template('fptv-shop-tpl',{result:data.result}));
                })
            $('.page-box').text(page+'/'+pageCount);
        }else{
            alert('the first page');
        }
    })
}



    function ProductPrice1(data){
        var str = data.slice(0,1);
        return str;
    }

    function ProductPrice2(data){
        var str= data.slice(1);
        return str;
    }

    function Select() {
        //��һҳ
        $('#previous').on("click", function () {
            var pageId = parseInt(util.getQueryString('PageID'));
            if (pageId == 1) {
                alert('����������ǰһҳ');
                return false;
            } else {
                pageId--;
                $('#previous').attr('href', "#?PageID=" + pageId);
                $('.page-box').text(pageId + '/15');
                getBrandProductList(pageId);
                $(window).scrollTop(0);
            }
        });
    }



        //pc������ƶ�
        $("#selectPage li").mouseover(function () {
            $(this).attr('class','active');
        });


        $("#selectPage li").mouseout(function () {
            $("#selectPage").children().removeClass('active');
        });

        /*�����¼�*/
        $("#selectPage li").on('click',function(){
            $('.page-box').text($(this).text());
            $(this).parent().slideUp();
            var pageId = parseInt($(this).attr('page'));
            location.hash="?PageID="+pageId;
            getBrandProductList(pageId);
            $(window).scrollTop(0);
        });
});


