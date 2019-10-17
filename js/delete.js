$(function() {
    //1，当点击编辑时 进行一系列删除操作
    var flag = true;
    $(".one_tkq").click(function() {
        if (flag == true) {
            flag = false;
            $(this).text("完成");

            $(".qian").css("display", "none");
            $(".hou").css("display", "block");

            //2，当点击删除按钮时将选择的商品进行删除
            $(".shanchu_tkq").click(function() {
                //找到全选按钮看是否选中,
                if ($(".checkall").prop("checked")) {
                    // $(".zong_tkq").css("display", "none");
                    $(".big_order").text("购物车0件宝贝");
                } else if ($("#dian_one").prop("checked")) {
                    //找到店铺全选按钮看是否选中,
                    $(".order_tkq_one").remove();
                } else if ($("#dian_two").prop("checked")) {
                    $(".order_tkq_two").remove();
                } else if ($("#oneProduct").prop("checked")) {
                    //找到每个商品前面按钮看是否选中,
                    $("#oneProduct").parents(".order_one").remove();
                } else if ($("#twoProduct").prop("checked")) {
                    $("#twoProduct").parents(".order_two").remove();
                } else if ($("#threeProduct").prop("checked")) {
                    $("#threeProduct").parents(".order_one").remove();
                } else if ($("#fourProduct").prop("checked")) {
                    $("#fourProduct").parents(".order_two").remove();
                } else {
                    return false;
                }
            })

            // //3，当手指向左滑动商品时出现这个商品的删除按钮
            // var startX = 0;
            // var moveX = 0;
            //3,侧滑显示删除按钮
            // var expansion = null; //是否存在展开的list
            // var container = $(".order_body_tkq orders");
            // for (var i = 0; i < container.length; i++) {
            //     var x, y, X, Y, swipeX, swipeY;
            //     container[i].addEventListener('touchstart', function(event) {
            //         alert(1);
            //         x = event.changedTouches[0].pageX;
            //         y = event.changedTouches[0].pageY;
            //         console.log(x);
            //         console.log(y);


            //         swipeX = true;
            //         swipeY = true;
            //         if (expansion) { //判断是否展开，如果展开则收起
            //             expansion.className = "";
            //         }

            //     });
            // }
            // function prevent_default(e) {
            //     e.preventDefault();
            // }

            // function disable_scroll() {
            //     $(document).on('touchmove', prevent_default);
            // }

            // function enable_scroll() {
            //     $(document).unbind('touchmove', prevent_default)
            // }

            // var x;
            // $('.order_tkq_one .orders')
            //     .on('touchstart', function(e) {
            //         console.log(e.originalEvent.pageX)
            //         $('.order_tkq_one .orders').css('left', '0px') // close em all
            //         $(e.currentTarget).addClass('open')
            //         x = e.originalEvent.targetTouches[0].pageX // anchor point
            //     })
            //     .on('touchmove', function(e) {
            //         var change = e.originalEvent.targetTouches[0].pageX - x
            //         change = Math.min(Math.max(-100, change), 0) // restrict to -100px left, 0px right
            //         e.currentTarget.style.left = change + 'px'
            //         if (change < -10) disable_scroll() // disable scroll once we hit 10px horizontal slide
            //     })
            //     .on('touchend', function(e) {
            //         var left = parseInt(e.currentTarget.style.left)
            //         var new_left;
            //         if (left < -35) {
            //             new_left = '-100px'
            //         } else if (left > 35) {
            //             new_left = '100px'
            //         } else {
            //             new_left = '0px'
            //         }
            //         // e.currentTarget.style.left = new_left
            //         $(e.currentTarget).animate({
            //             left: new_left
            //         }, 200)
            //         enable_scroll()
            //     });

            // $('li .delete-btn').on('touchend', function(e) {
            //     e.preventDefault()
            //     $(this).parents('li').slideUp('fast', function() {
            //         $(this).remove()
            //     })
            // })
            remove();



        } else {
            flag = true;
            $(this).text("编辑");

            $(".qian").css("display", "block");
            $(".hou").css("display", "none");
        }


    });
})

// function remove() {
//     //侧滑显示删除按钮
//     var expansion = null; //是否存在展开的list
//     var container = document.querySelectorAll('.dian .orders');
//     var p_delete = document.querySelectorAll('.p_delete');
//     for (var i = 0; i < container.length; i++) {
//         var x, y, X, Y, swipeX, swipeY;
//         container[i].addEventListener('touchstart', function(event) {
//             x = event.changedTouches[0].pageX;
//             y = event.changedTouches[0].pageY;
//             swipeX = true;
//             swipeY = true;
//             if (expansion) { //判断是否展开，如果展开则收起
//                 expansion.className = "";
//             }
//         });
//         container[i].addEventListener('touchmove', function(event) {

//             X = event.changedTouches[0].pageX;
//             Y = event.changedTouches[0].pageY;
//             // 左右滑动
//             if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
//                 // 阻止事件冒泡
//                 event.stopPropagation();
//                 if (X - x > 10) { //右滑
//                     event.preventDefault();
//                     this.className = "orders order_one"; //右滑收起
//                     this.children[this.children.length - 1].className = "p_delete_yuan";
//                 }
//                 if (x - X > 10) { //左滑
//                     event.preventDefault();
//                     console.log(this);

//                     this.className = "orders order_one swipeleft"; //左滑展开
//                     // alert(p_delete[i]);
//                     var shanchu = this.children[this.children.length - 1];

//                     shanchu.className = "p_delete_remove";
//                     expansion = this;
//                 }
//                 swipeY = false;
//             }
//             // 上下滑动
//             if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
//                 swipeX = false;
//             }
//         });
//     }
// }
//  侧滑删除事件
function remove() {
    var del = document.querySelectorAll(".move_left");

    var oders_moveX = 0;
    var oders_startX = 0;

    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener("touchstart", function(e) {
            oders_startX = e.targetTouches[0].clientX;
            // console.log(oders_startX);
        });

        del[i].addEventListener("touchmove", function(e) {
            oders_moveX = e.targetTouches[0].clientX - oders_startX;

            if (oders_moveX < -30) {
                this.style.marginLeft = "-1.65rem";
            } else {
                this.style.marginLeft = "";

            }
        })
        console.log(del[i].children.length - 1);

        var message = del[i].children[del[i].children.length - 1];
        // console.log(message);

        var deletes = message.children[message.children.length - 1];
        console.log(deletes);

        deletes.onclick = function() {
            var p1 = this.parentNode.parentNode;
            if (p1.parentNode.children.length == 1) {
                p1.parentNode.parentNode.parentNode.removeChild(p1.parentNode.parentNode);
            } else {
                p1.parentNode.removeChild(p1);
            }
        };
    }
}