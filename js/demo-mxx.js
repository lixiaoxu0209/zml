// 获取元素
var left = document.querySelector('.left');
var lis = left.querySelectorAll('li');
var right_mx = document.querySelectorAll('.right_mx');
// for循环绑定点击事件
for (var i = 0; i < lis.length; i++) {
    // 开始给5个小li 设置索引号 ,用index获得唯一标识符，
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
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
        console.log(index);
        // 干掉所有人 让其余的item 这些div 隐藏
        for (var n = 0; n < right_mx.length; n++) {
            right_mx[n].style.display = 'none';
        }
        // 留下我自己 让对应的item 显示出来
        right_mx[index].style.display = 'block';
    }
}