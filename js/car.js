$(function() {
    // 1、全选全不选。点击全选复选框，所有商品的选中状态都应该跟全选复选框保持一致。
    $(".checkall").change(function() {
        var flag = $(this).prop("checked");
        $(".dian_img,.jcheckbox").prop("checked", flag);
        getSum();
    });
    // 2、点击商品前面的复选框，判断是否所有商品都已经被选中，决定全选复选框的状态是选中还是不选中。
    $(".jcheckbox").change(function() {
        var product = $(".jcheckbox").length;
        var checkedProduct = $(".jcheckbox:checked").length;
        $(".checkall").prop("checked", product === checkedProduct);
        getSum();
    });
    // 3、店铺全选全不选。点击全选复选框，所有商品的选中状态都应该跟全选复选框保持一致。

    $("#dian_one").change(function() {
        var flag = $("#dian_one").prop("checked");
        $("#dian_one").parents(".order_tkq_one").find(".jcheckbox").prop("checked", flag);
        getSum();
    });
    $("#dian_two").change(function() {
            var flag = $("#dian_two").prop("checked");
            $("#dian_two").parents(".order_tkq_two").find(".jcheckbox").prop("checked", flag);
            getSum();
        })
        // 4、店铺点击商品前面的复选框，判断是否所有商品都已经被选中，决定全选复选框的状态是选中还是不选中。
    $("#dian_one").parents(".order_tkq_one").find(".jcheckbox").click(function() {
        var product = $("#dian_one").parents(".order_tkq_one").find(".jcheckbox").length;
        var checkedProduct = $("#dian_one").parents(".order_tkq_one").find(".jcheckbox:checked").length;
        $("#dian_one").prop("checked", product === checkedProduct);
        getSum();
    })

    $("#dian_two").parents(".order_tkq_two").find(".jcheckbox").click(function() {
            var product = $("#dian_two").parents(".order_tkq_two").find(".jcheckbox").length;
            var checkedProduct = $("#dian_two").parents(".order_tkq_two").find(".jcheckbox:checked").length;
            $("#dian_two").prop("checked", product === checkedProduct);
            getSum();
        })
        //5，点击店铺前面的复选框，判断是否所有店铺都已经被选中，决定全选复选框的状态是选中还是不选中
    $(".dian_img").change(function() {
            var dianpu = $(".dian_img").length;
            var checkeddianpu = $(".dian_img:checked").length;
            $(".checkall").prop("checked", dianpu === checkeddianpu);
            getSum();

        })
        // 6、加减按钮。操作文本框的的数量进行加减。在加减之后，需要修改商品的小计金额

    $(".add_tkq").click(function() {
        var count = $(this).siblings(".itxt").val();
        count++;
        $(this).siblings(".itxt").val(count);
        var p = $(this).parents(".orders").find(".price_x").text().substr(1);
        console.log(p);

        var xiaoji = (p / (count - 1) * count).toFixed(2);
        console.log(xiaoji);
        $(this).parents(".orders").find(".price_x").text("￥" + xiaoji);
        getSum();
    })
    $(".reduce_tkq").click(function() {
            var count = $(this).siblings(".itxt").val();

            //count 是否等于1 ，等于1时，返回false  阻止 - 号继续减vle里面的值
            if (count == 1) {
                return false;
            }
            count--;
            //先判断 vle 里面的值是否为1 再决定是否--
            $(this).siblings(".itxt").val(count);

            var p = $(this).parents(".orders").find(".price_x").text().substr(1);
            console.log(p);

            var xiaoji = (p / (count + 1) * count).toFixed(2);
            console.log(xiaoji);

            $(this).parents(".orders").find(".price_x").text("￥" + xiaoji);
            getSum();

        })
        // 7、修改文本框中的数量，也需要修改商品的小计。
    $(".itxt").change(function() {
        var itxt = $(this).val();
        var p = $(this).parents(".orders").find(".price_yin").text().substr(1);
        var xiaoji = p * itxt;
        $(this).parents(".orders").find(".price_x").text("￥" + xiaoji.toFixed(2));
        getSum();
    })
    getSum();

    // 8、计算合计金额（任意商品前面的复选框状态发生改变，需要重新计算金额；点击加减按钮，需要重新计算合计金额；修改文本框中的数量，也需要修改合计金额；页面加载完成时，需要立即计算合计金额）
    function getSum() {
        // var
        var count = 0;
        var total = 0;
        checkedDiv = $(".jcheckbox:checked").parent('.orders');
        // checkedDiv.find(".itxt").each(function(i, obj) {
        //     productCount += parseInt($(obj).val());
        // })
        var checkedProduct = $(".jcheckbox:checked").length;
        $(".jiesuan_tkq").find("span").text(checkedProduct);


        checkedDiv.find(".itxt").each(function(i, obj) {
            count += parseInt($(obj).val());
        })
        checkedDiv.find(".price_x").each(function(i, obj) {
            var sums = $(obj).text().substr(1);
            var sumLength = $(obj).text().substr(1).length;

            console.log($(sums.substr(sumLength - 2, 2)).css("font-size", "12px"));


            total += parseFloat($(obj).text().substr(1));
        })
        $(".price_tkq").find("b").text(total.toFixed(2));
    }


})