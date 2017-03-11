/**
 * Created by Administrator on 2017/3/7.
 */
define(['jquery', 'template'], function($, template){
    //渲染标题数据
    $.ajax({
        'type':'get',
        url:'http://mmb.ittun.com/api/getbaicaijiatitle',
        success: function (data) {
            var html = template('getbaicaijiatitle-tpl', {list: data.result})
            $('.titleParent>ul').html(html);
            var titlelis = $('.titleParent>ul').find('li');
            var totleWidth = 0;
            titlelis.each(function (index, value) {
                totleWidth += $(value).innerWidth();
            });
            $('.titleParent>ul').width(totleWidth);
            //console.log( $('.titleParent>ul').width())
            //点击切换搜索和关闭按钮
            $('.baiCaiJia-search').on('click', function () {
                $(this).find('i').toggleClass('baicaijia-close baicaijia-block');
                $('.baicaijia-search-bar').toggle();
            })
            //实现title的左右滑动
            itcast.iScroll({
                swipeDom:$('.titleParent')[0],
                swipeType:'x',
                swipeDistance:100
            })

            //    定义一个对象来存储缓存
            var baicaijiaStorage={};
            var baicaijiaFid=$('.titleParent>ul>li:nth-of-type(1)').attr('data-id');
            //    如果有存在的默认渲染的缓存，就使用缓存来渲染
            if(localStorage.getItem(baicaijiaFid)){
                var hHtml=JSON.parse(localStorage.getItem(baicaijiaFid));
                var html=template('baicaijia-product-tpl',{list:hHtml});
                $('.baicaijia-product>ul').html(html);
            }else{
                //    默认渲染商品列表
                $('.baicaijia-loading').show(); //发ajax请求就显示加载中的样式
                $.ajax({
                    type:'get',
                    url:'http://mmb.ittun.com/api/getbaicaijiaproduct?titleid=0',
                    success: function (data) {
                        if(!(localStorage.getItem(0))){
                            baicaijiaStorage[baicaijiaFid]=JSON.stringify(data.result);   //将数据追加到缓存数组中
                            localStorage.setItem(baicaijiaFid,baicaijiaStorage[baicaijiaFid]);
                            var html=template('baicaijia-product-tpl',{list:data.result});
                            $('.baicaijia-product>ul').html(html);
                        }
                        $('.baicaijia-loading').hide(); //渲染完后就隐藏加载中的样式
                    }
                })
            }

            //    点击切换商品列表
            $('.titleParent>.tabs>li').click(function () {

                $(this).toggleClass('active').siblings().removeClass('active');
                var self=$(this);
                //判断是否有缓存的存在，如果有就用缓存的数据渲染
                if(localStorage.getItem(self.attr('data-id'))){
                    var html=template('baicaijia-product-tpl',{list:JSON.parse(localStorage.getItem(self.attr('data-id')))});
                    $('.baicaijia-product>ul').html(html);
                    //控制广告的显示与隐藏
                    if(self.attr('data-id')!=0){
                        $('.baicaijia-adv').hide();
                    }else{
                        $('.baicaijia-adv').show();
                    }
                }else{
                    $('.baicaijia-loading').show(); //发ajax请求就显示加载中的样式
                    $.ajax({
                        type:'get',
                        url:'http://mmb.ittun.com/api/getbaicaijiaproduct?titleid='+$(this).attr('data-id'),
                        success: function (data) {
                            if(!localStorage.getItem(self.attr('data-id'))){
                                baicaijiaStorage[self.attr('data-id')]=JSON.stringify(data.result);     //将数据追加到缓存对象中
                                localStorage.setItem(self.attr('data-id'),baicaijiaStorage[self.attr('data-id')]);
                                var html=template('baicaijia-product-tpl',{list:data.result});
                            }
                            $('.baicaijia-loading').hide(); //渲染完后就隐藏加载中的样式
                            $('.baicaijia-product>ul').html(html);
                            //控制广告栏的显示与隐藏
                            if(self.attr('data-id')!=0){
                                $('.baicaijia-adv').hide();
                            }else{
                                $('.baicaijia-adv').show();
                            }
                        }
                    })
                }

            })
//    回到顶部事件
            window.addEventListener('scroll', function () {
                var baicaijiaScrolltop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
                if(baicaijiaScrolltop>500){
                    $('.baicaijia-top>span:nth-of-type(2)').show();
                }else{
                    $('.baicaijia-top>span:nth-of-type(2)').hide();
                }
                $('.baicaijia-top>span:nth-of-type(2)').on('click', function () {
                    $(window).scrollTop(0);
                })
            })
        }
    })

});

