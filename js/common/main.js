/**
 * Created by Chen-ACER on 2017/3/6.
 */
requirejs.config({
    baseUrl: '/',
    paths: {

        // 第三方库的路径配置
        jquery: 'node_modules/jquery/dist/jquery.min',
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min',
        html5shiv: 'node_modules/html5shiv/dist/html5shiv-printshiv.min',
        respond: 'node_modules/respond/main',
        template: 'node_modules/art-template/dist/template',

        // 自己写的js的路径配置
        index: 'js/index',
        sitenav: 'js/sitenav',
        brandTitle: 'js/brandTitle',
        getBrand: 'js/getBrand',
        moneyctrl: 'js/moneyctrl',
        gsproduct: 'js/getgsshop/getgsshop',
        category: 'js/getCategory',
        getCategoryFunction: 'js/getCategory-function',
        baicaijia: 'js/baiCaiJia/baiCaiJia',
        saveMoneyShop: 'js/saveMoney-shop',
        coupon: 'js/coupon/coupon',
        couponList: 'js/coupon/coupon_list',
        inlanddiscount: 'js/gnzk/gnzk-index',
        gnzkShop: 'js/gnzk/gnzk-shop',
        util:'js/common/util',
        getCategory_bijia:'js/getCategory-bijia'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'bootstrap']);

(function(window){
    var pathname = window.location.pathname;

    switch (pathname){
        // index
        case '/':
            require(['index']);
            break;
        case '/index.html':
            require(['index']);
            break;
        case '/html/sitenav.html':
            require(['sitenav']);
            break;
        case '/html/brandTitle.html':
            require(['brandTitle']);
            break;
        case '/html/getBrand.html':
            require(['getBrand']);
            break;
        case '/html/moneyctrl.html':
            require(['moneyctrl']);
            break;
        case '/html/gsproduct.html':
            require(['gsproduct']);
            break;
        case '/html/category.html':
            require(['category']);
            break;
        case '/html/getCategory-function.html':
            require(['getCategoryFunction']);
            break;
        case '/html/baicaijia.html':
            require(['baicaijia']);
            break;
        case '/html/saveMoney-shop.html':
            require(['saveMoneyShop']);
            break;
        case '/html/coupon.html':
            require(['coupon']);
            break;
        case '/html/coupon_list.html':
            require(['couponList']);
            break;
        case '/html/inlanddiscount.html':
            require(['inlanddiscount']);
            break;
        case '/html/gnzk-shop.html':
            require(['gnzkShop']);
            break;
        case '/html/getCategory-bijia.html':
            require(['getCategory_bijia']);
            break;

    }
})(window);