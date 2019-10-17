$(function() {
        // 轮播图

        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });



    })
    /** 
//      	选择时间或修改时间时调用该方法
//      */
    // function selectTime() {
    //     // 日历文本框隐藏
    //     $("#time").hide();
    //     // 日期文本框显示
    //     $("#datetime").show();
    //     // 给显示出来的日期文本框赋值（即从隐藏的日历文本框里取出的值）
    //     $("#datetime").val($("#time").val());
    // }

// /** 
// 点击日期时调用该方法
// */
// function showCalendar() {
//     // 日期文本框隐藏
//     $("#datetime").hide();
//     // 日历文本框显示
//     $("#time").show();
// }