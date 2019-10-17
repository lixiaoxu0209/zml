$(function() {
    $(".wjt_b1_1").click(function() {

    })
    $(".wjt_c1 li").click(function() {
        $(this).addClass("wjt_c1_1").siblings().removeClass("wjt_c1_1");
        var index = $(this).index();
        $(".wjt_c2 .wjt_c2_1").eq(index).show().siblings().hide();
    });
    $(".wjt_y2").click(function() {
        var time = 60;
        var btn = $(this);
        btn.disabled = true;
        var timer = setInterval(function() {
            if (time == 0) {
                clearInterval(timer);
                btn.disabled = false;
                btn.html("获取验证码");
            } else {
                btn.html(time + "秒");
                time--;
            }
        }, 1000);

    });
    $(".wjt_y1").on("blur focus", function() {
        var value = $(this).attr("value");
        if ($(this).is(":focus")) {
            $(this).val("");
        } else {
            $(this).val(value);
        }
    });
    $(".wjt_j1").click(function() {
        $(".wjt_j2").css("display", "block");
    })
    $(".wjt_j2 input").click(function() {
        $(".wjt_j2").css("display", "none");
    })
    $(".wjt_j2 input").click(function() {
        $(this).parents(".wjt_j2").siblings(".wjt_j").find(".wjt_j1_22").val($(this).siblings().html());
    })
    $(".wjt_b1_1 span").click(function() {
        $(".wjt_b4").css("display", "block");
    })
    $(".wjt_b1_1 span").click(function() {
        $(".wjt").css("display", "none");
    })
    $(".wjt_b1_1 img").click(function() {
        $(".wjt_b3").css("display", "block");
    })
    $(".wjt_b1_1 img").click(function() {
        $(".wjt").css("display", "none");
    })
    $(".wjt_h").click(function() {
        $(".wjt_h1").css("display", "block");
    })
    $(".wjt_h").click(function() {
        $(".wjt").css("display", "none");
    })
    $(".wjt_h").click(function() {
        $(".wjt_b3").css("display", "none");
    })
    $(".wjt_q").click(function() {
        $(".wjt_b3").css("display", "block");
    })
    $(".wjt_q").click(function() {
        $(".wjt_h1").css("display", "none");
    })
    $(".wjt_f").click(function() {
        $(".wjt").css("display", "block");
    })
    $(".wjt_f").click(function() {
        $(".wjt_b3").css("display", "none");
    })
    $('#mydatepicker').dcalendarpicker();
    $('#mydatepicker2').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });
    $('#mycalendar').dcalendar();


})