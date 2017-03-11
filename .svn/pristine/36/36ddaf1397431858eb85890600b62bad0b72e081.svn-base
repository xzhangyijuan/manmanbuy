/**
 * Created by Administrator on 2017/3/6 0006.
 */
define(['jquery', 'template', 'util'], function($, template, util){
    //优惠商品列表页面
    var id= util.getQueryString('id');
    //储存每张图片的id 获取ID
    var couponId = util.getQueryString('id');

    $('header > span').html(localStorage.getItem('couponTitle') + '优惠券');
    $('#coupon_Menu > a:eq(2)').html(localStorage.getItem('couponTitle') + '优惠券');

//渲染页面数据列表
    $.get('http://mmb.ittun.com/api/getcouponproduct?couponid=' + couponId, {couponId: couponId}, function (data) {
        $('#conpon_list').html(template('coupon-lip-tpl', data));
    });

//历史记录 表头返回
    $('.h-back').on('click',function() {history.back();});

//渲染轮播图片数据
    $.get('http://mmb.ittun.com/api/getcouponproduct?couponid='+ couponId, {couponId: couponId}, function (data) {
        //在渲染之前，做映射
        //渲染遮罩层图片
        $('.imgs').html(template('box-banner',data));

        //控制轮播图的样式
        //注册事件委托
        //获取遮罩层节点
        var box=document.getElementById("box");
        var placeholder=box.firstElementChild;

        var ul=placeholder.children[0];
        var arrow=placeholder.children[1];
        var left=arrow.children[0];
        var right=arrow.children[1];
        var lis=ul.children;
        //获取不到ul的第一个元素---动态创建出来的子元素获取不到
        $(document).on('click','li',function(e){
            //让遮罩层显示出来
            box.style.display='block';

            //获取li内图片的编号--couponProductId
            var e= e || window.event;
            var target= e.target || e.srcElement;
            //x寻找点击到的li标签
            target = target=='li'?target:$(target).parents('li');
            //获取li的id值
            //通过自定义属性固定id值
            imgId= $(target).attr('data-id');

            //点击定位在对应id的图片
            switch (imgId){
                //返回的id是一个字符
                case '57':
                    imgId=1;
                    break;
                case '58':
                    imgId=1;
                    break;
                case '59':
                    imgId=1;
                    break;
                case '60':
                    imgId=2;
                    break;
            };
            ul.style.left=-200*imgId+'px';
        });
        //遮罩层的点击事件---清除遮罩层
        box.onclick=function(e){
            box.style.display='none';
        }
        //动态克隆第一张图片放在后面
        //lis=lis.splice(-1,1);//--把“更多优惠”的图片去掉
        ul.appendChild(lis[0].cloneNode(true));

        //让轮播点显示出来
        placeholder.onmouseover=function(e){
            arrow.style.display='block';
            //让轮播图动起来
            left.onclick=function(e){
                box.style.display='block';
                e.stopPropagation();
                e.preventDefault();

                if(imgId==lis.length-1){
                    imgId=0;
                    ul.style.left=0+'px';
                }
                imgId++;
                util.animate(ul,-200*imgId);

            };

            right.onclick=function(e){
                box.style.display='block';
                e.stopPropagation();
                e.preventDefault();
                if(imgId==0){
                    imgId=lis.length-1;
                    ul.style.left=-200*imgId+'px';
                }
                imgId--;
                util.animate(ul,-200*imgId);
            };
        };
        placeholder.onmouseout=function(){
            arrow.style.display='none';
        }


        //移动端的滑动事件
        var startDistance=0;
        var moveDistance=0;
        var distance=0;
        //给容器添加触摸事件，而不是ul，否则会受到arrow的遮挡
        placeholder.addEventListener('touchstart',function(e){
            e=e || window.event;
            //去掉轮播点
            arrow.style.display= 'none';
            //arrow.style.display= 'block';
            startDistance= e.touches[0].clientX;
            //每次重新点击距离为零
        });
        placeholder.addEventListener('touchmove',function(e){
            e=e || window.event;
            moveDistance= e.touches[0].clientX;

            if(imgId==0){
                imgId=lis.length-1;
                ul.style.left=-200*imgId+'px';
            }//else if (imgId ==lis.length-1){
            //    //这里有bug
            //    imgId=1;
            //    ul.style.left=0+'px';
            //}

            distance =moveDistance - startDistance;
            //把每次移动的距离限定在200之类
            distance = distance >=200? 200:distance;

            util.animate(ul,(-200*imgId + distance));
        });
        placeholder.addEventListener('touchend',function(e){
            e=e || window.event;
            if( Math.abs(distance)>50){//滑动距离超过50，跳下一张
                if(distance>0){//往右滑动

                    if(imgId==0){
                        imgId=lis.length-1;
                        ul.style.left=-200*imgId+'px';
                    }
                    imgId--;

                }else{//往左滑动
                    if(imgId==lis.length-1){
                        imgId=0;
                        ul.style.left=0+'px';
                    };
                    imgId++;

                }
                util.animate(ul,(-200*imgId));
            }else{
                ul.style.left= -200*imgId + 'px';
            }
            //回复轮播点
            //arrow.style.display= 'block';
        });

    });
});
