window.onload = function() {
    console.log(1);
    var isdrag = false; //是否允许再拖动
    var leftDis, curPage; //ul的left值,当前拖动开始时坐标
    var list = document.getElementById("nav-list");
    var finalLeft; //拖动结束时ul的left
    var liPadding = 10; //li的间距
    var items = document.getElementsByClassName("list-item"); //li内a标签集合
    var totalWidth = 0; //ul的实际宽度
    var navBox = document.getElementById("nav-box"); //ul外div
    var boxWidth;
    var isShow = false;
    var nav = document.querySelector('.nav-box');
    var lis = nav.querySelectorAll('li');
    var zhanshi_mx = document.querySelectorAll('.zhanshi_mx');

    //获取ul外div的宽度
    boxWidth = parseInt(window.getComputedStyle(navBox, null).width);

    //计算ul的实际宽度
    for (var i = 0; i < items.length; i++) {
        totalWidth += parseInt(window.getComputedStyle(items[i], null).width);
    }
    totalWidth = totalWidth + items.length * liPadding;

    //设置ul的宽度值,否则li将会换行
    list.style.width = totalWidth + 10 + 'px';

    //绑定事件
    list.addEventListener('touchstart', startMouse);
    list.addEventListener('touchmove', moveMouse);
    list.addEventListener('touchend', function() {
        isdrag = false;
    });

    function startMouse(e) {
        isdrag = true;
        leftDis = parseInt(list.style.left + 0); //ul的left值
        curPage = e.touches[0].pageX; //手指触摸开始时的坐标
        return false;
    }

    function moveMouse(e) {
        if (isdrag) {
            finalLeft = leftDis + e.touches[0].pageX - curPage; //触摸结束时ul的left值
            console.log(finalLeft);
            if (finalLeft <= -(totalWidth - boxWidth) || finalLeft >= 0) { //滑到最末一页时
                return false;
            } else {
                list.style.left = finalLeft + 'px';
            }
        }
    }
    // for循环绑定点击事件
    for (var i = 0; i < lis.length; i++) {
        // 开始给5个小li 设置索引号 ,用index获得唯一标识符，
        lis[i].setAttribute('index', i);
        lis[i].onclick = function() {
            // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式

            // 干掉所有人 其余的li清除 class 这个类
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = '';
            }
            // 留下我自己 
            this.className = 'current';
            // 2. 下面的显示内容模块
            var index = this.getAttribute('index');
            // var index = i;

            // 干掉所有人 让其余的item 这些div 隐藏
            for (var n = 0; n < zhanshi_mx.length; n++) {
                zhanshi_mx[n].style.display = 'none';
            }
            // 留下我自己 让对应的item 显示出来
            zhanshi_mx[index].style.display = 'block';
            console.log(2);
        }
    }
};