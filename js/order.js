$(function() {

    var url = document.location.toString(); //获取url地址
    var urlParmStr = url.slice(url.indexOf('?') + 1); //获取问号后所有的字符串
    // var arr = urlParmStr.split('&'); //通过&符号将字符串分割转成数组
    // var courseId = arr[0].split("=")[1]; //获取数组中第一个参数
    // var unit_title = arr[1].split("=")[1]; //第二个参数
    // unit_title = decodeURI(unit_title); //转码将解码方式unscape换为decodeURI，将中文参数获取
    // console.log(urlParmStr);
    var id = urlParmStr.charAt(urlParmStr.length - 1);
    console.log(id);
    for (let i = 0; i < 6; i++) {
        if (id - 1 == i) {
            $($(".tab_item")[i]).css("display", "block").siblings().css("display", "none");
            $($(".tab_list li")[i]).addClass("current").siblings().removeClass("current");
        }
        console.log($(".tab_item")[i]);
        console.log($(".tab_list li")[i]);

    }



    //给li添加点击事件，添加current，其余部分删除current
    $(".tab_list li").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
        //获取当前点击li的索引号
        var index = $(this).index();
        //让下面内容与对应索引号显示，其余隐藏
        $(".tab_con .tab_item").eq(index).show().siblings().hide();
    });






})