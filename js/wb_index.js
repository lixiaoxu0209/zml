if (window.addEventListener) {
    window.addEventListener("load", init);
} else if (window.attachEvent()) { //IE浏览器不支持addEventListener
    window.attachEvent("onload", init); //IE浏览器在写时间的时候必须加上on
}

function init() {
    var left = document.getElementById("wb_countbox_left");
    left.onclick = function() {
        leftNum();
    }

    var right = document.getElementById("wb_countbox_right");
    right.onclick = function() {
        rightNum();
    }

    function leftNum() {
        var center = document.getElementById("wb_countbox_center").innerHTML;
        if (center > 1) { //如果中间显示的数大于1
            center--; //自减
            currentNum(center); //中间显示自减后的数值
        } else {
            alert("已经是第一个数了！！！");
        }
    }

    function rightNum() {
        var center = document.getElementById("wb_countbox_center").innerHTML;
        if (center < 20) { //如果中间显示的数值小于最大的数
            center++ //自加
            currentNum(center); //在中间显示自加后的数值
        } else {
            alert("已经是最后一个数了！！！");
        }
    }

    function currentNum(num) {
        var center = document.getElementById("wb_countbox_center");

        center.innerHTML = num; //在中间显示相应的数值
    }
}


/***生成弹出框*****/

/*点击弹出按钮*/
function popBox() {
    var popBox = document.getElementById("popBox");
    var popLayer = document.getElementById("popLayer");
    popBox.style.display = "block";
    popLayer.style.display = "block";
};

/*点击关闭按钮*/
function closeBox() {
    var popBox = document.getElementById("popBox");
    var popLayer = document.getElementById("popLayer");
    popBox.style.display = "none";
    popLayer.style.display = "none";
}