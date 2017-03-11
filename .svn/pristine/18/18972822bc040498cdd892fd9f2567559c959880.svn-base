define(['jquery', 'template'], function($, template){
    inti();

    //总调用
    function inti() {
        var pageId = getQueryString('PageID') || 1;
        $('.page-box').text(pageId+'/15');
        getBrandProductList(pageId);
        Select();
    }

    //截取评论人数
    function productComCount(data) {
        var str = data.slice(1, 2);
        return str;
    }

    // 封装一个获取指定查询字符串参数值的方法
    // 如果不传参，返回所有查询字符串构成的对象；
    // 如果传1个参数，返回指定的参数值。
    function getQueryString(key) {

        // 去掉字符串首字母?号
        var search = location.hash.slice(1);

        // 使用&符号得到每一个key=val
        var searchArr = search.split('?');
        var tempArr = null;
        var searchObj = {};

        // 遍历数组中的每一个key=val字符串，使用=号劈开，
        // 然后以key为名，val为值添加到searchObj对象中。
        for (var i = 0, len = searchArr.length; i < len; i++) {
            tempArr = searchArr[i].split('=');
            searchObj[tempArr[0]] = tempArr[1];
        }

        // 有参数返回指定值，没有参数返回全部值
        return arguments.length ? searchObj[key] : searchObj;
        //return searchObj;
    }

    //获取数据渲染列表
    function getBrandProductList(pageId) {
        $.ajax({
            url: 'http://139.199.157.195:9090/api/getmoneyctrl',
            type: 'get',
            data: 'pageid=' + pageId,
            success: function (data) {
                template.helper('productComCount', productComCount);
                $('#saveMoney-list').html(template('saveMoney-list-tpl', {result: data.result}));
            }
        })
    };

    //上一页，选择页，下一页
    function Select() {
        //上一页
        $('#previous').on("click", function () {
            var pageId = parseInt(getQueryString('PageID')) || 1;
            if (pageId == 1) {
                alert('现在已是最前一页');
                return false;
            } else {
                pageId--;
                $('#previous').attr('href', "#?PageID=" + pageId);
                $('.page-box').text(pageId+'/15');
                getBrandProductList(pageId);
                $(window).scrollTop(0);
            }
        });

        //下一页
        $('#Next').on('click', function () {
            var pageId = parseInt(getQueryString('PageID')) || 1;
            if(pageId==15){
                alert('现在已是最后一页');
                return false;
            }else{
                pageId++;
                $('#Next').attr('href', "#?PageID=" + pageId);
                $('.page-box').text(pageId+'/15');
                getBrandProductList(pageId);
                $(window).scrollTop(0);
            }
        });

        //选择框
        $('#selectPage-parent').on('click', function () {
            $('#selectPage').toggle();
        });

        //pc端鼠标移动
        $("#selectPage li").mouseover(function () {
            $(this).attr('class','active');
        });

        $("#selectPage li").mouseout(function () {
            $("#selectPage").children().removeClass('active');
        });

        /*单击事件*/
        $("#selectPage li").on('click',function () {
            $('.page-box').text($(this).text());
            $(this).parent().slideUp();
            var pageId = parseInt($(this).attr('page'));
            location.hash="?PageID="+pageId;
            getBrandProductList(pageId);
            $(window).scrollTop(0);
        });
    }
});
