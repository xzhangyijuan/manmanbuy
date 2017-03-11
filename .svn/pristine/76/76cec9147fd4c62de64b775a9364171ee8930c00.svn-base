/**
 * Created by Administrator on 2017/3/6 0006.
 */
define(['jquery', 'template'], function($, template){
    // 肯德基页面渲染
    $.get('http://mmb.ittun.com/api/getcoupon', function(data) {
        $('#conpon-inner').html(template('coupon-title-tpl',data));


        //图片上浮阴影效果
        $('#coupon-title li').mouseenter(function () {
            $(this).css({
                position: 'relative',
                boxShadow: '-1px 3px 5px 0px rgba(0,0,0,.4)',
                border:'2px solid red'
            });
            $(this).stop().animate({
                top: -7,
            })
        });

        $('#coupon-title li').mouseleave(function () {
            $(this).css({
                position: 'relative',
                boxShadow: '',
                border:''
            });
            $(this).stop().animate({
                top: 0,
            })
        })

        $('.coupon-title').on('click','.coupon-a', function(){
            localStorage.setItem('couponTitle', $(this).find('p').html());
        });
    });
});
    





