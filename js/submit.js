$(function() {

    //订单倒计时
    (function() {
        var time = document.querySelector(".djs_gj");
        var oldtime = new Date(); //传入的时间
        oldtime = oldtime.setDate(oldtime.getDate() + 1); //模拟24小时后的时间
        //时间换算
        function timer(oldtime) {
            var newtime = new Date();
            var time = (oldtime - newtime) / 1000;

            // var d = parseInt(time / (60 * 60 * 24));
            var h = parseInt(time / 60 / 60 % 24);
            var m = parseInt(time / 60 % 60);
            var s = parseInt(time % 60);
            return +h + "小时" + m + "分钟" + s + "秒";
        }

        setInterval(function() {
            time.innerHTML = timer(oldtime);　　
        }, 1000)
    })()



    //提货时间设置

    var getdate = document.querySelector("#riqi");
    var date = new Date();

    function getTimer(date) {
        // var time = new Date();
        // var h = time.getHours();
        // h = h < 10 ? '0' + h : h;
        // var m = time.getMinutes();
        // m = m < 10 ? '0' + m : m;
        // var s = time.getSeconds();
        // s = s < 10 ? '0' + s : s;
        // return h + ':' + m + ':' + s;
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dates = date.getDate();
        return year + '-' + month + '-' + dates;
    }
    // console.log(getTimer(date));

    getdate.value = getTimer(date);

    // 下单时间
    var shijian = document.querySelector("#shijian_gj")
    var nowtime = new Date();


    function getTime(nowtime) {
        var year = nowtime.getFullYear();
        var month = nowtime.getMonth() + 1;
        var dates = nowtime.getDate();

        var h = nowtime.getHours();
        h = h < 10 ? '0' + h : h;
        var m = nowtime.getMinutes();
        m = m < 10 ? '0' + m : m;
        var s = nowtime.getSeconds();
        s = s < 10 ? '0' + s : s;

        return year + '-' + month + '-' + dates + ' ' + h + ':' + m + ':' + s;

    }
    // getTimer(nowtime)
    console.log(getTime(nowtime));

    shijian.value = getTime(nowtime);








    // 总计  遍历.sum_gj

    var sum = 0; //总金额
    // 遍历.sum_gj总计
    $(".sum_gj").each(function(i, ele) {
        //因为是计算价格要截取价格的第一个索引号的元素
        sum += parseFloat($(ele).text().substr(1));
    });
    //保留两位小数
    $(".zonge_gj .heji_gj").text("￥" + sum.toFixed(2));
    // }



    //顶部合计
    $(".total_gj .price_gj").text("￥" + sum.toFixed(2));

    // 商品总额
    $(".last_gj b").text("￥" + sum.toFixed(2));


})