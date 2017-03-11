define([], {

    // 获取指定的查询字符串
    getQueryString: function(key) {

        // 去掉字符串首字母?号
        var search = location.search.slice(1);

        // 使用&符号得到每一个key=val
        var searchArr = search.split('&');
        var tempArr = null;
        var searchObj = {};

        // 遍历数组中的每一个key=val字符串，使用=号劈开，
        // 然后以key为名，val为值添加到searchObj对象中。
        for( var i =0, len = searchArr.length; i < len; i++) {
            tempArr = searchArr[i].split('=');
            searchObj[ tempArr[0] ] = tempArr[1];
        }

        // 有参数返回指定值，没有参数返回全部值
        return arguments.length? searchObj[key]: searchObj;
        //return searchObj;
    },

    /**
     * 封装了一个匀速移动的动画函数
     * @param obj
     * @param target
     */
    animate: function(obj,target){
        clearInterval(obj.timerId); // 保证当前标签对象运动的时候，只会开启一个定时器
        obj.timerId=  setInterval(function(){  // 开启定时器
            var leader = obj.offsetLeft; //获取标签对象的当前的位置
            var  step = 20;//定义一个步长
            step=  leader<target?step:-step; //判断步长是正还是负
            if(Math.abs(leader-target)>Math.abs(step)){ //修改判断条件
                leader = leader + step;//在当前的位置加上步长
                obj.style.left = leader +'px';
            }else {
                clearInterval(obj.timerId); //清除当前对象的定时器
                obj.style.left = target+'px'; //最后不足一个步长的时候，不用迈那一步了，直接设置成目标位置即可
            }
        },15);
    },

    extend: function() {

    }
});
