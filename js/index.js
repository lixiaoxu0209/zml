$(function() {

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: false,
        autoplay: stop,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    //--------------------------------------------------
    lazyLoadInit({
        showTime: 100,
        onLoadBackEnd: function(i, e) {
            // console.log("onLoadBackEnd:" + i);
        },
        onLoadBackStart: function(i, e) {
            // console.log("onLoadBackStart:" + i);
        }
    });

    // 1. 获取元素 
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得focus 的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 2. 利用定时器自动轮播图图片
    var index = 0;
    var timer = setInterval(function() {
        index++;
        // console.log(index);

        var translatex = -index * w;
        ul.style.transition = 'all .5s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    // 等着我们过渡完成之后，再去判断 监听过渡完成的事件 transitionend 
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 4) {
            index = 0;
            // console.log(index);
            // 去掉过渡效果 这样让我们的ul 快速的跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 3;
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        // 3. 小圆点跟随变化
        // 把ol里面li带有current类名的选出来去掉类名 remove
        ol.querySelector('.current').classList.remove('current');
        // 让当前索引号 的小li 加上 current   add
        ol.children[index].classList.add('current');
    });

    // 4. 手指滑动轮播图 
    // 触摸元素 touchstart： 获取手指初始坐标
    var startX = 0;
    var moveX = 0; // 后面我们会使用这个移动距离所以要定义一个全局变量
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候就停止定时器
        clearInterval(timer);
    });
    // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：  盒子原来的位置 + 手指移动的距离 
        var translatex = -index * w + moveX;
        // 手指拖动的时候，不需要动画效果所以要取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
        e.preventDefault(); // 阻止滚动屏幕的行为
    });
    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就是 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左滑就是 播放下一张 moveX 是负值
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // (2) 如果移动距离小于50像素我们就回弹
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        // 手指离开的时候就重新开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .5s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });


    //-----------------------------------------------------------------------


    var tuijian_top = $(".tuijian").offset().top;
    // console.log(tuijian_top);

    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= tuijian_top) {
            $(".sub_btn").stop().fadeIn();
        } else {
            $(".sub_btn").stop().fadeOut();
        }
        // console.log($(document).scrollTop());
        // console.log($(window));

    }
    $(window).scroll(function() {
        toggleTool();
        header_in();
        nav_goOn();
    })

    $(".sub_btn").on("click", function() {
        $("body,html").stop().animate({
            scrollTop: 0
        });
    });


    // 搜索模块
    var gowhere_top = $(".gowhere").offset().top;
    header_in();

    function header_in() {
        if ($(document).scrollTop() >= gowhere_top) {
            $("header").find(".site").css("display", "none");
            $("header").find(".message").css("display", "none");
            $("header").css("width", "85%");
        } else {
            $("header").find(".site").css("display", "block");
            $("header").find(".message").css("display", "block");
            $("header").css("width", "");

        }
    }


    //nav 隐藏
    var startY = null;
    var moveY = null;
    document.addEventListener("touchstart", function(e) {
        startY = e.targetTouches[0].clientY;
        // console.log(startY);
    });

    document.addEventListener("touchmove", function(e) {
        moveY = e.targetTouches[0].clientY - startY;
        // console.log(moveY);

    });

    nav_goOn();

    function nav_goOn() {
        // $(document).scrollTop() >= gowhere_top
        if ($(document).scrollTop() >= gowhere_top) {
            $("nav").stop().fadeOut();
            if (moveY > 50) {
                $("nav").stop().fadeIn();
            }
        } else {
            $("nav").stop().fadeIn();
        }
    }

    // 创建旅行
    $(".noOne").click(function() {
        $(this).css("display", "none");
        $(this).siblings("#go_dream").css("display", "block");
        jisuan();

    });


    $("#add_new").click(function() {
        var new_dream = $("#mydream").clone(true);
        // console.log(new_dream);
        // console.log($("#mydream"));
        $(this).before(new_dream);

        jisuan();
    });


    function jisuan() {
        var Howmany = $("#dream_box").children().length;
        var arr = ['一', '二', '三', '四', '五', '六', '七'];
        if (Howmany >= 7) {
            $("#add_new").css("display", "none");
        }
        $("#num_many").text(arr[Howmany - 1]);
        // console.log($("#dream_box").length);
    }





})