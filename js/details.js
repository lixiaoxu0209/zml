$(function() {
    // 详情页轮播图部分
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //详情页模态框部分
    $(".tuijian li,#che").click(function() {
        $(".shangpin_xq").css("display", "block");
        $(".mask").css("display", "block");
        $(".survice").css("display", "none");
        $(".pingjia").css("display", "none");
        $(".tuwen").css("display", "none");
        $(".tuijian").css("display", "none");
        $(".fooder").css("display", "none");
        var index = $(this).index();
        $(".shangpin_xq li").eq(index).show().siblings().hide();

    })
    $(".guige span ").click(function() {
        $(this).addClass("current_ch").siblings().removeClass("current_ch");
    })
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
    })

    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents(".p-num").siblings(".p-price").html();
    });
    $(".itxt").change(function() {
        var n = $(this).val();
    });
    $(".Group12, .qd").click(function() {
        $(".shangpin_xq").css("display", "none");
        $(".mask").css("display", "none");
        $(".survice").css("display", "block");
        $(".pingjia").css("display", "block");
        $(".tuwen").css("display", "block");
        $(".tuijian").css("display", "block");
        $(".fooder").css("display", "block");
        $(".tuijian li").each(function(i, ele) {
            console.log(i);
            var current1 = $(".tuijian li").eq(i).offset().top;
            console.log(current1);
            $("body, html").stop().animate({
                scrollTop: current1
            }, 0);
            $(this).eq(i).addClass("current1").siblings().removeClass();
        })
    });
    // 商品评价更多模块
    $("#pingjia").click(function() {
        $(".appraise").show();
        $(".homepage_ch").hide();

    })
    $(".appraise .tu_1").click(function() {
            $(".appraise").hide();
            $(".homepage_ch").show();
            $("#pingjia").offset().top;
            var current2 = $("#pingjia ").offset().top;


            $("body, html").stop().animate({
                scrollTop: current2
            }, 0);
        })
        // 商品评价详情模块
    $(".appraise .pingjia").click(function() {
        $(".evaluation_detail").css("display", "block");
        $(".appraise").css("display", "none");
        $(".fooder").css("display", "none");
    })
    $(".evaluation_detail .tu_1").click(function() {
            $(".appraise").css("display", "block");
            $(".fooder").css("display", "block");
            $(".evaluation_detail").css("display", "none");
        })
        // 点击收藏模块
    $(".collect ").click(function() {

        $(".change").toggle()
    })

})