$(function() {

    $(".location li").click(function() {
            $(this).addClass("color_li").siblings().removeClass("color_li"); //排他
            riben = $(this).html();
            console.log(riben);

            // console.log(riben);
            //点击 li  获取到当前li里面的内容  改变位置   

            $(this).parents(".lyza").siblings(".tou").find(".place_yous").html(riben);
            console.log($(this).parents(".lyza").siblings(".tou").find(".place_yous").html());

        })
        //  中间大盒子 lu  添加 点击事件隐藏自己显示最后一个盒子
    $(".location ul").click(function() {
            $(this).parents(".lyza").hide(1000).siblings(".lyz").slideDown(1000);
        })
        //  中间大盒子 lu  添加 点击事件隐藏自己显示最后一个盒子end

    $(".nearby_ul li").click(function() {
        // console.log(this);
        $(this).addClass("licolor").siblings().removeClass("licolor");
    })

    //搜索框
    $(".ipt input").val();
    // console.log($(".ipt input").val());
    //点击  搜索历史里面的内容   赋值到input里面

    $(".history li").click(function() {

        var vall = $(this).html();
        $(this).parents(".history").siblings(".tou").find(".ipt input").val(vall);
    })



    //点击  搜索历史里面的内容   赋值到input里面 end

    //搜索框end
    //------------------售后申请列表---------------------------
    // 加号
    var result = 0;
    $(".amount_you").click(function() {
            var aaa = parseInt($(this).siblings("input").val());
            result = aaa + 1;
            $(this).siblings("input").val(result);

            if (result <= 1) {
                $(this).siblings(".amount_zuo").addClass("color_hui");
            } else {
                $(this).siblings(".amount_zuo").removeClass("color_hui");
            }
        })
        //减号
    $(".amount_zuo").click(function() {
        var aaa = parseInt($(this).siblings("input").val());
        result = aaa - 1;
        $(this).siblings("input").val(result);
        if (aaa <= 1) {
            $(this).siblings("input").val(1);
        }

        if (result <= 1) {
            $(this).addClass("color_hui");
        } else {
            $(this).removeClass("color_hui");
        }
    });
    str();

    function str() {
        // console.log(num1);

        if (result <= 1) {
            $(".amount_zuo").addClass("color_hui");
        } else {
            $(".amount_zuo").removeClass("color_hui");
        }
    }
    //------------------售后申请列表-end--------------------------
    //--------商区-------
    $(".business_zou").click(function() {
        $(this).siblings().removeClass('color_li');
        $(this).addClass('color_li');
    });
    $(".business_you").click(function() {
        $(this).siblings().removeClass('color_li');
        $(this).addClass('color_li');
    });
    //--------商区end-------

})